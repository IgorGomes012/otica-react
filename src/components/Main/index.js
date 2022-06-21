import React from 'react';

import SectionBanner from '../SectionBanner/'
import SectionProdutos from '../SectionProdutos/'
import SectionSobre from '../SectionSobre/'
import SectionContatos from '../SectionContatos/'

export default function Main(){
  return(
    <main>
       <SectionBanner />
       <SectionProdutos />
       <SectionSobre />
       <SectionContatos />
    </main>
  )
}