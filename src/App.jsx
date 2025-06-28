import React, { useState, useMemo } from 'react';
import './styles/App.css';
import Header from './components/Header';           // Remove .jsx
import SearchBox from './components/SearchBox';     // Remove .jsx
import CategoryCard from './components/CategoryCard'; // Remove .jsx
import CheatSheet from './components/CheatSheet';   // Remove .jsx
import { cheatsheets, categories } from './data/cheatsheets';

function App() {
  const [selectedCheatsheet, setSelectedCheatsheet] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter categories based on search term
  const filteredCategories = useMemo(() => {
    if (!searchTerm.trim()) return categories;
    
    return categories.filter(category => 
      category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cheatsheets[category.id]?.description?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleCategoryClick = (categoryId) => {
    const cheatsheet = cheatsheets[categoryId];
    if (cheatsheet) {
      setSelectedCheatsheet(cheatsheet);
    }
  };

  const handleBackClick = () => {
    setSelectedCheatsheet(null);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
    // Reset selected cheatsheet when searching
    if (selectedCheatsheet) {
      setSelectedCheatsheet(null);
    }
  };

  return (
    <div className="app">
      {/* Dark Radial Glow Background */}
      <div
        className="background-glow"
        style={{
          backgroundImage: `radial-gradient(circle 500px at 50% 200px, #3e3e3e, transparent)`,
        }}
      />
      
      <div className="container">
        <Header />
        
        {!selectedCheatsheet && (
          <>
            <SearchBox 
              searchTerm={searchTerm}
              onSearchChange={handleSearchChange}
            />
            
            <div className="categories">
              {filteredCategories.map((category) => (
                <CategoryCard
                  key={category.id}
                  category={{
                    ...category,
                    cheatsheet: cheatsheets[category.id]
                  }}
                  onClick={handleCategoryClick}
                />
              ))}
            </div>
            
            {filteredCategories.length === 0 && searchTerm && (
              <div style={{ textAlign: 'center', color: '#94a3b8', marginTop: '2rem' }}>
                <p>No cheat sheets found for "{searchTerm}"</p>
                <p>Try searching for: React, JavaScript, Python, CSS, HTML, or TypeScript</p>
              </div>
            )}
          </>
        )}
        
        {selectedCheatsheet && (
          <CheatSheet
            cheatsheet={selectedCheatsheet}
            onBack={handleBackClick}
          />
        )}
      </div>
    </div>
  );
}

export default App;