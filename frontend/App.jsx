import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import StatusBanner from './StatusBanner';
import WorkAreas from './WorkAreas';
import Contact from './Contact';

export default function App() {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={
                            <>
                                <Home />
                                <StatusBanner />
                                <WorkAreas />
                            </>
                        } />

                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}