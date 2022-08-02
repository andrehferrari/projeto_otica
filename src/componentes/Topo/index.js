import React from 'react'
import Logo from '../../assets/logo.png'
import  './style.css'


export default function Topo () {
    return(
        <header>
            <div className='container-topo'>
                <img className='img-logo' src={Logo}/>
                <nav className='links'>
                    <a href='google.com'>PRODUTOS</a>
                    <a href='google.com'>SOBRE</a>
                    <a href='google.com'>CONTATO</a>
                </nav>
            </div>
        </header>
    )
}