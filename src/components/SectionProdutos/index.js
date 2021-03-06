import React from 'react';
import "./style.css"

export default function SectionProdutos() {
  return (
    <section id="section-produtos">
      <div className='limitar-secao-produtos'>
        <h2>NOSSOS PRODUTOS</h2>
        <p>trabalhamos com óculos de grau, óculos de sol, lentes transitions nos modelos masculinos, femininos e infantil.</p>
        <p>todos os nossos preços são acessíveis  e contam com a melhor qualidade do mercado</p>
        <div className="limitar-secao-produtos-img">
          <div id='produto1' className='produtos-position'>
            <h2>ÓCULOS DE GRAU</h2>
            <img src='../assets/oculos01.png' alt=""/>
            <p>R$ 500,00</p>
          </div>

          <div id='produto2' className='produtos-position'>
            <h2>ÓCULOS DE GRAU</h2>
            <img src='../assets/oculos02.png' alt=""/>
            <p>R$ 500,00</p>
          </div>

          <div id='produto3' className='produtos-position'>
            <h2>ÓCULOS DE GRAU</h2>
            <img src='../assets/oculos03.png' alt=""/>
            <p>R$ 500,00</p>
          </div>

          <div id='produto4' className='produtos-position'>
            <h2>ÓCULOS DE GRAU</h2>
            <img src='../assets/oculos04.png' alt=""/>
            <p>R$ 500,00</p>
          </div>
        </div>
        <p id='paragrafo-p'> Todos os nossos produtos incluem:</p>
        <ul className='list-produtos'>
          <li>Garantia</li>
          <li>Manutenção</li>
          <li>Descontos especiais na compra da unidade</li>
          <li>Flexibilidade de pagamento</li>
        </ul>
      </div>
    </section>
  )
}