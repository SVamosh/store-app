
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header/Header';
import Catalog from './pages/Catalog/Catalog';
import About from './pages/About/About';
import Delivery from './pages/Delivery/Delivery';
import Main from './pages/Main/Main';
import Footer from './pages/Footer/Footer';
import Registration from './pages/Registration/Registration';

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
                    </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;