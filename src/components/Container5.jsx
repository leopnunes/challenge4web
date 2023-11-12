import {} from 'react'
import '../assets/css/base/container5/base.css'
import Vantagens from '../assets/images/container5/circulo.png'


function Container5(){
  return(
    <>
    <div id="container5">
    <div className="top5">
        <h1 className="h1top5 fs-1 col-3 fw-light">COM A UTILIZAÇÃO DO FILTRO DE NANOCELULOSE...</h1>
    </div>
    
    <div className="content5 my-5 d-flex flex-direction-column align-items-center">
        <img src={Vantagens} alt="vantagens" className='my-5 col-4'/>
    </div>
</div>
    </>
  )
}
export default Container5