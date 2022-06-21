import React from 'react';

export default function Header(){
  return(
    <header>
      <div>
         <img src='../assets/logo.png' alt=''/>
         <nav>
           <a href="#section-produtos">PRODUTOS</a>
           <a href="#section-sobre">SOBRE</a>
           <a href="#section-contatos">CONTATO</a>
         </nav>
      </div>
    </header>
  )
}