import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import StatusBanner from './StatusBanner';
import WorkAreas from './WorkAreas';

export default function App() {
    return (
        <div className="app">
            <Navbar />
            <main className="main-content">
                <Home />
                <StatusBanner />
            </main>
        </div>
    )
}
