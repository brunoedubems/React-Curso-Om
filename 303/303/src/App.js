import React from 'react';
import { Produto } from './Produto';


const App = () => {
  const [produto, setProduto] = React.useState(null);

React.useEffect(() => {
const produtolocal = window.localStorage.getItem('produto');
if(produtolocal !== null ) setProduto(produtolocal)
}, []);


React.useEffect(() =>{
  if(produto !== null) window.localStorage.setItem('produto', produto);
},[produto])

  
function handleClick(event) {
  setProduto(event.target.innerText);
}



return(
<div>
<h1>Preferência: {produto}</h1>

<button style={{marginRight: '1rem'}} onClick={handleClick}>Notebook</button>
<button style={{marginRight: '1rem'}} onClick={handleClick}>Smartphone</button>

<Produto produto={produto}/>

</div>
);

};

export default App;
