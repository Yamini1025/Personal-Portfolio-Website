import React, {useState} from 'react';

export default function StatusBanner() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className="status-section">
            <div className="status-banner">
                <div className="status-left">
                    <span className="dot"></span>
                    <p className="status-text">
                        <strong>Currently:</strong> Rebuilding this portfolio, and navigating my junior year at college.
                    </p>
                </div>
                <button className="expand-btn" onClick={() => setIsExpanded(!isExpanded)}
                    aria-expanded={isExpanded}>
                        {isExpanded ? (<>Collapse <span className="arrow">⌃</span></>
                        ) : (<>Expand details <span className="arrow">⌄</span></>
                        )}
                </button>
            </div>

            {isExpanded && (
                <div className="status-cards-grid">
                    <div className="status-card">
                        <span className="card-icon">🛠️</span>
                        <h4>Currently building</h4>
                        <p>This portfolio rebuild!</p>
                    </div>

                    <div className="status-card">
                        <span className="card-icon">📌</span>
                        <h4>Recent activity</h4>
                        <p>
                        Latest commits live on{' '}
                        <a href="https://github.com" target="_blank" rel="noreferrer">
                            GitHub
                        </a>{' '}
                        [has to be wired with API]
                        </p>
                    </div>

                    <div className="status-card">
                        <span className="card-icon">📖</span>
                        <h4>Reading & beyond</h4>
                        <p>Keeping up with the daily TLDR newsletter, and continuing my Leetcode streak!</p>
                    </div>
                </div>
            )}
        </section>
    );
}