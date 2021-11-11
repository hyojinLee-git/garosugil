import styled from '@emotion/styled'

export const Header=styled.header`
    width: 100%;
    height: 30%;
    background: linear-gradient(180deg, #3BA59C 0%, #45B19A 49.83%, #4CB999 82.64%, #51BD97 100%);
    &>h1{
        color:white;
        margin: 0;
        padding: 10%;
        padding-top: 20%;
    }
    &>div{
        color:white;
        padding: 10%;
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