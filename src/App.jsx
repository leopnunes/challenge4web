import {} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
/*Import dos componentes*/ 
import Nav from './components/Nav'
import Container1 from './components/Container1'
import Container2 from './components/Container2'
import Container3 from './components/Container3'
import Container4 from './components/Container4'
import Container5 from './components/Container5'
import Container6 from './components/Container6'
import Container7 from './components/Container7'
import Login from './components/Login'
import Cadastro from './components/Cadastro'
import Contato from './components/Contato'
import Footer from './components/Footer'
import Error from './components/Error'


function App() {

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/Nav" element={<Nav/>}/>
          <Route path="/" element={<Container1/>}/>
          <Route path="/Container2" element={<Container2/>}/>
          <Route path="/Container3" element={<Container3/>}/>
          <Route path="/Container4" element={<Container4/>}/>
          <Route path="/Container5" element={<Container5/>}/>
          <Route path="/Container6" element={<Container6/>}/>
          <Route path="/Container7" element={<Container7/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
          <Route path="/contato" element={<Contato/>}/>
          <Route path="/*" element={<Error/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
