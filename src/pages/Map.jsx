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

    const locationList=["강남구", "강동구", "강북구", "강서구", "관악구", "광진구", "구로구", "금천구", "노원구", "도봉구", "동대문구", "동작구", "마포구", "서대문구", "서초구", "성동구", "성북구", "송파구", "양천구","영등포구", "용산구", "은평구", "중구", "중랑구"]
    const [openData,setOpenData]=useState([])
    const [location,setLocation]=useState('강남구')
    const [treesTaken,setTreesTaken]=useState([])
    
    //위치 선택(영등포구 버그)
    const onChangeLocation=(e)=>{
      setLocation(e.target.value)
    }

    //클릭한 나무
    const filterChooseData=(choose)=>{
      const {lat,lng}=choose
      const result=openData.filter(d=>d.LAT===lat.toString() && d.LNG===lng.toString())
      return result[0]
    }

    //나무 클릭시 form으로 이동
    const onClickMarker=(e)=>{
      const choose={lat:e.latLng.lat(),lng:e.latLng.lng()}
      const treeInfo=filterChooseData(choose)
      navigate('/form',{state:treeInfo})
    }
  //multi axios
  useEffect(()=>{
    axios.all([
      //나무 데이터 요청
      axios.get("https://garosero-70ff7-default-rtdb.firebaseio.com/Trees_taken.json"),
      //공공데이터 요청
      axios.get(`https://us-central1-garosero-70ff7.cloudfunctions.net/apicall?location=${location}`)
    ])
    .then(axios.spread((res1,res2)=>{
        const data1=[...Object.values(res1.data)]
        const data2=[...res2.data.GeoInfoOfRoadsideTreeW.row]
        //공공데이터 필터링
        for (let i=0;i<data1.length;i++){
          for (let j=0;j<data2.length;j++){
            if (data1[i].lat===Number(data2[j].LAT) && data1[i].lng===Number(data2[j].LNG)){
              data2.splice(j,1)           
            }
          }
        }
        setTreesTaken([...data1])
        setOpenData([...data2])

      })
    )
    .catch(err=>{
      throw new Error(err.response)
    })
    
  },[location])
    return (
        <> 
        <div style={{height:"20vh",maxHeight:"90px",display:"flex",justifyContent:"center", alignItems:"center" }}>
          <select onChange={onChangeLocation} value={location} style={{width:"100%",height:"50%",border:"none", borderBottom:"2px solid #45614B", outline:"none", padding:10,background:"white",fontSize:"1rem", marginTop:"5%"}}>
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
          zoom={13}
        >

          {
            openData?.map(d=><Marker key={d.OBJECTID} position={{lat:Number(d.LAT),lng:Number(d.LNG)}} onClick={onClickMarker}/>)
          }

          {
            treesTaken.map(tree=><Marker icon="https://maps.gstatic.com/mapfiles/ms2/micons/blue-dot.png" key={tree.tree_id} position={{lat:Number(tree.lat),lng:Number(tree.lng)}} />)
          }
          
        </GoogleMap>
      </LoadScript>
      </>

    );
};

export default Map;