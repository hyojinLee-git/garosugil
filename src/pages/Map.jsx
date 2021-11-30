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
   
    const [openData,setOpenData]=useState([])
    const [choose,setChoose]=useState({
      lat:'',
      lng:''
    })
    const [treesTaken,setTreesTaken]=useState([])
    
    const getOpenData= ()=>{
        axios.get(`https://us-central1-garosero-70ff7.cloudfunctions.net/apicall`)
        .then(res=>{
          setOpenData([
            ...res.data.GeoInfoOfRoadsideTreeW.row
          ])
        }).catch(err=>{
          throw new Error(err.response)
        })
    
    }

    const getTreesTaken=async ()=>{
      try{
        const trees=await axios.get('https://garosero-70ff7-default-rtdb.firebaseio.com/Trees_taken.json')
        setTreesTaken([
          ...Object.values(trees.data)
        ])

      }catch(err){
        throw new Error(err.response)
      }
    }
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
    const filterChooseData=(choose)=>{
      const {lat,lng}=choose
      const result=openData.filter(d=>d.LAT===lat.toString() && d.LNG===lng.toString())
      return result[0].TRE_IDN
    }

    const onClickMarker=(e)=>{
      console.log(e.latLng.lat(),e.latLng.lng())
      setChoose(prev=>{
        prev.lat=e.latLng.lat()
        prev.lng=e.latLng.lng()
        return prev
      })
      const tree=filterChooseData(choose)
      //setTreeId(filterData(choose))
      navigate('/form',{state:tree})
    }
    
    useEffect(()=>{
        getOpenData()
        //console.log(openData)
        getTreesTaken()
        //console.log(treesTaken)
        //filterOpenData()
        //console.log('filter:',openData)
    },[])


    return (
        <> 
        <div>
          <select>
            <option>강남구</option>
            <option>강동구</option>
            <option>강북구</option>
            <option>강서구</option>
            <option>관악구</option>
            <option>광진구</option>
            <option>구로구</option>
            <option>금천구</option>
            <option>노원구</option>
            <option>도봉구</option>
            <option>동대문구</option>
            <option>동작구</option>
            <option>마포구</option>
            <option>서대문구</option>
            <option>서초구</option>
            <option>성동구</option>
            <option>성북구</option>
            <option>송파구</option>
            <option>양천구</option>
            <option>영등포구</option>
            <option>용산구</option>
            <option>은평구</option>
            <option>중구</option>
            <option>중랑구</option>
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
          {
            treesTaken?.map(tree=><Marker icon="https://developers.google.com/maps/documentation/javascript/examples/full/images/parking_lot_maps.png" key={tree.tree_id} position={{lat:tree.lat,lng:tree.lng}} />)
          }
          
        </GoogleMap>
      </LoadScript>
      </>

    );
};

export default Map;