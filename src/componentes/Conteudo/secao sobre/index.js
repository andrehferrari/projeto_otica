import React from 'react'
import './style.css'
import imgFarmacia from '../../../assets/loja.png'
import imgAtendente from '../../../assets/atendimento.png'

export default function Sobre () {
    return(
        <section id='sessao_sobre'>
            <div className='container'>
                <div className='secao_paragrafo'>
                    <h2>QUEM SOMOS NÓS</h2>
                    <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
                </div>
                <div className='galeria_sobre'>
                    <img className='cards img' src={imgFarmacia} />
                    <div className='cards texto'>
                        <h3>NOSSAS FILIAIS</h3>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América.</p>
                    </div>
                    <div className='cards texto'>
                        <h3>ATENDIMENTO FLEXÍVEL</h3>
                        <p>Nossa equipe é treinada para te atender</p>
                    </div>
                    <img className='cards img' src={imgAtendente} />
                </div>
            </div>
        </section>
    )
}