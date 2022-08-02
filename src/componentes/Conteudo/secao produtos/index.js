import React from 'react'
import './style.css'
import img1 from '../../../assets/oculos01.png'
import img2 from '../../../assets/oculos02.png'
import img3 from '../../../assets/oculos03.png'
import img4 from '../../../assets/oculos04.png'

export default function Produto () {
    return(
        <section>
            <div className='container'>
                <div className='secao_nossos_produtos'>
                    <h2>NOSSOS PRODUTOS</h2>
                    <p>
                        Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.
                    </p>
                    <p>
                        Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.
                    </p>
                </div>
                <div className='galeria'>
                    <div className='card-galeria'>
                        <h3>Óculos de grau</h3>
                        <img src={img1}/>
                        <p>R$ 500,00</p>
                    </div>
                    <div className='card-galeria'>
                        <h3>Óculos transition</h3>
                        <img src={img2}/>
                        <p>R$ 750,00</p>
                    </div>
                    <div className='card-galeria'>
                        <h3>Óculos de sol</h3>
                        <img src={img3}/>
                        <p>R$ 700,00</p>
                    </div>
                    <div className='card-galeria'>
                        <h3>Óculos infantil</h3>
                        <img src={img4}/>
                        <p>R$ 500,00</p>
                    </div>
                </div>
                <div className='sessao_lista'>
                    <p>Todos os nossos produtos incluem:</p>
                    <ul>
                        <li>Garantia de 1 ano</li>
                        <li>Manutenção preventiva</li>
                        <li>Descontos especiais na compra da segunda unidade</li>
                        <li>Flexibilidade de pagamento</li>
                    </ul> 
                </div>
            </div>
        </section>
    )
}