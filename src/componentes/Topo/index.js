import React from 'react'
import Logo from '../../assets/logo.png'

export default function Topo () {
    return(
        <header>
            <div>
                <img src={Logo}/>
                <nav>
                    <a>PRODUTOS</a>
                    <a>SOBRE</a>
                    <a>CONTATO</a>
                </nav>
            </div>
        </header>
    )
}