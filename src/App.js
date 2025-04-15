
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header/Header';
import Catalog from './pages/Catalog/Catalog';
import About from './pages/About/About';
import Main from './pages/Main/Main';
import Footer from './pages/Footer/Footer';

function App() {
    
    return (
        <div>
            <Router>
                <Header />
                    <Routes>
                        <Route path="/" element={ <Main /> }/>
                        <Route path="/catalog" element={ <Catalog /> }/>
                        <Route path="/about" element={ <About /> }/>
                    </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;