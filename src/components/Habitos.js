import Topo from './Topo'
import Menu from './Menu'
import React, { useContext } from 'react'
import MyContext from '../contexts/context'
import { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'



export default function Habitos() {
  const { token } = useContext(MyContext)
  const [habitos, setHabitos] = useState([])
  const [cadastrarHabito, setCadastrarHabito] = useState(false)
  const [nomeDoHabito, setNomeDoHabito] = useState("")
  const [diasSelecionados, setDiasSelecionados] = useState([])

  const diasDaSemana = [
    { id: 0, name: "D" },
    { id: 1, name: "S" },
    { id: 2, name: "T" },
    { id: 3, name: "Q" },
    { id: 4, name: "Q" },
    { id: 5, name: "S" },
    { id: 6, name: "S" },
  ];

  useEffect(() => {
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    const promise = axios.get(URL, config)

    promise.then((res) => {
      setHabitos(res.data)
    })
    promise.catch((err) => {
      console.log(err.response.data)
    })
  }, [])

  function AdicionarHabito() {
    if (cadastrarHabito === true) {
      setCadastrarHabito(false)
    } else { setCadastrarHabito(true) }

  }
  function selecionarDiasDaSemana(d) {
    setDiasSelecionados([...diasSelecionados, d.id])
    console.log(diasSelecionados)
  }
  // NENHUM HABITO E FECHADO //
  if (habitos.length === 0 && cadastrarHabito === false) {

    return (
      <>
        <Topo />
        <ContainerHabitos>
          <Cabecalho>
            <h1>Hábitos</h1>
            <button onClick={AdicionarHabito}>+</button>
          </Cabecalho>
          <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
        </ContainerHabitos>
        <Menu />
      </>
    )

    //NENHUM HÁBITO E ABERTO//

  } else if (habitos.length === 0 && cadastrarHabito === true) {
    return (
      <>
        <Topo />
        <ContainerHabitos>
          <Cabecalho>
            <h1>Hábitos</h1>
            <button onClick={AdicionarHabito}>+</button>
          </Cabecalho>

          <ContainerCriarHabitos>

            <input
              placeholder="nome do hábito"
              value={nomeDoHabito}
              onChange={e => setNomeDoHabito(e.target.value)}
              // disabled={disabled}
              required
            />

            <DiasDaSemana>
              {diasDaSemana.map((d) =>

                <Button
                  key={d.id}
                  onClick={() => {selecionarDiasDaSemana(d)
                  console.log(d.id)}}
                  verificaçao={diasSelecionados.includes(d.id)}
                >
                  {d.name}
                </Button>)}

            </DiasDaSemana>

            <Botoes>
              <button>Cancelar</button>

              <button
                onClick={() =>
                  console.log(nomeDoHabito)}
              > Salvar
              </button>

            </Botoes>
          </ContainerCriarHabitos>
          <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
        </ContainerHabitos>
        <Menu />
      </>
    )


    // ALGUM HABITO REGISTRADO //
  } else if (habitos.length > 0) {


  }

}

const ContainerHabitos = styled.div`
  margin-top:70px;
  margin-bottom: 70px;
  background-color: #E5E5E5;
  width: 100vw;
  height: 100vh;
  padding: 28px 17px;
  box-sizing: border-box;
  p{
    margin-top:17px;
    font-size:18px;
    color: #666666;
  }
  `
const Cabecalho = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h1{
    color:#126BA5;
    font-size: 23px; 
  }
 
   button{
    width:40px;
    height:35px;
    border: none;
    background-color: #52B6FF;
    border-radius:5px;
    color: #FFFFFF;
    font-size:27px;
  }
  `
const ContainerCriarHabitos = styled.div`
  margin-top:20px;
  width:340px;
  height:180px;
  background-color: #FFFFFF;
  border-radius: 5px;
  padding: 18px;
  box-sizing: border-box;
  display:flex;
  flex-direction: column;

  input{
    width:303px;
    height:45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    box-sizing: border-box;

    &::placeholder{
    font-size:20px;
    color:#DBDBDB;
    padding-left:11px;
    
  }
   }
  
  `
const DiasDaSemana = styled.div`
    display:flex;      
`
    const Button= styled.button`
    width:30px;
    height:30px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    box-sizing: border-box;
    font-size:20px;
    color:${props => props.verificaçao ? "#FFFFFF" : "#DBDBDB"};
    background-color: ${props => props.verificaçao ? "#CFCFCF" : "#FFFFFF"};
    margin-left:4px;
    margin-top: 8px;
    
   
  
  `
const Botoes = styled.div`
display:flex; 
margin-top:30px;
margin-left: 150px;

button: nth-child(1){
  color:#52B6FF;
  background-color: #FFFFFF;
  border: none;
  font-family:'Lexend Deca', sans-serif;
  font-size:16px;
}
button: nth-child(2){
  color:#FFFFFF;
  background-color: #52B6FF;
  font-family:'Lexend Deca', sans-serif;
  border: none;
  font-size:16px;
  width: 84px;
  height: 35px;
  border-radius: 5px;

}
`