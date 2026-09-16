import React from 'react';

export default function WorkAread() {
    return (
        <section id="work-areas" class="work-section">
            <h2>What I work on</h2>
            <p class="subtitle">Tap one to view more projects!</p>
            
            <div class="card-grid">
                <div class="work-card">
                    <span class="badge">AI Agents & LLM Systems</span>
                    <h3><a href="#projects">Autonomous Workflows & Tools</a></h3>
                </div>
                <div class="work-card">
                    <span class="badge">ML & Vision</span>
                    <h3><a href="#projects">Computer Vision Pipelines</a></h3>
                </div>
                <div class="work-card">
                    <span class="badge">Full-Stack</span>
                    <h3><a href="#projects">Web Apps & Interactive Tools</a></h3>
                </div>
            </div>
        </section>
    );
}