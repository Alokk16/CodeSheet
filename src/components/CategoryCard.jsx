import React from 'react';

const CategoryCard = ({ category, onClick }) => {
  const { id, title, icon, color } = category;
  const cheatsheet = category.cheatsheet || {};
  
  return (
    <div 
      className={`category-card ${color}`} 
      onClick={() => onClick(id)}
    >
      <span className="category-icon">{icon}</span>
      <h3 className="category-title">{title}</h3>
      <p className="category-description">
        {cheatsheet.description || `${title} programming reference`}
      </p>
    </div>
  );
};

export default CategoryCard;