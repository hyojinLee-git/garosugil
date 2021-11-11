import React, { useState } from 'react';
import { Button, Header } from '../style/style';

const contents=[
    {
        tab:'강남구',
        image:"images/가로수 수량 1위 구의 상위 종류.png"
    },
    {
        tab:'서초구',
        image:""
    },
    {
        tab:'송파구',
        image:""
    },
    {
        tab:'강동구',
        image:""
    },

]

const DataVisualization = () => {
    const [nowTab,setNowTab]=useState(0)
    const onChangeTab=(e)=>{
        console.log(e)

    }
    return (
        <div>
            
            {/* nested router */}
            <Header>
                <h1>
                우리 동네에 가장 많은 
                가로수는 무엇일까?
                </h1>
            </Header>
            <div style={{paddingTop:"10%", paddingLeft:"10%"}}>
                {
                    contents.map((content)=><Button onClick={onChangeTab}>{content.tab}</Button>)
                }
                
                <img src={contents[nowTab].image} alt="now" style={{display:"block"}}/>
            </div>
        </div>
    );
};

export default DataVisualization;