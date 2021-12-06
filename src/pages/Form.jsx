import React, {   useEffect, useState } from 'react';
import axios from 'axios'
import { Input, Label } from '../style/style';
import { Link,useLocation } from 'react-router-dom';
import {useCookies} from 'react-cookie'


const Form = () => {
    const {state}=useLocation()
    const [cookies]=useCookies(['login'])
    const [submitSuccess,setSubmitSuccess]=useState(false)
    const [values,setValues]=useState({
        name:'',
        phoneNumber:'',
        division:'개인'
    })
    
    const initialTree={
        district:'',
        end_date:'',
        kind:'',
        lat:'',
        lng:'',
        road:'',
        start_date:'',
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
        if(!tree.uid) return

        axios.post('https://garosero-70ff7-default-rtdb.firebaseio.com/Trees_taken.json',tree)
        .then(res=>{
            if(res.status!==200){
                throw new Error(res.statusText)
            }
            setTree(initialTree)
            setSubmitSuccess(true)
            setValues({
                name:'',
                phoneNumber:'',
                division:'개인'
            })
        })
        .catch(err=>{
            throw new Error(err.response)
        })
        
    }

    
    return (
        <>
            <header>
                <h1 style={{margin:"10% 5% 5% 5%"}}>나무 돌보미 신청</h1>
            </header>
            <main>

            <form onSubmit={onSubmit} style={{display:"flex",flexDirection:"column", margin:"20px"}}> 
                <div style={{display:"flex", flexDirection:"column"}}>
                    <Label>개인
                    <input type="radio" name="division" value="개인" checked={values.division==="개인"} onChange={onChange}/>
                    </Label>
                    <Label>단체
                    <input type="radio" name="division" value="단체" checked={values.division==="단체"} onChange={onChange}/>
                    </Label>
                    <Label>학교
                    <input type="radio" name="division" value="학교" checked={values.division==="학교"} onChange={onChange}/>
                    </Label>
                </div>
                <div style={{width:"100%",display:"flex",flexDirection:"column"}}>
                <Link to="/map" style={{textDecoration:"none", color:"gray", width:"100%"}}>
                    <Input style={{cursor:"pointer", width:"100%",marginLeft:0}} type="text" disabled value={tree.tree_id} name="treeId" placeholder="나무 선택하러 가기"/>
                </Link>
                <Input type="text" style={{marginLeft:0, width:"100%"}} onChange={onChange} value={values.name} name="name" placeholder="이름"/>
                <Input type="tel" style={{marginLeft:0, width:"100%"}} onChange={onChange} value={values.phoneNumber} name="phoneNumber" placeholder="연락처"/>
                
                
                </div>

                {submitSuccess&&<div style={{marginTop:"10%", color:"green"}}>신청 성공</div>}
                <button type="submit" style={{height:40, fontSize:20, background:"linear-gradient(90deg, #44AB9A, #73DC97)",border:"none",outline:"none", color:'white',borderRadius:10,marginTop:"10%"}}>신청하기</button>
                

            </form>
            
            </main>
        </>
    );
};

export default Form;