
import React , { useState,useCallback } from 'react';
import { Button, Header } from '../style/style';

const contents=[
    {
        id:0,
        tab:'강남구',
        image:"images/가로수 수량 1위 구의 상위 종류.png"
    },
    {
        id:1,
        tab:'서초구',
        image:"images/가로수 수량 5위 구의 상위 종류.png"
    },
    {
        id:2,
        tab:'송파구',
        image:"images/가로수 수량 2위 구의 상위 종류.png"
    },
    {
        id:3,
        tab:'강동구',
        image:"images/가로수 수량 4위 구의 상위 종류.png"
    },

]

const Doughnut = () => {
    const [nowTab,setNowTab]=useState(0)

    const onChangeTab=useCallback((e)=>{
        const result=contents.filter((content)=>content.tab===e.target.innerText)
        setNowTab(result[0].id)
    },[nowTab])
    return (
        <div>
            <Header color="#B5E9CA">
                <h1 style={{color:"black"}}>
                우리 동네에 가장 많은 
                가로수는 무엇일까?
                </h1>
                <img src="icons/donut-large.png" alt="donut"/>
            </Header>
            <div style={{paddingLeft:"10%"}}>
                <div style={{whiteSpace:"nowrap", margin:"10% 0"}}>
                {
                    contents.map((content)=><Button key={content.id} onClick={onChangeTab}>{content.tab}</Button>)
                }
                </div>
                
            </div>
            <img src={contents[nowTab].image} alt={contents[nowTab].tab} style={{display:"block",width:"100%"}}/>
        </div>
    );
};

export default Doughnut;