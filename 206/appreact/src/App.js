import React from 'react';
import Header from './Header'
import Home from './paginas/Home'
import Produtos from './paginas/Produtos';

const App = () => {
const [ativo, setAtivo] = React.useState(false);

function handClick(){
    setAtivo(!ativo)
}

return <button onClick={handClick}>{ativo ?'ativo': 'inativo'}</button>


/*
    const { pathname } = window.location;
    
    let Pagina = Home;
if(pathname === '/Produtos'){
    Pagina = Produtos;
} else{
    Pagina = Home;
}
 return (
<section>

<Header />
<Pagina />

</section>
 
 );*/
};

export default App;
