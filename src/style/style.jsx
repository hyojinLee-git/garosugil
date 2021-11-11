import styled from '@emotion/styled'

export const Header=styled.header`
    width: 100%;
    height: 30%;
    position: relative;
    background:${props=>props.color ||"linear-gradient(180deg, #3BA59C 0%, #45B19A 49.83%, #4CB999 82.64%, #51BD97 100%) "};
    &>h1{
        color:white;
        margin: 0;
        padding: 8%;
        padding-top: 20%;
    }
    &>img{
        position: absolute;
        bottom: 0;
        right: 10%;
    }
    &>div{
        color:white;
        padding: 8%;
        padding-top: 0;
    }
;
`

export const Section=styled.section`
    padding: 10%;
    &>.sub-title{
        color: rgba(0,0,0,0.6);
    }
`

export const Button=styled.button`
    width: 80px;
    height: 30px;
    border: 1px solid #C4C4C4;
    background-color: #F0F2F5;
    border-radius: 20px;
    margin-right: 20px;
    cursor: pointer;
`