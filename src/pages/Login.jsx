import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importe o Link aqui
import "../styles/login.css"
import Register from './Register';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica de autenticação, por exemplo, verificar se o email e a senha estão corretos
    // Se a autenticação for bem-sucedida, redirecione o usuário para a página principal
    // Caso contrário, exiba uma mensagem de erro
  };

  return (
    <div className="login-container">
      <h2>Fazer Login</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="text"
          id="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="senha"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button type="submit" className="login-button">Login</button>
      </form>
      <div className="social-login">
        <button id="google-login" className="login-button">Login com Google</button>
        <button id="facebook-login" className="login-button">Login com Facebook</button>
      </div>
      <p>Esqueceu a senha? <a href="#">Recuperar senha</a></p>
      <p>Não tem uma conta? <Link to="/register">Crie uma conta</Link></p>
    </div>
  );
}

export default Login;
