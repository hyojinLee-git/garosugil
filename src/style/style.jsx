import styled from '@emotion/styled'

export const Header=styled.header`
    width: 100%;
    height: 240px;
    position: relative;
    background:${props=>props.color ||"linear-gradient(180deg, #3BA59C 0%, #45B19A 49.83%, #4CB999 82.64%, #51BD97 100%) "};
    &>#back{
        position: absolute;
        width: 16px;
        height: 16px;
        top: 10px;
        left: 10px;
        cursor: pointer;
    }
    &>h1{
        color:black;
        margin: 0;
        padding:0 8%;
        padding-top: 80px;
    }
    &>img{
        position: absolute;
        bottom: 0;
        right: 10%;
        width: 80px;
        height: 80px;
    }
    &>div{
        color:white;
        padding-left: 8%;
        padding-top: 40px;
    }
;
`

export const Section=styled.section`
    padding:10%;
    &>.sub-title{
        color: rgba(0,0,0,0.6);
    }
`

export const Button=styled.button`
    width: 80px;
    height: 30px;
    border: 1px solid #C4C4C4;
    background-color: ${props=>props.color||"#F0F2F5"};
    border-radius: 20px;
    margin-right: 20px;
    cursor: pointer;

`

export const StyledLi=styled.li`
    background: ${props=>props.color};
    height: 90px;
    width: 90%;
    list-style: none;
    border-radius: 25px;
    display: flex;
    align-items: center;
    padding:0 10px;
    margin: 10px 0;
    font-weight: bold;
    &>a{
        text-decoration: none;
        color:black;
        display: flex;
        align-items: center;
        
    }
    & .logo{
        height: 60px;
        width: 60px;
        border-radius: 20px;
        background-color: white;
        margin-right: 5%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    & img{
        width: 24px;
        height: 24px;
    }
`

export const Subtitle=styled.div`
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F0F2F5;
    height: 90px;
    width: 90%;
    border-radius: 10px;
    font-weight: bold;
    
    &>img{
        margin-left: 5%;
    }
`