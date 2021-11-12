import React,{useState} from 'react';
import { useNavigate } from 'react-router';
import {Header,Button } from '../style/style';

const contents=[
    {
        id:1,
        tab:"2020"
    },
    {
        id:2,
        tab:"2019"
    },
    {
        id:3,
        tab:"2018"
    },
    {
        id:4,
        tab:"2017"
    }
]

const Chart = () => {
    const navigate=useNavigate();
    const [nowTab,setNowTab]=useState(1)

    const onChangeTab=(e)=>{
        const result=contents.filter((content)=>content.tab===e.target.innerText)
        setNowTab(result[0].id)
    }
    return (
        <div>
            <Header color="#F0F2F5">
            <img id="back" src="/icons/Backbutton.png" alt="back" onClick={()=>navigate(-1)}/>
                <h1 style={{color:"black"}}>
                가로수가 가장 많은
                동네는 어디일까?
                </h1>
                <img src="/icons/sort.png" alt="sort"/>
            </Header>
            <div style={{paddingLeft:"10%"}}>
                <div style={{whiteSpace:"nowrap", margin:"10% 0",overflowX:"auto"}}>
                {
                    contents.map((content)=><Button color={nowTab===content.id? "#FFEA9E":null} key={content.id} onClick={onChangeTab}>{content.tab}</Button>)
                }
                </div>
                <img src="/images/상위5종 가로수 변동.png" alt="chart" style={{display:"block",width:"100%"}}/>
                <div>데이터 조회 결과</div>
                
            </div>
        </div>
    );
};

export default Chart;