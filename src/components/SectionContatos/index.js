import React from 'react';
import "./style.css";

export default function SectionContatos() {
  return (
    <section id='section-contatos'>
      <div className="limitar-section-contatos">
        <h2 className='title-contatos'>FALE CONOSCO</h2>
        <p className='title-contatos'>Não perca tempo, venha conhecer uma das nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento</p>
        <div className='element-container'>
          <div className='element-contatos'>
            <h2>Contato</h2>
            <div>
              <div className='img-text-contatos'> <p> <img src='../assets/local.png' alt='' /> São Lourenço, MG</p></div>
              <div className='img-text-contatos'>  <p> <img src='../assets/telefone.png' alt='' /> (35)991725264</p></div>
              <div className='img-text-contatos'> <p> <img src='../assets/email.png' alt='' /> igoroliveirasl0210@gmail.com</p></div>
            </div>
          </div>

          <div className='element-contatos'>
            <h2>Nossas Redes Sociais</h2>
            <div>
              <div className='img-text-contatos'> <p><img src='../assets/fb.png' alt='' /> IgorGomes</p></div>
              <div className='img-text-contatos'> <p> <img src='../assets/ig.png' alt='' /> IgorGomes02</p></div>
            <div className='img-text-contatos'> <p>  <img src='../assets/tt.png' alt='' /> IgorGomes02</p></div>
          </div>
        </div>

      </div>
    </div>
    </section >
  )
}