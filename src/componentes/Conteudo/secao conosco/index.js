import React from 'react'
import './style.css'
import imgLocal from '../../../assets/local.png'
import imgTelefone from '../../../assets/telefone.png'
import imgEmail from '../../../assets/email.png'
import imgFacebook from '../../../assets/fb.png'
import imgInstagram from '../../../assets/ig.png'
import imgTwitter from '../../../assets/tt.png'

export default function Conosco () {
    return(
        <section className='sessao_contato'>
            <div className='container'>
                <div className='sessao_texto_conosco'>
                    <h3>FALE CONOSCO</h3>
                    <p>
                        Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento. 
                    </p>
                </div>
                <div className='elementos_contato'>
                    <div className='elementos_midia'>
                        <p className='titulo_conosco'>Contato</p>
                        <div className='item_midia'>
                            <img src={imgLocal}/>
                            <p>Nova Iguaçu, RJ</p>
                        </div>
                        <div className='item_midia'>
                            <img src={imgTelefone}/>
                            <p>(21) 9999-9999</p>
                        </div>
                        <div className='item_midia'>
                            <img src={imgEmail}/>
                            <p>contato@oticavida.com</p>
                        </div>
                    </div>
                    <div className='elementos_midia'>
                        <p className='titulo_conosco'>Nossas Redes Sociais</p>
                        <div className='item_midia'>
                            <img src={imgFacebook}/>
                            <p>/OticaVida</p>
                        </div>
                        <div className='item_midia'>
                            <img src={imgInstagram}/>
                            <p>@oticavidarj</p>
                        </div>
                        <div className='item_midia'>
                            <img src={imgTwitter}/>
                            <p>@oticavidarj</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}