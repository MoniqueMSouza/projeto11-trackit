import styled from "styled-components"
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";


export default function Menu() {
    const percentage = 66;
    return (
        <Container data-test="menu">
            <StyledLink to="/habitos">Habitos</StyledLink>
            <Progresso>
                <CircularProgressbarWithChildren
                    value={percentage}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                        backgroundColor: "#52B6FF",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent"

                    })}
                >
                    <StyledLink to="/hoje"><p>Hoje</p></StyledLink>
                </CircularProgressbarWithChildren>


            </Progresso>
            <StyledLink to="/historico">Histórico</StyledLink>
        </Container>
    )
}

const Container = styled.div`
  background-color:#FFFFFF;
  width: 100%;
  height: 70px;
  display: flex;
  position:fixed;
  bottom:0;
  align-items: center;
  justify-content: space-around;
  `
const Progresso = styled.div`
  width: 91px;
  height: 91px;  
  margin-bottom: 40px;
  `
const StyledLink = styled(Link)`
  text-decoration-line: none;
  color: #52B6FF;  
  font-size: 18px;
    p {
    color: #FFFFFF;
}

  `
