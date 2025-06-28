// src/data/cheatsheets.jsx
import React from 'react';
import { 
  ReactIcon, 
  JavaScriptIcon, 
  PythonIcon, 
  CSSIcon, 
  HTMLIcon, 
  TypeScriptIcon 
} from '../components/Icons';

export const cheatsheets = {
  react: {
    title: 'React Cheat Sheet',
    icon: '⚛️',
    color: 'react',
    description: 'Modern JavaScript library for building user interfaces',
    sections: [
      {
        title: 'JSX Basics',
        content: `// JSX Element
const element = <h1>Hello, World!</h1>;

// JSX with variables
const name = 'John';
const greeting = <h1>Hello, {name}!</h1>;

// JSX with expressions
const element = <h1>{2 + 2}</h1>;

// JSX with attributes
const element = <img src="image.jpg" alt="Description" />;

// JSX with conditional rendering
const element = <div>{isLoggedIn ? <UserGreeting /> : <GuestGreeting />}</div>;`,
        tips: [
          { type: 'tip', content: 'Use className instead of class in JSX' },
          { type: 'tip', content: 'Always close self-closing tags with />' }
        ]
      },
      {
        title: 'Components',
        content: `// Functional Component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Arrow Function Component
const Welcome = (props) => {
  return <h1>Hello, {props.name}</h1>;
};

// Component with destructured props
const Welcome = ({ name, age }) => {
  return (
    <div>
      <h1>Hello, {name}</h1>
      <p>Age: {age}</p>
    </div>
  );
};

// Using Components
<Welcome name="John" age={30} />`,
        tips: [
          { type: 'tip', content: 'Component names must start with a capital letter' }
        ]
      },
      {
        title: 'Hooks',
        content: `import { useState, useEffect, useContext } from 'react';

// useState Hook
const [count, setCount] = useState(0);
const [user, setUser] = useState({ name: '', email: '' });

// useEffect Hook
useEffect(() => {
  document.title = \`Count: \${count}\`;
}, [count]);

// useEffect with cleanup
useEffect(() => {
  const timer = setInterval(() => {
    setCount(prev => prev + 1);
  }, 1000);
  
  return () => clearInterval(timer);
}, []);

// Custom Hook
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);
  return { count, increment, decrement, reset };
}`,
        tips: [
          { type: 'warning', content: 'Always use hooks at the top level of your function components' },
          { type: 'tip', content: 'Use dependency array in useEffect to control when it runs' }
        ]
      }
    ]
  },
  
  javascript: {
    title: 'JavaScript',
    icon: '🟨',
    color: 'javascript',
    description: 'Dynamic programming language for web development',
    sections: [
      {
        title: 'Variables & Data Types',
        content: `// Variables
let name = "JavaScript";
const PI = 3.14159;
var age = 25; // avoid using var

// Data Types
let str = "Hello World";
let num = 42;
let bool = true;
let arr = [1, 2, 3];
let obj = { name: "John", age: 30 };
let nothing = null;
let undefined_var;

// Template literals
const greeting = \`Hello, \${name}!\`;
const multiline = \`
  This is a
  multiline string
\`;`,
        tips: [
          { type: 'tip', content: 'Use const by default, let when you need to reassign' },
          { type: 'warning', content: 'Avoid var - use let or const instead' }
        ]
      }
    ]
  },

  python: {
    title: 'Python',
    icon: '🐍',
    color: 'python',
    description: 'Versatile programming language for web, data science, and more',
    sections: [
      {
        title: 'Basic Syntax',
        content: `# Variables
name = "Python"
age = 30
is_awesome = True

# Print
print(f"Hello, {name}!")
print("Age:", age)

# Lists
fruits = ["apple", "banana", "orange"]
fruits.append("grape")
fruits.extend(["kiwi", "mango"])`,
        tips: [
          { type: 'tip', content: 'Use f-strings for string formatting: f"Hello {name}"' }
        ]
      }
    ]
  },

  css: {
    title: 'CSS',
    icon: '🎨',
    color: 'css',
    description: 'Styling language for web pages and applications',
    sections: [
      {
        title: 'Selectors',
        content: `/* Element selector */
p { color: blue; }

/* Class selector */
.highlight { background: yellow; }

/* ID selector */
#header { font-size: 24px; }

/* Descendant selector */
.container p { margin: 10px; }`,
        tips: [
          { type: 'tip', content: 'Use specific selectors to avoid style conflicts' }
        ]
      }
    ]
  },

  html: {
    title: 'HTML',
    icon: '🌐',
    color: 'html',
    description: 'Markup language for creating web content',
    sections: [
      {
        title: 'Basic Structure',
        content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
</head>
<body>
    <header></header>
    <main></main>
    <footer></footer>
</body>
</html>`,
        tips: [
          { type: 'tip', content: 'Always include viewport meta tag for responsive design' }
        ]
      }
    ]
  },

  typescript: {
    title: 'TypeScript',
    icon: '📘',
    color: 'typescript',
    description: 'Typed superset of JavaScript for better development',
    sections: [
      {
        title: 'Basic Types',
        content: `// Basic types
let name: string = "TypeScript";
let age: number = 5;
let isActive: boolean = true;

// Arrays
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];

// Union types
let id: string | number = "123";`,
        tips: [
          { type: 'warning', content: 'Avoid using "any" type - it defeats the purpose of TypeScript' }
        ]
      }
    ]
  }
};

export const categories = [
  { 
    id: 'react', 
    title: 'React', 
    icon: <ReactIcon />,
    color: 'react',
    gradient: 'from-cyan-400 to-blue-500'
  },
  { 
    id: 'javascript', 
    title: 'JavaScript', 
    icon: <JavaScriptIcon />,
    color: 'javascript',
    gradient: 'from-yellow-400 to-orange-500'
  },
  { 
    id: 'python', 
    title: 'Python', 
    icon: <PythonIcon />,
    color: 'python',
    gradient: 'from-blue-400 to-green-500'
  },
  { 
    id: 'css', 
    title: 'CSS', 
    icon: <CSSIcon />,
    color: 'css',
    gradient: 'from-blue-500 to-purple-600'
  },
  { 
    id: 'html', 
    title: 'HTML', 
    icon: <HTMLIcon />,
    color: 'html',
    gradient: 'from-orange-400 to-red-500'
  },
  { 
    id: 'typescript', 
    title: 'TypeScript', 
    icon: <TypeScriptIcon />,
    color: 'typescript',
    gradient: 'from-blue-600 to-indigo-700'
  }
];