import React from 'react'
import Titulo from './Titulo';
import Produto from './Produto';


const Produtos = () => {
const produtos = [
    {nome:'not', propriedades:['16gb ram', '512gb']},
    {nome:'cell', propriedades:['2gb ram', '64gb']},
]


  return (
    <section>
  <Titulo texto="Produtos"/>
  {produtos.map((produto) => (
      <Produto key={produto.nome}{...produto}/>
  ))}    
    </section>
  )
}

export default Produtos
