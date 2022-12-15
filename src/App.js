import Inicio from "./components/Inicio"
import Cadastro from "./components/Cadastro"
import Habitos from "./components/Habitos"
import Hoje from "./components/Hoje"
import Historico from "./components/Historico"
import GlobalStyle from "./assets/reset/GlobalStyle"

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (

    <BrowserRouter>
    <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/habitos" element={<Habitos />} />
        <Route path="/hoje" element={<Hoje />} />
        <Route path="/historico" element={<Historico />} />
      </Routes>
    </BrowserRouter>
  )
}

