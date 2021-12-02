import React, {   useEffect, useState } from 'react';
import axios from 'axios'
import { Input } from '../style/style';
import { Link,useLocation } from 'react-router-dom';
import {useCookies} from 'react-cookie'


const Form = () => {
    const {state}=useLocation()
    const [cookies]=useCookies(['login'])
    const [submitSuccess,setSubmitSuccess]=useState(false)
    const [values,setValues]=useState({
        name:'',
        phoneNumber:'',
    })
    
    const initialTree={
        district:'',
        end_date:'',
        kind:'',
        lat:'',
        lng:'',
        level:1,
        road:'',
        start_date:'',
        tree_id:'',
        tree_name:'',
        uid:cookies,
        xp:0
    }
    const [tree,setTree]=useState(initialTree)

    const onChange=(e)=>{
        const {name, value}=e.target;
        setValues({
            ...values,
            [name]:value
        })
    }
    useEffect(()=>{
        const today=new Date();
        const year=today.getFullYear()
        const month=today.getMonth()+1;
        const date=today.getDate()
        if (state){
            setTree(prev=>({
                ...prev,
                tree_id:state.TRE_IDN,
                tree_name:state.TRE_IDN,
                kind:state.WDPT_NM,
                road:state.WIDTH_NM,
                lat:Number(state.LAT),
                lng:Number(state.LNG),
                district:state.GU_NM,
                uid:cookies['login'],
                start_date:`${year}-${month >= 10 ? month : '0' + month}-${date >= 10 ? date : '0' + date}`,
                end_date:`${year+1}-${month >= 10 ? month : '0' + month}-${date >= 10 ? date : '0' + date}`
            }))
        }
        
    },[state,cookies])
    const onSubmit= (e)=>{
        e.preventDefault()
        if(!values.name) return
        if(!values.phoneNumber) return
        if(!tree.tree_id) return

        axios.post('https://garosero-70ff7-default-rtdb.firebaseio.com/Trees_taken.json',tree)
        .then(res=>{
            if(res.status!==200){
                throw new Error(res.statusText)
            }
            setTree(initialTree)
            setSubmitSuccess(true)
            setValues({
                name:'',
                phoneNumber:''
            })
        })
        .catch(err=>{
            throw new Error(err.response)
        })
        
    }

    
    return (
        <>
            {cookies['login']}
            <header>
                <h1>나무 돌보미 신청</h1>
            </header>
            <main>
            <form onSubmit={onSubmit} style={{display:"flex",flexDirection:"column"}}> 
                <Input type="text" onChange={onChange} value={values.name} name="name" placeholder="이름"/>
                <Input type="tel" onChange={onChange} value={values.phoneNumber} name="phoneNumber" placeholder="연락처"/>
                
                <Link to="/map" style={{textDecoration:"none", color:"gray"}}>
                    <Input style={{cursor:"pointer"}} type="text" disabled value={tree.tree_id} name="treeId" placeholder="지도보러가기"/>
                </Link>


                <button type="submit">보내기</button>

            </form>
            {submitSuccess&&<div>전송 성공</div>}
            </main>
        </>
    );
};

export default Form;