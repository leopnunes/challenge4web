import {} from 'react'
import '../assets/css/style.css'
import {NavLink} from 'react-router-dom'
import Nanofilter from '../assets/images/logo/logo_nanofilter.png'

function Nav(){
  return(
    <>
    <header className="header-page">
      <nav className="navbar navbar-expand-lg border-bottom border-2 shadow bg-body-tertiary col p-4 px-5">
      <a href="/"><img className="logo" src={Nanofilter} alt="logo nanofilter"/></a>


      <button 
        className="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav" 
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
          <NavLink to="/" className="nav-link fs-5 fw-medium text-reset text-decoration-none">HOME</NavLink>
          </li>
          <li className="nav-item">
          <NavLink to="/Container2" className="nav-link ms-3 fs-5 fw-medium text-reset text-decoration-none">O PROBLEMA |</NavLink>
          </li>
          <li className="nav-item">
          <NavLink to="/Container3" className="nav-link me-3 fs-6 fw-light text-reset text-decoration-none">IMPACTOS NEGATIVOS</NavLink>
          </li>
          <li className="nav-item">
          <NavLink to="/Container4" className="nav-link ms-3 fs-5 fw-medium text-reset text-decoration-none">NOSSA SOLUÇÃO |</NavLink>
          </li>
          <li className="nav-item">
          <NavLink to="/Container5" className="nav-link me-3 fs-6 fw-light text-reset text-decoration-none">IMPACTOS POSITIVOS</NavLink>
          </li>
          <li className="nav-item">
          <NavLink to="/Container6" className="nav-link mx-3 fs-5 fw-medium text-reset text-decoration-none">COMPARAÇÃO</NavLink>
          </li>
          <li className="nav-item">
          <NavLink to="/Container7" className="nav-link mx-3 fs-5 fw-medium text-reset text-decoration-none">PREVISÃO FUTURA</NavLink>
          </li>
        </ul>

        <div className="dropdown">
          <a className="btn btn-secondary dropdown-toggle nav-link m-2 p-0" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
          <i className="bi bi-person-circle icone m-0"></i>
          </a>

          <ul className="dropdown-menu mx-auto align-self-end" aria-labelledby="dropdownMenuLink">
            <li><a className="dropdown-item" href="./login">Login</a></li>
            <li><a className="dropdown-item" href="./cadastro">Cadastro</a></li>
            <li><a className="dropdown-item" href="./contato">Entre em Contato</a></li>
          </ul>
        </div>
      </div>

      </nav>
    </header>
    </>
  )
}
export default Nav