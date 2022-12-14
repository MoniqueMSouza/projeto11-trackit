import styled from "styled-components"
import trackIt from "../img/trackIt.png"
import React, { useContext } from 'react'
import MyContext from '../contexts/context'

export default function Topo() {
    const { image } = useContext(MyContext)   

    return (
        <Header data-test="header">
            <img src={trackIt} />
            <img src={image} />
        </Header>

    )
}


const Header = styled.div`
  background-color: #126BA5;
  width: 100%;
  height: 70px;
  display: flex;
  position:fixed;
  top:0;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

   img: nth-child(2){
    width:51px;
    height: 51px;
    border-radius: 100px;
   }
  `