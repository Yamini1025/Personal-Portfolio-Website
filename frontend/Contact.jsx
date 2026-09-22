import React, { useState } from 'react';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    return (
        <section>
            <h2>Happy to connect!</h2>
            <form>
                <label>Name</label>
                <input type='text' placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />

                <label>Email</label>
                <input type='email' placeholder="you@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label>Message</label>
                <textarea placeholder="What's your message?" value={message} onChange={(e) => setMessage(e.target.value)} />

                <button type="submit">Send message</button>
            </form>
            <div className="hero-buttons">
                    <a href="mailto:yamini.karthik06@gmail.com" className="contact-button">Email</a>
                    <a href="https://github.com/Yamini1025" className="contact-button">GitHub</a>
                    <a href="https://www.linkedin.com/in/yamini-karthik/" className="contact-button">LinkedIn</a>
            </div>
        </section>
        
    )

}