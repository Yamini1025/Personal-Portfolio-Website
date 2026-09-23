import React, {useState, useEffect} from 'react';

const WORDS = ["AI agents.", "ML systems.", "full-stack apps."];

export default function Home() {
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = WORDS[wordIndex];
        if (!isDeleting && charIndex === currentWord.length) {
        const timeout = setTimeout(() => {
            setIsDeleting(true);
        }, 1050); 
        return () => clearTimeout(timeout);
        } 
        
        if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setWordIndex((prevIndex) => (prevIndex + 1) % WORDS.length);
            return;
        }

        const typeSpeed = isDeleting ? 40 : 80;
        const timer = setTimeout(() => {
            setCharIndex((prevIndex) => prevIndex + (isDeleting ? -1 : 1));
        }, typeSpeed);

        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, wordIndex]);

    return (
        <section id="home" className="hero-section">
            <div className="hero-content">
                <h1>Hi, I'm Yamini.</h1>
                <h2>
                    I build <span className="typewriter" id="typewriter-text">{WORDS[wordIndex].substring(0, charIndex)}</span><span className="cursor">|</span>
                </h2>
                <p>I make things I think are cool. Sometimes it's a project I've been thinking about, 
                sometimes it's a random idea that gets stuck in my head and I have to make it. I 
                like good design, interesting problems, and making things that actually feel fun to
                use. In my free time, I'm probably dancing, working out, getting weirdly obsessed with 
                movies and TV shows, or trying my hand at some new hobby.
                </p>
                <div className="hero-buttons">
                    <a href="resume.pdf" className="btn-primary">Résumés</a>
                    <a href="https://github.com/Yamini1025" className="btn-secondary">GitHub</a>
                    <a href="https://www.linkedin.com/in/yamini-karthik/" className="btn-secondary">LinkedIn</a>
                </div>
            </div>
            <div className="hero-image">
                <div className="hero-card">
                    <div className="avatar-box">
                       <span>YK</span>
                    </div>
                </div>
            </div>
        </section>
    );
}