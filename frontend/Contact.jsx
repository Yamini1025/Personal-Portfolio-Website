import React, { useState } from 'react';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    return (
        <section>
            <h2>Happy to connect!</h2>
            <div>
                <p>Name</p>

            </div>
            <div class="hero-buttons">
                    <a href="mailto:yamini.karthik06@gmail.com" className="contact-button">Email</a>
                    <a href="https://github.com/Yamini1025" className="contact-button">GitHub</a>
                    <a href="https://www.linkedin.com/in/yamini-karthik/" className="contact-button">LinkedIn</a>
                </div>
        </section>
        
    )

}