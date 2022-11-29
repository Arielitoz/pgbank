//Importar as dependências
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

//Importar as páginas
import Homepage from './pages/homepage';
import Login from './pages/login';
import Account from './pages/account';

//Routes Components

function Rotas() {
    return (
        <Router>
        
                <Routes>
                    <Route exact path="/" element={<Homepage/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/account" element={<Account/>}/>
                </Routes>
            
        </Router>
    );
};

export default Rotas;