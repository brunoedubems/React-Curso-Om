import React from 'react';
const produtos = [
  {
    id:1,
    nome:'smartphone',
    preco: 'R$ 2000',
    cores:['#29D8D5','#252A34', '#FC3766'],
  },
  {
    id:2,
    nome:'Notebook',
    preco: 'R$ 3000',
    cores:['#ffs045','#d4394b', '#f37c59'],
  },
  {
    id:3,
    nome:'tablet',
    preco: 'R$ 1500',
    cores:['#365069','#47c1c8', '#f95786'],
  },
];


const App = () => {
const dados = produtos.filter(
({preco}) => Number(preco.replace("R$ ", "")) > 1500)

 return (
   <section>
{dados.map(({id, nome, preco, cores}) => (
  <div key={id}>
  <h1>{nome}</h1>
  <p>Preco: {preco}</p>
  <ul>
    {cores.map((cor) => (
  <li style={{backgroundColor: cor, color:"white"}}key={cor}>{cor}</li>))}</ul>
  </div>
))}
   </section>
 );
};

export default App;