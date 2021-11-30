import React, {  useEffect, useState } from 'react';
import axios from 'axios'
import { Input } from '../style/style';
import { Link ,useLocation} from 'react-router-dom';



const Form = () => {
    const {state}=useLocation()
    const [submitSuccess,setSubmitSuccess]=useState(false)
    const [values,setValues]=useState({
        name:'',
        phoneNumber:'',
        treeId:state
    })
    const initialTree={
        district:'',
        end_data:'',
        level:1,
        road:"",
        start_data:'',
        tree_id:state,
        tree_name:state,
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
    const onSubmit= (e)=>{
        e.preventDefault()
        //console.log('전송')
        //console.log(values)
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
    const showAlert=()=>{
        alert('clicked!')
    }
    return (
        <>
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
            <button onClick={showAlert}>alert</button>
            </main>
        </>
    );
};

export default Form;