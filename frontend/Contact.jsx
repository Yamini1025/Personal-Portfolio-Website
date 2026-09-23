import React, { useState } from 'react';
import '../css/contact.css'

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <section id="contact" className="contact-section">
            <h2>Happy to connect!</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className = "form-group">
                    <label>Name</label>
                    <input type='text' placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                
                <div className = "form-group">
                    <label>Email</label>
                    <input type='email' placeholder="you@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className = "form-group">
                    <label>Message</label>
                    <textarea placeholder="What's your message?" value={message} onChange={(e) => setMessage(e.target.value)} />
                </div>

                <button type="submit" className="submit-btn">Send message</button>
            </form>
            <div className="hero-buttons">
                    <a href="mailto:yamini.karthik06@gmail.com" className="contact-button">Email</a>
                    <a href="https://github.com/Yamini1025" className="contact-button">GitHub</a>
                    <a href="https://www.linkedin.com/in/yamini-karthik/" className="contact-button">LinkedIn</a>
            </div>
        </section>        
    )

}