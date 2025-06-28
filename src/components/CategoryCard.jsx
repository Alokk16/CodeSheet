import React, { useState } from 'react';

const CategoryCard = ({ category, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { id, title, icon, color, gradient } = category;
  const cheatsheet = category.cheatsheet || {};
  
  return (
    <div 
      className={`category-card ${color} ${isHovered ? 'hovered' : ''}`}
      onClick={() => onClick(id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Terminal Icon */}
      <div className="terminal-icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M2 3h20c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2zm0 4v10h20V7H2z"/>
          <path d="M6 8.5l4 3-4 3v-6z"/>
        </svg>
      </div>
      
      {/* Main Icon */}
      <div className={`category-icon bg-gradient-to-br ${gradient}`}>
        {typeof icon === 'string' ? (
          <span className="icon-emoji">{icon}</span>
        ) : (
          <div className="icon-svg">{icon}</div>
        )}
      </div>
      
      <h3 className="category-title">{title}</h3>
      <p className="category-description">
        {cheatsheet.description || `${title} programming reference`}
      </p>
      
      {/* Floating particles animation */}
      <div className="particles">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
      </div>
    </div>
  );
};

export default CategoryCard;