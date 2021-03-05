import React from 'react';
import './styles.css';
import logoImg from '../../Assets/logo.svg';
import { Link } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

export default function Register() {
    return(
        <div className="newIncident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastrar Novo Caso</h1>
                    <p>Descreva aqui</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar!
                    </Link>
                </section>
                <form action="">
                    <input type="text" placeholder="Título"/>
                    <input type="text" placeholder="Descrição"/>
                    <input type="text" placeholder="WhatsApp"/>
                    <input placeholder="Valor em R$"/>
                        
                     <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}