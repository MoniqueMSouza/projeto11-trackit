import Inicio from "./components/Inicio"
import Cadastro from "./components/Cadastro"
import Habitos from "./components/Habitos"
import Hoje from "./components/Hoje"
import Historico from "./components/Historico"
import GlobalStyle from "./assets/reset/GlobalStyle"
import MyContext from './contexts/context'
import { useState } from "react"


import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [password, setPassword] = useState("")
  const [disabled, setDisabled] = useState(false)


  return (

    <BrowserRouter>
    <GlobalStyle/>
    <MyContext.Provider value={{email, setEmail, name, setName,image, setImage, password, setPassword, disabled, setDisabled }}>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/habitos" element={<Habitos />} />
        <Route path="/hoje" element={<Hoje />} />
        <Route path="/historico" element={<Historico />} />
      </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  )
}

