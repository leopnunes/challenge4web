import {} from 'react'
import '../assets/css/base/container3/base.css'
import CadeiaAlimentar from '../assets/images/container3/ícones/cadeia_alimentar.png'
import Deserto from '../assets/images/container3/ícones/deserto.png'
import Economia from '../assets/images/container3/ícones/economia.png'
import Peixe from '../assets/images/container3/ícones/peixe.png'
import Plantacao from '../assets/images/container3/ícones/plantacao.png'
import Seca from '../assets/images/container3/ícones/seca.png'
import MundoFogo from '../assets/images/container3/mundo_fogo.png'


function Container3(){
  return(
    <>
    <div id="container3">
    <div className="top3 col">
        <h1 className="h1top3 fs-1 fw-light">SE A ÁGUA <b className='fw-medium'>ACABASSE</b>...<br/> O QUE ACONTECERIA?</h1>
    </div>

    <div className="content3 m-0 mt-5 d-grid justify-content-around align-items-center p-5">
        <div className="part1 d-grid align-items-center flex-wrap">
            <div className='mb-5 d-grid flex-direction-column align-items-center'>
                <img src={Peixe} alt="peixe" className='me-3 mb-3'/>
                <p className='fs-5 m-0'>A vida marítima e muitas outras espécies entrariam em extinção;</p>
            </div>
            <div className='mb-5 d-grid flex-direction-column align-items-center'>
                <img src={CadeiaAlimentar} alt="cadeia alimentar" className='me-3 mb-3'/>
                <p className='fs-5 m-0'>A cadeia alimentar ficaria totalmente desbalanceada;</p>
            </div>
            <div className='mb-5 d-grid flex-direction-column align-items-center'>
                <img src={Plantacao} alt="plantação" className='me-3 mb-3'/>
                <p className='fs-5 m-0'>Não seria mais possível plantar e colher alimentos;</p>
            </div>
        </div>
    
        <div className="part1 d-grid align-items-center flex-wrap">
            <div className='mb-5 d-grid flex-direction-column align-items-center'>
                <img src={Seca} alt="seca" className='me-3 mb-3'/>
                <p className='fs-5 m-0'>A flora mundial também seria afetada, entrando em extinção;</p>
            </div>
            <div className='mb-5 d-grid flex-direction-column align-items-center'>
                <img src={Deserto} alt="deserto" className='me-3 mb-3'/>
                <p className='fs-5 m-0'>O mundo desertificaria;</p>
            </div>
            <div className='mb-5 d-grid flex-direction-column align-items-center'>
                <img src={Economia} alt="economia em queda" className='me-3 mb-3'/>
                <p className='fs-5 m-0'>Entraríamos em uma crise econômica mundial;</p>
            </div>
        </div>
    
        <div>
            <img src={MundoFogo} alt="mundo pegando fogo"/>
        </div>
    </div>
</div>
    </>
  )
}
export default Container3