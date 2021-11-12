
import React , { useState,useCallback } from 'react';
import { Link ,Route ,Routes,Outlet} from 'react-router-dom';
import { StyledLi, Subtitle } from '../style/style';

const contents=[
    {
        id:1,
        logoImg:"icons/donut-large.png",
        content:"우리 동네에 가장 많은 가로수는 무엇일까?",
        color:"rgba(109,213,151,0.5)",
        link:"/datavisualization/doughnut"
    },
    {
        id:2,
        logoImg:"icons/sort.png",
        content:"가로수가 가장 많은 동네는 어디일까?",
        color:"#F0F2F5",
        link:""
    },
    {
        id:3,
        logoImg:"icons/trending-up.png",
        content:"가로수는 늘어났을까 줄었을까?",
        color:"rgba(174,216,216,0.5)",
        link:""
    },
    {
        id:4,
        logoImg:"icons/sort-horizontal.png",
        content:"어떤 가로수가 늘어나고 있을까?",
        color:"#F0F2F5",
        link:""
    },
    {
        id:5,
        logoImg:"icons/trending-up.png",
        content:"가로수가 있는 길들은 늘어났을까?",
        color:"#F0F2F5",
        link:""

    },
]

const DataVisualization = () => {
    
    return (
        <>
            <h1>가로수 데이터</h1>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <Subtitle>
                데이터를 통해 보는 우리동네 가로수
                <img src="trees/tree.png" alt="tree"/>;
            </Subtitle>
            </div>
            <div style={{marginTop:20,height:30, fontSize:15,fontWeight:"bold",paddingLeft:15}}>가로수 데이터 컨텐츠</div>
            <ul style={{padding:0, display:"flex", flexDirection:"column", alignItems:"center", marginTop:0}}>
                {
                    contents.map(content=>
                    <StyledLi key={content.id} color={content.color}>
                        <a href={content.link}>
                            <div className="logo">
                                <img src={content.logoImg} alt={content.content}/>
                            </div>
                            <div style={{fontSize:14}}>
                            {content.content}
                            </div>
                        </a>
                    </StyledLi>)
                }
            </ul>
            
        </>
    );
};

export default DataVisualization;