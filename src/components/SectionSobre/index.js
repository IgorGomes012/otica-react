import React from 'react';
import "./style.css"

export default function SectionSobre() {
  return (
    <section id="section-sobre">
      <div className='limitar-secao-sobre'>
        <h1>QUEM SOMOS NÓS?</h1>
        <p>Fundada em 2001 em São lourenço - Minas Gerais, a Ótica Gomes iniciou suas atividades focada no atendimento ao publico de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
        <div id='secao-sobre'>

          <div className="cards-sobre" id='img1-sobre-div'>
             <img src='../assets/atendimento.png' id='img1-sobre'></img>
          </div>

          <div className="cards-sobre" id='card-texto-sobre1'>
            <h1>NOSSA FILIAIS</h1>
            <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
          </div>

          <div className="cards-sobre" id='card-texto-sobre2'>
            <h1>ATENDIMENTO FLEXIVEL</h1>
            <p>Nossa equipe é treinada para te atender</p>
          </div>

          <div className="cards-sobre" id='img2-sobre-div'>
            <img src='../assets/loja.png' id='img2-sobre'></img>
          </div>

        </div>
      </div>
    </section>
  )
}