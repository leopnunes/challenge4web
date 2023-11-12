import {} from 'react'
import '../assets/css/base/container2/base.css'
import Cuidado from '../assets/images/container2/cuidado.png'
import Agua from '../assets/images/container2/gráficos/água do mundo.png'
import Populacao from '../assets/images/container2/gráficos/populacao.png'
import Gasto from '../assets/images/container2/gráficos/gasto_agua.png'
import Acesso from '../assets/images/container2/gráficos/sem_acesso.png'
import Coagulacao from '../assets/images/container2/ícones/Coagulação.png'
import Decantacao from '../assets/images/container2/ícones/Decanter.png'
import Desinfeccao from '../assets/images/container2/ícones/desinfeccao.png'
import Filtracao from '../assets/images/container2/ícones/Filtração.png'
import Fluoretacao from '../assets/images/container2/ícones/fluoretacao.png'
import Linha from '../assets/images/container2/line.png'
import Mulher from '../assets/images/container2/imagem_mulher.png'


function Container2(){
  return(
    <>
    <div id="container2" className="col">
    <div className="top2 col">
        <h1 className="h1top fs-1 col-4 fw-light">ÁGUA: A <b className="fw-medium">NECESSIDADE PRIMORDIAL</b> HUMANA QUE ESTÁ <b className="fw-medium">ESCASSA</b> NA TERRA</h1>
    </div>
    <div className="content d-flex justify-content-around align-items-center mb-5">
        <img src={Cuidado} alt="cuidado terra"/>
        <p className="fs-5 col-5">
                Apenas 3% da água do planeta é doce e 97% são achadas em oceanos. O Brasil possui cerca de 12-14% dessa água do mundo.
                <br/>
                Os Estados Unidos possuem um pouco a mais de 7% da água doce do mundo.
        </p>
        <img src={Agua} alt="água do mundo eua x br" className="mx-3"/>
    </div>

    <div className="content2 col d-grid justify-content-center align-items-center">
        <div className="d-flex justify-content-center align-items-start m-5 me-3">
        <img src={Populacao} alt="gráfico população eua x br" className="me-5"/>

        <img src={Gasto} alt="gasto de água eua x br" className="me-5"/>

        <img src={Acesso} alt="sem acesso à água eua x br" className="me-5"/>
        </div>

    <div>
        <p className="me-5 fs-5"> 
                O Brasil possui uma população entre 200-250 milhões, gastando <b>329.8 trilhões de litros de água por ano.</b> Dado isto, <b>14% não tem acesso a água confiável</b> e 51% não tem saneamento seguro em suas casas.
                
                Os Estados Unidos, por outro lado, possuem uma população entre 300-350 milhões e gastam <b>445 trilhões de litros de água por ano</b>. Mesmo assim, a água da torneira nos Estados Unidos é considerada uma das mais seguras do mundo, e apenas 44 milhões não tem acesso a água adequada.
        </p>
    </div>
    </div>

    <div className="content3 d-flex align-items-center justify-content-between me-0">
        <div className="part1 col-4 ms-5 my-5"> 
            <h2 className="mb-4 fs-3">HÁ DIVERSAS MANEIRAS DE TRATAR A ÁGUA, MAS NO BRASIL SÃO UTILIZADOS APENAS 5 PROCESSOS:</h2>
            <div className="part101 d-grid rounded-4 p-3">
                <div className="part101icones d-grid ps-5 ">
                <div><img src={Coagulacao} alt="coagulação"/></div>
                <div><img src={Decantacao} alt="decantação"/></div>
                <div><img src={Filtracao} alt="filtração"/></div>
                <div><img src={Desinfeccao} alt="desinfecção"/></div>
                <div><img src={Fluoretacao} alt="fluoretação"/></div>                 
                </div>
                <div className="part101texto d-grid m-0 gap-3">
                    <p className="fs-5 text-start">Coagulaçao e Floculação</p>
                    <p className="fs-5 text-start">Decantação</p>
                    <p className="fs-5 text-start">Filtração</p>
                    <p className="fs-5 text-start">Desinfecção</p>
                    <p className="fs-5 text-start">Fluoretação</p>
                </div>
            </div>
        </div>
    
        <div className="part2 col-4">
            <div className="part201 d-flex align-items-center">
                <img src={Linha} alt="linha de separação"/>
                <p className="m-5 ms-4 fs-5">Esses meios <b>não usam materiais
                        biodegradáveis</b> e <b>não são eficazes</b>, além
                        de serem processos caros.</p>
            </div>
    
            <div className="part201 d-flex align-items-center">
                <img src={Linha} alt="linha de separação"/>
                <p className="m-5 ms-4 fs-5">Pra fazer as estações de água no Brasil,
                        <b>muitos projetos são atrasados</b> pelo fato
                        da estação ser subterrânea.</p>
            </div>
        </div>
        <div className="part3 img-fluid">
            <img src={Mulher} alt="desenho mulher"/>
        </div>
    </div>
</div>
    </>
  )
}
export default Container2