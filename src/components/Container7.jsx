import {} from 'react'
import '../assets/css/style.css'
import Nanofilter from '../assets/images/logo/logo_nanofilter.png'


function Container7(){
  return(
    <>
    <div id="container7">
    <div className="top7">
        <h1 className="h1top7 fs-1 fw-normal pe-5">O FUTURO É AGORA.</h1>
    </div>

    <div className="content7 d-grid align-items-center m-5">
        <div className="part1 mb-5">
            <img src={Nanofilter} alt="logo Nanofilter"/>
        </div>

        <div className="part2 border-start border-dark border-2 col-7">
            <p className="fs-4 fw-light ms-3">filtração da agua através da nanocelulose;</p> 
            <br/>
            <p className="fs-4 fw-light ms-3 mb-0">empresa privada que construirá a máquina de filtração por nanocelulose em parceria com a IBM e implementará essa nova tecnologia no Brasil.</p> 
        </div>
    </div>
</div>
    </>
  )
}
export default Container7