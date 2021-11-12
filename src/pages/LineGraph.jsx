import React from 'react';
import {Header,Button } from '../style/style';

const contents=[
    {
        id:1,
        tab:2020
    },
    {
        id:2,
        tab:2019
    },
    {
        id:3,
        tab:2018
    },
    {
        id:4,
        tab:2017
    }
]

const LineGraph = () => {
    return (
        <div>
            <Header color="#D6EBEB">
            <img id="back" src="/icons/Backbutton.png" alt="back" />
                <h1 style={{color:"black"}}>
                가로수는 늘어났을까
                줄었을까?
                </h1>
                <img src="/icons/trending-up.png" alt="sort"/>
            </Header>
            <div style={{paddingLeft:"10%"}}>
                <div style={{whiteSpace:"nowrap", margin:"10% 0"}}>
                {
                    contents.map((content)=><Button key={content.id}>{content.tab}</Button>)
                }
                </div>
                <img src="/images/서울시_연도별_노선_가로수_현황.png" alt="line-graph" style={{display:"block",width:"100%"}}/>
            </div>
        </div>
    );
};

export default LineGraph;