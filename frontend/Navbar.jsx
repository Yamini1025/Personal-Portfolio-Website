import React from 'react';

export default function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar-logo">Yamini Karthik</div>
            <nav className="navbar-links">
                <a href="#home" class="btn-other">Home</a>
                <a href="#projects" class="btn-other">Projects</a>
                <a href="#experience" class="btn-other">Experience & About</a>
                <a href="#contact" class="btn-other">Contact</a>
            </nav>
            <a href="/resume.pdf" class="btn-primary">Résumés</a>
        </header>
    )
}