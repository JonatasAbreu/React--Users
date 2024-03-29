import styled from 'styled-components'
import Backgroud from '../../assets/background1.svg'

export const Container = styled.div`
    background: url("${Backgroud}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center ;
    gap: 40px;
    height: 100%;
   
`
export const Image = styled.img`
     margin-top: 30px;
`

export const User = styled.li `
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    border: none;
    width: 342px;
    height: 58px;
    outline: none;
    
    p {
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        color: #FFFFFF;
    }
   
   button {
       background: none;
       border: none;
       cursor: pointer;
   }
`