import React from 'react'

const produto = ({ dados }) => {
  return (
    <div>
      <h1>Nome: {dados.nome}</h1>
      <p>R$: {dados.preco}</p>
      <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo}></img>
    </div>
  )
}

export default produto
