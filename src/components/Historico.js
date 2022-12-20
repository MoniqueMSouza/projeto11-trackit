import Topo from './Topo'
import Menu from './Menu'
import styled from 'styled-components'

export default function Historico() {
  return (
    <>
      <Topo data-test="header"/>
      <ContainerHistorico>
        <h1>Historico</h1>
        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
      </ContainerHistorico>
      <Menu />
    </>
  )
}

const ContainerHistorico = styled.div`
  margin-top:70px;
  margin-bottom: 70px;
  background-color: #E5E5E5;
  width: 100vw;
  height: 100vh;
  padding: 28px 17px;
  box-sizing: border-box;
  h1{
    color:#126BA5;
    font-size: 23px; 
  }
  p{
    margin-top:17px;
    font-size:18px;
    color: #666666;
  }
  `
