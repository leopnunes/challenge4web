import { useState } from 'react';

function Contato() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('');

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleTelefoneChange = (event) => {
    setTelefone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAssuntoChange = (event) => {
    setAssunto(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Armazena os dados no localStorage
    localStorage.setItem('nome', nome);
    localStorage.setItem('telefone', telefone);
    localStorage.setItem('email', email);
    localStorage.setItem('assunto', assunto);

    // Limpa os campos do formulário após o envio
    setNome('');
    setTelefone('');
    setEmail('');
    setAssunto('');

    // Outras ações necessárias após o envio do formulário
  };

  return (
    <>
      <div id="contact" className='formulario p-5'>
        <h1 className='text-center mb-5'>ENTRE EM CONTATO:</h1>

        <form onSubmit={handleSubmit} className='d-grid justify-content-center'>
          <p className='fs-4'>Nome:<br /><input className='bg-light fs-5 rounded-3 p-2' type="text" placeholder="Digite seu nome" value={nome} onChange={handleNomeChange} required /></p>
          <p className='fs-4'>Telefone:<br /><input className='bg-light fs-5 rounded-3 p-2' type="tel" placeholder="Digite seu telefone" value={telefone} onChange={handleTelefoneChange} required /></p>
          <p className='fs-4'>Email:<br /><input className='bg-light fs-5 rounded-3 p-2' type="email" placeholder="Digite seu email" value={email} onChange={handleEmailChange} required /></p>
          <p className='fs-4'>Assunto:<br /><textarea className='bg-light fs-5 rounded-3 p-2' placeholder="Escreva sua mensagem" value={assunto} onChange={handleAssuntoChange} required></textarea></p>

          <input className="btnSend p-2 rounded-3 fs-5" type="submit" value="Enviar" />
        </form>
      </div>
    </>
  );
}

export default Contato;