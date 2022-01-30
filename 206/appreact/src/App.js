import React from 'react';
import Header from './Header'
import Home from './paginas/Home'
import Produtos from './paginas/Produtos';

const App = () => {

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
 
 );
};

export default App;