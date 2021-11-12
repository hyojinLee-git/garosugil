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

const Chart = () => {
    return (
        <div>
            <Header color="#F0F2F5">
            <img id="back" src="/icons/Backbutton.png" alt="back" />
                <h1 style={{color:"black"}}>
                가로수가 가장 많은
                동네는 어디일까?
                </h1>
                <img src="/icons/sort.png" alt="sort"/>
            </Header>
            <div style={{paddingLeft:"10%"}}>
                <div style={{whiteSpace:"nowrap", margin:"10% 0"}}>
                {
                    contents.map((content)=><Button key={content.id}>{content.tab}</Button>)
                }
                </div>
                <img src="/images/상위5종 가로수 변동.png" alt="chart" style={{display:"block",width:"100%"}}/>
            </div>
        </div>
    );
};

export default Chart;