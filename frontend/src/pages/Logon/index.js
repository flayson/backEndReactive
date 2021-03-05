import React from 'react';
import './styles.css';
import logoImg from '../../Assets/logo.svg';
import herosImg from '../../Assets/heroes.png';
import { Link } from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';

export default function Logon(){
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>
                <form>
                    <h1>Faço seu login</h1>
                    <input placeholder="Sua ID" type="text"/>
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro!
                    </Link>
                </form>
            </section>
            <img src={herosImg} alt="Heroes" />
        </div>
    )
} 