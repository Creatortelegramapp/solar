
import { Routes, Route } from "react-router-dom";

import Home from './components/Home';
import About from './components/pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import {Services} from "./components/pages/Services.jsx";
const App = () => {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />

            </Routes>
            <Footer />
        </div>
    );
};

export default App;