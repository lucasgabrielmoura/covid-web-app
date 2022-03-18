import React from 'react';
import logo from '../../img/LogoCovid.png';
import { Link } from "react-router-dom";
import Head from './hstyle'
import close from '../../img/close.svg'
import hamburguer from '../../img/hamburguer.svg'

export default function Header() {

    function menuH(){
        let caixaHAtiva = document.getElementById('hb');
        let caixaHCheck = document.getElementById('hb').getAttribute('class');
        if(caixaHCheck === 'normal-d'){
            caixaHAtiva.setAttribute('class', 'normal-a');
            console.log()
        }else{
            caixaHAtiva.setAttribute('class', 'normal-d');
            console.log()
        }
    };

    return (
        <Head>
            <img className="covid-l" src={logo} alt="logo-covid"/>
            <img onClick={menuH} className='imghb' src={hamburguer} alt="menu-hb"/>
            <div>
                <ol id='hb' className='normal-d'>
                    <img onClick={menuH} className='imghb' src={close} alt="close-hb"/>
                    <Link to='/'><li>HOME</li></Link>
                    <Link to='/sobre'><li>SOBRE</li></Link>
                </ol>
            </div>
        </Head>
    )
}