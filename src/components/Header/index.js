import React from 'react';
import './style.css';

export default function Header(){
  return(
    <header>
      <div className='limitar-secao'>
         <img src='../assets/logo.png' alt='' className='img-header'/>
         <nav>
           <a href="#section-produtos"className='links-header'>PRODUTOS</a>
           <a href="#section-sobre"className='links-header'>SOBRE</a>
           <a href="#section-contatos"className='links-header'>CONTATO</a>
         </nav>
      </div>
    </header>
  )
}