import {} from 'react'
import '../assets/css/base/container6/base.css'
import Comparacao from '../assets/images/container6/tabela.png'
import Cuidado from '../assets/images/container6/mundo_planta.png'


function Container6(){
  return(
    <>
    <div id="container6">
    <div className="top6">
        <h1 className="h1top6 fs-1 col-4 fw-light col-3 pe-5">POR QUE USAR O NANOFILTER?</h1>
    </div>

    <div className="content6 d-grid align-items-center gap-3 img-fluid">
        <div className="part1">
            <img src={Comparacao} alt="Tabela Comparação"/>
        </div>
    
        <div className="part2 m-5">
            <img src={Cuidado} alt="Cuidado com o mundo" className='img-fluid'/>
        </div>
    </div>
</div>
    </>
  )
}
export default Container6