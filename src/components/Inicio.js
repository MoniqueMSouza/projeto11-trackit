import styled from "styled-components"
import logo from './logo.png'
import { Link } from "react-router-dom"

export default function Inicio() {
  return (
    <ContainerInicio>
      <img src={logo} />
      <input placeholder="email" />
      <input placeholder="senha" />
      <button>Entrar</button>
      <StyledLink to="/cadastro">Não tem uma conta? Cadastre-se!</StyledLink>
    </ContainerInicio>
  )
}


const ContainerInicio = styled.div`
  background-color: #FFFFFF;
   width: 100vw;
   min-height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 0px;
   padding: 0px;
   padding-bottom: 200px;

   img{
    margin-top: 68px;
    margin-bottom: 33px;
   }

   input{
    width:303px;
    height:45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-bottom: 6px;
    box-sizing: border-box;

    &::placeholder{
    font-size:20px;
    color:#DBDBDB;
    padding-left:11px;
    
  }
   }

   button{
    background-color: #52B6FF;
    border-radius: 4.7px;
    width:303px;
    height:45px;
    border: none;
    margin-bottom: 25px;
   }
  `
  const StyledLink = styled(Link)`
  color: #52B6FF;
  font-size:14px;
  `