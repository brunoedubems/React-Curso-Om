import React from 'react';


const App = () => {
  const [contar, setContar] = React.useState(5);



return <button onClick={() => setContar(contar +5)}>{contar}</button>
};

export default App;
