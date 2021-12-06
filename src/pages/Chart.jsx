import React from 'react';
import { useNavigate } from 'react-router';
import {Header } from '../style/style';

const Chart = () => {
    const navigate=useNavigate();

    return (
        <div>
            <Header color="#F0F2F5">
            <img id="back" src="/icons/Backbutton.png" alt="back" onClick={()=>navigate(-1)} style={{width:24, height:24}} />
                <h1 style={{color:"black"}}>
                가로수가 가장 많은
                동네는 어디일까?
                </h1>
                <img src="/icons/sort.png" alt="sort"/>
            </Header>
            <div style={{marginTop:"5%", padding:"3%"}}>
                <img src="/images/상위5종 가로수 변동.png" alt="chart" style={{display:"block",width:"100%"}}/>   
            </div>
        </div>
    );
};

export default Chart;