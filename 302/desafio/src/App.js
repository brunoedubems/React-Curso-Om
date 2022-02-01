import React from 'react';
import './App.css';
import produto from './produto';

const App = () => {
const [dados, setDados] = React.useState(null);

 function handleClick(event) { 
   console.log(event.target.innerText);
 }
  
  
  return (
<div>
  <button style={{margin: '.5rem'}} onClick={handleClick}>notebook</button>
  <button style={{margin: '.5rem'}} onClick={handleClick}>Smartphone</button>
  <button style={{margin: '.5rem'}} onClick={handleClick}>tablet</button>
  <produto/>
</div>
  );
}

export default App;
