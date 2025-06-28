import React from 'react';
import CodeBlock from './CodeBlock';

const CheatSheet = ({ cheatsheet, onBack }) => {
  if (!cheatsheet) return null;

  const renderTips = (tips) => {
    if (!tips || tips.length === 0) return null;
    
    return tips.map((tip, index) => (
      <div key={index} className={tip.type}>
        <strong>{tip.type === 'tip' ? 'Tip:' : 'Warning:'}</strong> {tip.content}
      </div>
    ));
  };

  return (
    <div className="cheatsheet-content">
      <div className="cheatsheet-header">
        <button className="back-btn" onClick={onBack}>
          ← Back
        </button>
        <h2 className="cheatsheet-title">{cheatsheet.title}</h2>
      </div>
      
      <div className="cheatsheet-body">
        {cheatsheet.sections?.map((section, index) => (
          <div key={index} className="cheat-section">
            <h3 className="section-title">{section.title}</h3>
            <CodeBlock code={section.content} />
            {renderTips(section.tips)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheatSheet;