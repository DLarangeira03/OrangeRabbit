//criação de uma página de login para aceder ao backoffice
import "./Login.css"
import React, { useState } from 'react';
import NavbarDark from "../../navbar";
import { FaRegUserCircle } from "react-icons/fa";
import { MdLock } from "react-icons/md";


//definição da função login
const LogIn = () => {

    //definição do useState
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [invalidCredentials, setInvalidCredentials] = useState(false);

    //função executada aquando o submit realizado no botão
    const handleSubmit = (event) => {
        event.preventDefault();
        //se o username a password corresponderem a admin redireciona para a página de backOffice, caso contrário aparece uma mensagem de erro
        if (username === 'admin' && password === 'admin') {
            window.location.href = '/BackOffice';
        } else {
            console.log('Credenciais inválidas');
            setInvalidCredentials(true);
            setUsername('');
            setPassword('');
        }
    };


    return (
        <div className="loginBackground">
            <NavbarDark></NavbarDark>
            <div className="head">
                <h1 className="titulo">Welcome Back</h1>
            </div>
            <div className="wrapper">
            {invalidCredentials && (
                    <div className="invalid-credentials">
                        Credenciais inválidas. Por favor, tente novamente.
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Username" value={username}
                            onChange={(e) => setUsername(e.target.value)} />
                        <FaRegUserCircle className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                        <MdLock className="icon" />
                    </div>
                    <button className="butlog" type="submit">Login</button>
                </form>
                
            </div>
            <div className="footer">
                <span>Copyright Orange Rabbit && XIX Sidemen</span>
            </div>
        </div>
    );
};

export default LogIn;
