import React from 'react';
import "./style.css"

export default function SectionSobre() {
  return (
    <section id="section-sobre">
      <div >
        <h1>QUEM SOMOS NÓS?</h1>
        <p>Fundada em 2001 em São lourenço - Minas Gerais, a Ótica Gomes iniciou suas atividades focada no atendimento ao publico de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
        <div id='secao-sobre'>
          <img src='../assets/loja.png' alt='' />
          <div>
            <h1>NOSSA FILIAIS</h1>
            <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
          </div>

          <img src='../assets/atendimento.png' alt='' />

          <div>
            <h1>ATENDIMENTO FLEXIVEL</h1>
            <p>Nossa equipe é treinada para te atender</p>
          </div>

        </div>
      </div>
    </section>
  )
}