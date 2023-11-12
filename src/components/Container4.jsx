import {} from 'react'
import '../assets/css/base/container4/base.css'
import Economia from '../assets/images/container4/economia.png'
import Microscopio from '../assets/images/container4/OBJECTS.png'


function Container4(){
  return(
    <>
    <div id="container4">
    <div className="top4">
        <h1 className="h1top4 fs-1 col-3 fw-light">O QUE <b className='fw-medium'>PRECISAMOS</b> FAZER...</h1>
    </div>

    <div className="content4 d-grid p-5 gap-3">
        <div className="part1">
            <p className='fs-5'>Uma solução é o tratamento de água com o uso de nanotecnologia (que é o processo de manipulação de átomos em nano escala). Há diversas variantes quando se fala disso, mas utilizaremos a da nanocelulose para a purificação de água.</p>
        </div>
        <div className="part2">
            <img src={Microscopio} alt="microscópio" className='mx-5'/>
        </div>
        <div className="part3">
            <p className='fs-5'>A celulose é a mais vantajosa devido a sua <b>grande abundância</b> na natureza, <b>característica renovável</b> e sua <b>não-eco toxicidade.</b></p> 
        </div>
    </div>
    
    <div className="content401 d-grid align-items-center">
        <div>
            <p className="fs-5 p-4 ms-4">A nanocelulose consegue remover ions de metais facilmente e sua separação de contaminantes e solventes já foram provadas muito efetivas.</p>
        </div>

        <img src={Economia} alt="economia" className='m-5'/>
        
    </div>
</div>
    </>
  )
}
export default Container4