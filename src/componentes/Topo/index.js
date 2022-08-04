import React from 'react'
import Logo from '../../assets/logo.png'
import  './style.css'


export default function Topo () {
    return(
        <header>
            <div className='container-topo'>
                <img className='img-logo' src={Logo}/>
                <nav className='links'>
                    <a href='#sessao_produto'>PRODUTOS</a>
                    <a href='#sessao_sobre'>SOBRE</a>
                    <a href='#sessao_contato'>CONTATO</a>
                </nav>
            </div>
        </header>
    )
}