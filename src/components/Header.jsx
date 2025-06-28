import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <div className="logo-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>
        <h1>DevCheat</h1>
      </div>
      <p className="subtitle">Quick cheat sheets for popular programming languages and frameworks</p>
      <p className="tagline">For developers who need quick references</p>
    </header>
  );
};

export default Header;