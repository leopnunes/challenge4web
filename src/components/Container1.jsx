import { useState } from 'react'
import '../assets/css/hero.css'
import '../assets/css/style.css'
import Ponto from '../assets/images/container1/pontos.png'
import Maos from '../assets/images/container1/close-up-hands-holding-petri-dish.jpg'
import Cup from '../assets/images/container1/globencer-dL09wmeZGaI-unsplash.jpg'
import Ibm from '../assets/images/logo/ibm.png'
import Ana from '../assets/images/logo/ana.png'
import Gota from '../assets/images/container1/ícones/gota.png'
import MaoGota from '../assets/images/container1/ícones/maoGota.png'
import Filtro from '../assets/images/container1/ícones/Filtro.png'
import Filtracao from '../assets/images/container1/ícones/Filtracao.png'
import Ecologico from '../assets/images/container1/ícones/Ecologico.png'
import base from '../assets/css/style.css'


function Container1(){

    const [contador, setContador] = useState(0);
    const [lista, setLista] = useState([]);

    const incrementar =()=> setContador(contador +1);
    const decrementar =()=> setContador(contador -1);

    const addLista=()=> setLista([...lista,Math.random(10).toFixed(2)]);

  return(
    <>
    <div id="container1">
        <div className="hero">
            <div className="hero1 d-grid justify-items-center mt-5">
                <img src={Ponto} alt="quadrado pontilhado"/>
                <p className="fs-2 me-0 ms-4 p-4">CRIAMOS UM FILTRO <b>FEITO PRA VOCÊ</b> COM TANTOS DETALHES, QUE SE TORNOU <b>NANODETALHADO.</b></p>
            </div>
            <div className="heroimagem mt-5">
                <img src={Maos}/>
            </div>
            <div className="img-fluid mt-5 mb-4">
                <img src={Cup} alt="imagem copo com água"/>
            </div>
        </div>
        
        <div className="bottom d-flex ms-4 mt-3 justify-content-around flex-wrap">
            <div>
                <p className="fs-4">Nossos parceiros:</p>
                <div className="info mt-5">
                    <img src={Ibm} alt="logo IBM" className="me-5"/>
                    <img src={Ana} alt="logo ANA"/>
                </div>
            </div>
            <div className="ms-5">
                <p className="fs-4 text-center">Nosso time:</p>
                <div className="team d-flex flex-direction-row align-items-center border border-info border-2 p-5 rounded-4 bg-white">
                    <div className="worker mx-4">
                        <img src={Gota} alt="gota de agua" type="image/x-icon" className="mb-3"/>
                        <p className="fs-5">Caiuã Utida</p> 
                    </div>
                    <div className="worker mx-4">
                        <img src={MaoGota} alt="mão gota" type="image/x-icon" className="mb-3"/>
                        <p className="fs-5">Felipe Coelho</p> 
                    </div>
                    <div className="worker mx-4">
                        <img src={Filtro} alt="filtro" type="image/x-icon" className="mb-3"/>
                        <p className="fs-5">Gustavo Melo</p> 
                    </div>
                    <div className="worker mx-4">
                        <img src={Filtracao} alt="filtração de agua" type="image/x-icon" className="mb-3"/>
                        <p className="fs-5">Leonardo Nunes</p>
                    </div>
                    <div className="worker mx-4">
                        <img src={Ecologico} alt="ecologico" type="image/x-icon" className="mb-3"/>
                        <p className="fs-5">Paulo Lopes</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className='gap-4 d-grid justify-content-center'>
        <fieldset className={base.contador}>
        <legend className='text-center'>Contador</legend>
            <p className='text-center'>Valor:{contador}</p>
            <button onClick={incrementar} className='p-2 px-3 rounded-3 me-3'>Aumentar</button>
            <button onClick={decrementar} className='p-2 px-3 rounded-3'>Diminuir</button>
        </fieldset>
    <div className='gap-4 d-grid justify-content-center'>
        <fieldset className={base.contador}>
        <legend className='text-center'>Lista</legend>
            <ul>
            {lista.map((num, index)=><l1 key={index}>{num}</l1>)}
            </ul>
            <button onClick={addLista} className='p-2 px-3 rounded-3'>Lista</button>
        </fieldset>
    </div>
    </div>

    </>
  )
}
export default Container1