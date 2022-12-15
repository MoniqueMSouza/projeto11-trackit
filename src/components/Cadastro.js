import styled from "styled-components"
import logo from './logo.png'
import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { ThreeDots } from "react-loader-spinner"

export default function Cadastro() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [password, setPassword] = useState("")

  function cadastrar() {

    const postURL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"
    const dadosCadastro = { email, name, image, password }

    const promessa = axios.post(postURL, dadosCadastro)
    promessa.then(alert('Deu Certo'))
    console.log(dadosCadastro)

  }
  return (
    <ContainerInicio>
      <img src={logo} />

      <form>
        <input
          placeholder="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <input
          placeholder="senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        <input
          placeholder="nome"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          placeholder="foto"
          value={image}
          onChange={e => setImage(e.target.value)}
          required
        />

        <button onClick={cadastrar}>Entrar</button>

      </form>

      <StyledLink to="/">Já tem uma conta? Faça login!</StyledLink>

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
   form{
   display: flex;
   flex-direction: column;
   align-items: center;
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
    color:#FFFFFF;
    font-family:'Lexend Deca', sans-serif;
    font-size:20px;
   }
  `
const StyledLink = styled(Link)`
  color: #52B6FF;
  font-size:14px;
  `