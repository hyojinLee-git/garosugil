import React, { useEffect, useState} from 'react';
import { GoogleMap, LoadScript,Marker } from '@react-google-maps/api';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const containerStyle = {
    width: "100%",
    height: "80vh"
  };
  
  const center = {
    lat: 37.5627216,
    lng: 126.9983663
  };

const Map = () => {

    let navigate=useNavigate()

    const locationList=["강남구", "강동구", "강북구", "강서구", "관악구", "광진구", "구로구", "금천구", "노원구", "도봉구", "동대문구", "동작구", "마포구", "서대문구", "서초구", "성동구", "성북구", "송파구", "양천구", "영등포구", "용산구", "은평구", "중구", "중랑구"]
   
    const [openData,setOpenData]=useState([])
    const [choose,setChoose]=useState({
      lat:'',
      lng:''
    })
    const [location,setLocation]=useState('강남구')
    //const [treesTaken,setTreesTaken]=useState([])
    
    //위치 선택(영등포구 버그)
    const onChangeLocation=(e)=>{
      setLocation(e.target.value)
    }
    
    //공공데이터 요청
    const getOpenData= (location)=>{
        axios.get(`https://us-central1-garosero-70ff7.cloudfunctions.net/apicall?location=${location}`)
        .then(res=>{
          setOpenData([
            ...res.data.GeoInfoOfRoadsideTreeW.row
          ])
        }).catch(err=>{
          throw new Error(err.response)
        })
        
    }

    //신청한 나무 데이터 요청
    // const getTreesTaken=async ()=>{
    //   try{
    //     const trees=await axios.get('https://garosero-70ff7-default-rtdb.firebaseio.com/Trees_taken.json')
    //     setTreesTaken([
    //       ...Object.values(trees.data)
    //     ])

    //   }catch(err){
    //     throw new Error(err.response)
    //   }
    // }
    // const filterOpenData=()=>{
    //   //console.log(treesTaken[0].tree_id)
    //   // const result=openData.filter(d=>{
    //   //   console.log(treesTaken[0].tree_id)
    //   // })
    //   let lst=[...openData]
    //   for(let i=0;i<treesTaken.length;i++){
    //     const result=lst.filter(d=>treesTaken[i].tree_id!==d.TRE_IDN)
    //     lst=[...result]
    //     //console.log(result)
    //   }
    //   //console.log(lst)
    //   setOpenData(prev=>[...prev])
    //   //console.log(openData)
    //   // console.log(result)
    //   // return result
    // }

    //클릭한 나무
    const filterChooseData=(choose)=>{
      const {lat,lng}=choose
      const result=openData.filter(d=>d.LAT===lat.toString() && d.LNG===lng.toString())
      console.log(result)
      return result[0]
    }

    //나무 클릭시 form으로 이동
    const onClickMarker=(e)=>{
      console.log(e.latLng.lat(),e.latLng.lng())
      setChoose(prev=>{
        prev.lat=e.latLng.lat()
        prev.lng=e.latLng.lng()
        return prev
      })
      const treeInfo=filterChooseData(choose)
      //setTreeId(filterData(choose))
      navigate('/form',{state:treeInfo})
    }
    
    useEffect(()=>{

        //공공데이터 요청
        getOpenData(location)
        //등록된 나무 데이터 요청
        //getTreesTaken()
    },[location])


    return (
        <> 
        <div>
          <select onChange={onChangeLocation} value={location}>
            {
              locationList.map(loc=>(
                <option key={loc} value={loc}>{loc}</option>
              ))
            }
          </select>
        </div>
        <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={17}
        >

          {
            openData?.map(d=><Marker key={d.TRE_IDN} position={{lat:Number(d.LAT),lng:Number(d.LNG)}} onClick={onClickMarker}/>)
          }
          {/* https://developers.google.com/maps/documentation/javascript/examples/full/images/parking_lot_maps.png */}
          {/* https://maps.gstatic.com/mapfiles/ms2/micons/blue-dot.png */}
          {/* {
            treesTaken?.map(tree=><Marker icon="https://developers.google.com/maps/documentation/javascript/examples/full/images/parking_lot_maps.png" key={tree.tree_id} position={{lat:tree.lat,lng:tree.lng}} />)
          } */}
          
        </GoogleMap>
      </LoadScript>
      </>

    );
};

export default Map;