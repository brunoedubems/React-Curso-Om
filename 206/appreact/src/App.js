import React from 'react';

const App = () => {

function mostrarNome(sobrenome){
  return 'Bruno ' + sobrenome;
}

const carro ={
  marca: 'ford',
  rodas: '4',
};

const estiloP = {
  color: 'blue',
  fontSize: '1rem'
  
}


  return (
<>
<p>
  {true ? 'verdadeiro' : 'falso'} - {10}
  {mostrarNome('Eduardo')}
  <p style={estiloP}>GREMIOOOO</p>
</p>
  <label htmlFor="nome">Nome</label>
  <input type="text" id="nome"></input>
</>
);
};

export default App;