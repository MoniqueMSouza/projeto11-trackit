import styled from "styled-components"
import logo from "/Users/55359/projeto11-trackit/src/assets/img/logo.png"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { ThreeDots } from "react-loader-spinner"
import React, { useContext } from 'react'
import MyContext from '../contexts/context'

export default function Inicio() {


  const navigate = useNavigate()
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
  // const [disabled, setDisabled] = useState(false)
  const [botaoAnimado, setBotaoAnimado] = useState("Entrar")
  const { email, setEmail, setImage, setToken, password, setPassword, disabled, setDisabled } = useContext(MyContext)
  function entrar(e) {
    e.preventDefault()
    setDisabled(true)
    setBotaoAnimado(
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#FFFFFF"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    )

    const postURL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
    const dadosUsuario = { email, password }

    const promisse = axios.post(postURL, dadosUsuario)
    promisse.then(res => {
      navigate('/hoje')
      setImage(res.data.image)
      setToken(res.data.token)
      console.log(res)
    })

    promisse.catch(res => {
      alert('Email e/ou Senha incorretos!')
      setDisabled(false)
      setBotaoAnimado("Entrar")
      setEmail("")
      setPassword("")

    })

  }

  return (
    <ContainerInicio>
      <img src={logo} />
      <form onSubmit={entrar}>
        <input
          data-test="email-input"
          placeholder="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          disabled={disabled}
          required
        />

        <input
          data-test="password-input"
          placeholder="senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
          disabled={disabled}
          required
        />

        <button
          data-test="login-btn"
          disabled={disabled}
        >
          {botaoAnimado}

        </button>

      </form>


      <StyledLink data-test="signup-link" to="/cadastro">Não tem uma conta? Cadastre-se!</StyledLink>

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
    display:flex;
    align-items:center;
    justify-content: center;
    color:#FFFFFF;
    font-family:'Lexend Deca', sans-serif;
    font-size:20px;
   }
  `
const StyledLink = styled(Link)`
  color: #52B6FF;
  font-size:14px;
  `