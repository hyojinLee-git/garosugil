import React from 'react';
import { useNavigate } from 'react-router';
import {Header} from '../style/style';


const LineGraph = () => {
    const navigate=useNavigate();

    return (
        <div>
            <Header color="#D6EBEB">
            <img id="back" src="/icons/Backbutton.png" alt="back" onClick={()=>navigate(-1)} style={{width:24, height:24}}/>
                <h1 style={{color:"black"}}>
                가로수는 늘어났을까
                줄었을까?
                </h1>
                <img src="/icons/trending-up.png" alt="sort"/>
            </Header>
            <div style={{marginTop:"5%", padding:"3%"}}>
                <img src="/images/서울시_연도별_노선_가로수_현황.png" alt="line-graph" style={{display:"block",width:"100%"}}/>
            </div>
        </div>
    );
};

export default LineGraph;