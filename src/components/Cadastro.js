import styled from "styled-components"
import logo from "/Users/55359/projeto11-trackit/src/assets/img/logo.png"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { ThreeDots } from "react-loader-spinner"
import React, { useContext } from 'react'
import MyContext from '../contexts/context'

export default function Cadastro() {
  const navigate = useNavigate()
  // const [email, setEmail] = useState("")
  // const [name, setName] = useState("")
  // const [image, setImage] = useState("")
  // const [password, setPassword] = useState("")
  // const [disabled, setDisabled] = useState(false)
  const { email, setEmail, name, setName, image, setImage, password, setPassword, disabled, setDisabled } = useContext(MyContext)
  const [botaoAnimado, setBotaoAnimado] = useState("Cadastrar")


  function cadastrar(e) {
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

    const postURL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"
    const dadosCadastro = { email, name, image, password }

    const promessa = axios.post(postURL, dadosCadastro)
    promessa.then(res => { navigate('/') })
    promessa.catch(res => {
      alert('Confira novamente todos os campos preenchidos!')
      setDisabled(false)
      setBotaoAnimado("Cadastrar")
      setEmail("")
      setName("")
      setImage("")
      setPassword("")

    })

  }
  return (
    <ContainerInicio>
      <img src={logo} />

      <form onSubmit={cadastrar}>
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

        <input
          data-test="user-name-input"
          placeholder="nome"
          value={name}
          onChange={e => setName(e.target.value)}
          disabled={disabled}
          required
        />
        <input
          data-test="user-image-input"
          placeholder="foto"
          value={image}
          onChange={e => setImage(e.target.value)}
          disabled={disabled}
          required
        />

        <BotaoCadastro
          data-test="signup-btn"
          disabled={disabled}
        >{botaoAnimado}</BotaoCadastro>

      </form>

      <StyledLink
        data-test="login-link"
        to="/">Já tem uma conta? Faça login!</StyledLink>

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

  `
const StyledLink = styled(Link)`
  color: #52B6FF;
  font-size:14px;
  `

  const BotaoCadastro = styled.button`
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
    opacity: ${props => props.disabled ? "0.5" : ""}
  `