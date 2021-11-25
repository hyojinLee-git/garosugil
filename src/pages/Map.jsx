import React, { useEffect, useState } from 'react';
import {RenderAfterNavermapsLoaded, NaverMap} from 'react-naver-maps'
import axios from 'axios'

const OPEN_DATA_KEY=process.env.REACT_APP_OPEN_DATA_KEY
const url=`http://openapi.seoul.go.kr:8088/${OPEN_DATA_KEY}/xml/GeoInfoOfRoadsideTreeW/1/5/%EC%A4%91%EA%B5%AC`

const Map = () => {
    

    const getLocation=async()=>{
        const data=await axios.get(url)
        console.log(data)

    }
    useEffect(()=>{
        getLocation()

    },[])

   //const navermaps=window.naver.maps;
    return (
        <RenderAfterNavermapsLoaded 
        ncpClientId={process.env.REACT_APP_NAVER_CLIENT_KEY} // 자신의 네이버 계정에서 발급받은 Client ID
        error={<p>Maps Load Error</p>}
        loading={<p>Maps Loading...</p>}>
            
            <NaverMap
                mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
                style={{
                    width: '100%', // 네이버지도 가로 길이
                    height: '85vh' // 네이버지도 세로 길이
                }}
                defaultCenter={{ lat: 37.554722, lng: 126.970833 }} // 지도 초기 위치
                defaultZoom={13} // 지도 초기 확대 배율
            >
                {/* <Marker
                    key={1}
                    position={new navermaps.LatLng(37.551229, 126.988205)}
                /> */}
                
                
            </NaverMap>
      </RenderAfterNavermapsLoaded>


    );
};

export default Map;