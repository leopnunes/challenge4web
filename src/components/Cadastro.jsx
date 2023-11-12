import {useState} from 'react'
import {NavLink} from 'react-router-dom'


function Cadastro(){
    /*Hook- useState  */
    const [info, setInfo] = useState({
       nome:'',
       senha:'', 
    });

    const chave = localStorage.setItem('chave',JSON.stringify(info));

    /*criando as funções */
    const valueInput = (e) =>
        setInfo({...info, [e.target.name]: e.target.value});
    
    const handleSubmit =(e)=>{
        /*previne a pagina ficar renderizando */
        e.preventDefault();
        localStorage.getItem(chave)
    }

    return(
        <>
            <form onClick={handleSubmit} className='formCadastro d-flex'>

                <h1 className='text-center fs-2'>Cadastro</h1>

                <label htmlFor='nome'>Nome:</label>
                <input type="text" name="nome" placeholder='digite seu nome' 
                onChange={valueInput} className='p-2 px-3 rounded-3'/>

                <label htmlFor='senha'>Senha:</label>
                <input type="text" name="senha" placeholder='digite sua senha' 
                onChange={valueInput} className='p-2 px-3 rounded-3'/>

                <NavLink to='/'>
                <button type='submit' className='p-2 px-3'>Cadastrar</button>
                </NavLink>

            </form>
           
        </>
    )
}
export default Cadastro