import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero" role="img" aria-label="Hero background image">
            {/* Left side decorative element */}
            <div className="hero-side hero-side-left">
            </div>
            
            <div className="hero-bg">
                <div className="hero-fullimg"></div>
            </div>

            {/* Right side decorative element */}
            <div className="hero-side hero-side-right">
            </div>

            <div className="hero-copy">
                <div className="hero-copy-inner">
                    <h1>Art speaks where words fall short</h1>
                    <p>Original ideas, colour and form — a canvas holds memory and meaning.</p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
