import React from 'react'
import '../css/resumes.css';

export default function Resumes() {
    return (
        <section className="resume-page">
            <h1 className="resume-title">Résumés</h1>

            <div className="pdf-container">
                <div className="pdf-card">
                    <h2>Software Engineering</h2>
                    <iframe 
                        src="/pdfs/swe-resume.pdf#toolbar=0&navpanes=0" 
                        title="Software Engineering Resume"
                        className="pdf-frame"
                    />
                    <a 
                        href="/pdfs/swe-resume.pdf#toolbar=0&navpanes=0" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="view-btn"
                    >
                        View Full PDF
                    </a>
                </div>

                <div className="pdf-card">
                    <h2>AI/Data Engineering</h2>
                    <iframe 
                        src="/pdfs/ai-data-resume.pdf#toolbar=0&navpanes=0" 
                        title="AI/Data Engineering Resume"
                        className="pdf-frame"
                    />
                    <a 
                        href="/pdfs/ai-data-resume.pdf#toolbar=0&navpanes=0" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="view-btn"
                    >
                        View Full PDF
                    </a>
                </div>
            </div>
        </section>
    )
}
