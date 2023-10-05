import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importe o componente Link
import '../styles/register.css';


function Register() {
  const [fullName, setFullName] = useState('');
  const [cpf, setCpf] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica para enviar os dados de registro para o servidor
    // Certifique-se de validar os campos antes de enviar
    // Se o registro for bem-sucedido, você pode redirecionar o usuário para a página de login ou outra página
    // Caso contrário, exiba uma mensagem de erro
  };

  return (
    <div className="register-container">
      <h2>Cadastro</h2>
      <form className="register-form" onSubmit={handleRegister}>
        <input
          type="text"
          id="fullName"
          placeholder="Nome Completo"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <input
          type="text"
          id="cpf"
          placeholder="CPF (999.999.999-99)"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          required
        />
        <input
          type="text"
          id="birthDate"
          placeholder="Data de Nascimento (dd/mm/aaaa)"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          required
        />
        <input
          type="email"
          id="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          id="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="register-button">Cadastrar</button>
      </form>
      <p>Já tem uma conta? <Link to="/login">Faça login</Link></p>
    </div>
  );
}

export default Register;
