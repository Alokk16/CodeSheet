import React, { useState } from 'react';
import CodeBlock from './CodeBlock';

const CheatSheet = ({ cheatsheet, onBack }) => {
  const [activeSection, setActiveSection] = useState(0);

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
    <div className="cheatsheet-layout">
      {/* Sidebar Navigation */}
      <div className="cheatsheet-sidebar">
        <div className="sidebar-header">
          <button className="back-btn-sidebar" onClick={onBack}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
          <div className="sidebar-logo">
            <div className="logo-icon-small">📚</div>
            <span>Reference</span>
          </div>
        </div>

        <div className="sidebar-title">
          <h2>{cheatsheet.title.replace(' Cheat Sheet', '')}</h2>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-section">
            <div className="nav-item overview active">
              <span>How to {cheatsheet.title.replace(' Cheat Sheet', '').replace(' Programming', '')}</span>
            </div>
          </div>

          <div className="nav-section">
            {cheatsheet.sections?.map((section, index) => (
              <div 
                key={index}
                className={`nav-item ${activeSection === index ? 'active' : ''}`}
                onClick={() => setActiveSection(index)}
              >
                <span>{section.title}</span>
              </div>
            ))}
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="cheatsheet-main">
        <div className="content-header">
          <h1 className="content-title">
            {cheatsheet.title.replace(' Cheat Sheet', '')}
          </h1>
          <p className="content-subtitle">
            {cheatsheet.description}
          </p>
        </div>

        <div className="content-body">
          <div className="content-section">
            <h2 className="section-main-title">
              How to {cheatsheet.title.replace(' Cheat Sheet', '').replace(' Programming', '')}
            </h2>
            <p className="section-description">
              This is the fastest way to learn {cheatsheet.title.replace(' Cheat Sheet', '').replace(' Programming', '')}, more examples listed after.
            </p>

            {/* Active Section Content */}
            {cheatsheet.sections?.[activeSection] && (
              <div className="active-section">
                <div className="section-header">
                  <svg className="section-check" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <h3 className="section-title-main">
                    {cheatsheet.sections[activeSection].title}
                  </h3>
                </div>

                <div className="section-content">
                  <CodeBlock code={cheatsheet.sections[activeSection].content} />
                  {renderTips(cheatsheet.sections[activeSection].tips)}
                </div>
              </div>
            )}

            {/* Additional sections preview */}
            <div className="other-sections">
              {cheatsheet.sections?.map((section, index) => (
                index !== activeSection && (
                  <div key={index} className="section-preview" onClick={() => setActiveSection(index)}>
                    <div className="section-header">
                      <svg className="section-check" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <h3 className="section-title-preview">{section.title}</h3>
                    </div>
                    <p className="section-preview-text">
                      Click to view {section.title.toLowerCase()} examples and syntax...
                    </p>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>

        {/* Floating Info Panel */}
        <div className="info-panel">
          <h3>Why DevCheat?</h3>
          <p>This reference website is <strong>not</strong> for beginners</p>
          <p>DevCheat is <strong>strictly</strong> for developers who already know the fundamentals and need a beautiful cheat sheet on their second monitor which looks better than documentation.</p>
          <p className="info-small"><em>this portion goes away when you shrink the screen :)</em></p>
          
          <div className="popular-languages">
            <h4>Our popular languages:</h4>
            <div className="language-tags">
              <span className="language-tag">React</span>
              <span className="language-tag">JavaScript</span>
              <span className="language-tag">Python</span>
              <span className="language-tag">C++</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheatSheet;