
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './pages/Header/';
import { Catalog } from './pages/Catalog/';
import { About } from './pages/About/';
import { Delivery } from './pages/Delivery/';
import { Main } from './pages/Main/';
import { Footer } from './pages/Footer/';
import { Registration } from './pages/Registration/';
import { Cart } from './pages/Cart/';

function App() {
    
    return (
        <div>
            <Router>
                <Header />
                    <Routes>
                        <Route path="/" element={ <Main /> }/>
                        <Route path="/catalog" element={ <Catalog /> }/>
                        <Route path="/about" element={ <About /> }/>
                        <Route path="/delivery" element={ <Delivery /> }/>
                        <Route path="/registration" element={ <Registration /> }/>
                        <Route path="/cart" element={ <Cart /> }/>
                    </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;