import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar-logo">Yamini Karthik</div>
            <nav className="navbar-links">
                <Link to="/" className="btn-other">Home</Link>
                <Link to="/#projects" className="btn-other">Projects</Link>
                <Link to="/#experience" className="btn-other">Experience & About</Link>
                <Link to="/contact" className="btn-other">Contact</Link>
            </nav>
            <a href="/resume.pdf" className="btn-primary">Résumé</a>
        </header>
    );
}