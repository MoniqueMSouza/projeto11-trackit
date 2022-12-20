import Topo from './Topo'
import Menu from './Menu'
import styled from 'styled-components'
import dayjs from "dayjs";
import check from '/Users/55359/projeto11-trackit/src/assets/img/check.png'
import "dayjs/locale/pt-br";
import { useEffect, useState } from 'react';
import axios from 'axios';
import React, { useContext } from 'react'
import MyContext from '../contexts/context'


export default function Hoje() {
  const { token, setPorcentagem, porcentagem } = useContext(MyContext)
  const today = dayjs().locale("pt-br").format("dddd, DD/MM");
  const [hoje, setHoje] = useState([])

  

  // const [feito, setFeito] = useState(false)

  useEffect(() => {
    carregarHabitosHoje();
    
  }, [])


  function calcularPorcentagem(calc) {
    let total = parseInt(calc.length)
    let habitosFeitos = calc.filter(hab => hab.done)
    setPorcentagem(parseInt(habitosFeitos.length) * 100 / total)


console.log(porcentagem)
   
  }

  function Check(d) {

    if (d.done === false) {
      const postURL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${d.id}/check`
      const dados = {}
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }

      const promisse = axios.post(postURL, dados, config)
      promisse.then(res => {
        console.log(res)
        carregarHabitosHoje()
        calcularPorcentagem()

      })

      promisse.catch(err => {
        console.log(err);
      })

    }
    else if (d.done === true) {
      const postURL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${d.id}/uncheck`
      const dados = {}
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }

      const promisse = axios.post(postURL, dados, config)
      promisse.then(res => {
        console.log(res)
        carregarHabitosHoje()
        calcularPorcentagem()

      })

      promisse.catch(err => {
        console.log(err);
      })


    }
  }

  function carregarHabitosHoje() {
    // useEffect(() => {
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"

    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    const promise = axios.get(URL, config)

    promise.then((res) => {
      setHoje(res.data)
      console.log(res.data)
      calcularPorcentagem(res.data);


    })
    promise.catch((err) => console.log(err.response.data))
    // }, [])
  }
  return (
    <>
      <Topo />
      <ContainerHoje>
        <Cabecalho>
          <h1 data-test="today">{today[0].toUpperCase() + today.slice(1)}</h1>
          <Subtitulo data-test="today-counter" v={porcentagem==0}>{(porcentagem ===0 ? "Nenhum hábito concluído ainda" : `${porcentagem}% dos hábitos concluídos`)}</Subtitulo>
        </Cabecalho>


        {hoje.map((d) =>
          <ContainerHabitosHoje data-test="today-habit-container">
            <div>
              <h1 data-test="today-habit-name" >  {d.name} </h1>
              <h2 data-test="today-habit-sequence">Sequência atual: <H3 verificar={d.done}>{d.currentSequence} dia</H3> </h2>
              <h2 data-test="today-habit-record">Seu record: <H4 verific={d.currentSequence === d.highestSequence}>{d.highestSequence} dia</H4> </h2>
            </div>
            <ButtonStyle data-test="today-habit-check-btn" verificacao={d.done} onClick={() => Check(d)}>
              <img src={check} alt="" />
            </ButtonStyle>

          </ContainerHabitosHoje>)
        }

      </ContainerHoje>
      <Menu />
    </>
  )
}

const ContainerHoje = styled.div`
  margin-top:70px;
  margin-bottom: 70px;
  background-color: #E5E5E5;
  width: 100vw;
  height: 100vh;
  padding: 28px 17px;
  box-sizing: border-box;

  `
const Cabecalho = styled.div`
  display: flex;
  flex-direction: column; 
  margin-bottom: 28px;
  h1{
    color:#126BA5;
    font-size: 23px; 
  }
 
  `

const Subtitulo = styled.div`  
    margin-top:5px;
    font-size:18px;
    color: ${(props) => (props.v ? "#BABABA" : "#8FC549")};
  `
const ButtonStyle = styled.button`
  width: 69px;
  height: 69px;
  background-color: ${(props) => (props.verificacao ? "#8fc549" : "#ebebeb")};
  border: 1px solid #e7e7e7;
  border-radius: 5px;
`;

const ContainerHabitosHoje = styled.div`
margin-top:20px;
width:340px;
height:94px;
background-color: #FFFFFF;
border-radius: 5px;
padding: 18px;
box-sizing: border-box;
display:flex;
justify-content: space-between;
align-items: center;


div{
  display: flex;
  flex-direction: column;
}

h1{
  font-size: 20px;
  color:#666666;
  margin-bottom: 7px;
}
h2{
  color:#666666;
  font-size:13px;
}
`

const H3 = styled.span`
color:${props => props.verificar ? "#8FC549" : "#666666"};
  font-size:13px;
`
const H4 = styled.span`
color:${props => props.verific ? "#8FC549" : "#666666"};
  font-size:13px;
`