import { useRef } from 'react'
import Container1 from './Container1'


function Login() {

    /* Hook - useRef - retorna um elemento ou componente no DOM */
    const user = useRef()
    const password = useRef()

    /* criando a estrutura do sessionStorage para os dados digitados */
    const getUser = sessionStorage.getItem('userData')
    const getPassword = sessionStorage.getItem('userPassword')

    /* criando as funções */
    const handleSubmit = () => {
        if (user.current.value === 'admin' && password.current.value === '123456' || user.current.value === getUser && password.current.value === getPassword) 
        {
            sessionStorage.setItem('userData', 'admin');
            sessionStorage.setItem('userPassword', '123456')
            alert("Usuário logado com sucesso!")
        } else {
            alert("Usuário e senha inválidos")
        }

    }

    return (
        <>
        {getUser && getPassword ? (
            <Container1/>
        ): (
            <form onSubmit={handleSubmit} id='login'>
                <h1>Login</h1>
                <label htmlFor="user">Usuário</label>
                <input type="text" ref={user} className='p-1 rounded-3'/>

                <label htmlFor="password">Senha</label>
                <input type="text" ref={password} className='p-1 rounded-3'/>

                <input type="submit" value='Login' className='p-2 px-4 mt-5 fs-5 rounded-3'/>
            </form>
        )
    }


        </>
    )
}


export default Login