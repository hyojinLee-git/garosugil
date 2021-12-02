import React, {   useEffect, useState } from 'react';
import axios from 'axios'
import { Input } from '../style/style';
import { Link ,useLocation} from 'react-router-dom';
import {useCookies} from 'react-cookie'


const Form = () => {
    const {state}=useLocation()
    const [cookies]=useCookies(['login'])
    const [submitSuccess,setSubmitSuccess]=useState(false)
    const [values,setValues]=useState({
        name:'',
        phoneNumber:'',
        treeId:''
    })
    const initialTree={
        district:'',
        end_data:'',
        kind:'',
        lat:'',
        lng:'',
        level:1,
        road:"",
        start_data:'',
        tree_id:'',
        tree_name:'',
        uid:'',
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
        if (state){
            console.log(state)

            setTree(prev=>({
                ...prev,
                tree_id:state.TRE_IDN,
                tree_name:state.TRE_IDN,
                kind:state.WDPT_NM,
                road:state.WIDTH_NM,
                lat:state.LAT,
                lng:state.LNG
            }))
        }
        console.log(tree)
        console.log(cookies['login'])
        
        
    },[cookies,state,tree])
    const onSubmit= (e)=>{
        e.preventDefault()
        if(!values.name) return

        axios.post('https://garosero-70ff7-default-rtdb.firebaseio.com/Trees_taken.json',tree)
        .then(res=>{
            if(res.status!==200){
                throw new Error(res.statusText)
            }
            setTree(initialTree)
            setSubmitSuccess(true)
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
                <Input type="text" disabled value={values.treeId} name="treeId" placeholder="나무 아이디"/>
                <Link to="/map" >지도</Link>

                <button type="submit">보내기</button>

            </form>
            {submitSuccess&&<div>전송 성공</div>}
            </main>
        </>
    );
};

export default Form;