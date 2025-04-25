
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './pages/Header/index';
import { Catalog } from './pages/Catalog/index';
import { About } from './pages/About/index';
import { Delivery } from './pages/Delivery/index';
import { Main } from './pages/Main/index';
import { Footer } from './pages/Footer/index';
import { Registration } from './pages/Registration/index';

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