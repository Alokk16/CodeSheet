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
      },
      {
        title: 'Event Handling',
        content: `// Basic event handler
const handleClick = () => {
  console.log('Button clicked!');
};

// Event with parameters
const handleClick = (id) => {
  console.log('Clicked item:', id);
};

// Event object
const handleChange = (event) => {
  console.log('New value:', event.target.value);
};

// Prevent default
const handleSubmit = (event) => {
  event.preventDefault();
  // Handle form submission
};

// JSX usage
<button onClick={handleClick}>Click me</button>
<button onClick={() => handleClick('123')}>Click with param</button>
<input onChange={handleChange} />
<form onSubmit={handleSubmit}>...</form>`,
        tips: [
          { type: 'tip', content: 'Use arrow functions to avoid binding issues' }
        ]
      }
    ]
  },
  
  javascript: {
    title: 'JavaScript Cheat Sheet',
    icon: '📜',
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
      },
      {
        title: 'Functions',
        content: `// Function declaration
function greet(name) {
  return \`Hello, \${name}!\`;
}

// Function expression
const greet = function(name) {
  return \`Hello, \${name}!\`;
};

// Arrow function
const greet = (name) => \`Hello, \${name}!\`;
const add = (a, b) => a + b;

// Async function
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
  }
}

// IIFE (Immediately Invoked Function Expression)
(function() {
  console.log("This runs immediately!");
})();`,
        tips: [
          { type: 'tip', content: 'Arrow functions are great for short, simple functions' }
        ]
      },
      {
        title: 'Array Methods',
        content: `const numbers = [1, 2, 3, 4, 5];

// Map - transform each element
const doubled = numbers.map(n => n * 2);
// Result: [2, 4, 6, 8, 10]

// Filter - select elements
const evens = numbers.filter(n => n % 2 === 0);
// Result: [2, 4]

// Reduce - accumulate values
const sum = numbers.reduce((acc, n) => acc + n, 0);
// Result: 15

// Find - get first matching element
const found = numbers.find(n => n > 3);
// Result: 4

// Some & Every
const hasEven = numbers.some(n => n % 2 === 0);
const allPositive = numbers.every(n => n > 0);

// ForEach - iterate over elements
numbers.forEach(n => console.log(n));`,
        tips: [
          { type: 'tip', content: 'Use map() for transformations, filter() for selections' }
        ]
      }
    ]
  },

  python: {
    title: 'Python Cheat Sheet',
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
fruits.extend(["kiwi", "mango"])

# Dictionaries
person = {"name": "John", "age": 25, "city": "New York"}
print(person["name"])
print(person.get("email", "Not found"))

# Tuples (immutable)
coordinates = (10, 20)
x, y = coordinates  # unpacking`,
        tips: [
          { type: 'tip', content: 'Use f-strings for string formatting: f"Hello {name}"' }
        ]
      },
      {
        title: 'Functions',
        content: `# Basic function
def greet(name):
    return f"Hello, {name}!"

# Function with default parameter
def greet(name="World"):
    return f"Hello, {name}!"

# Function with multiple parameters
def add_numbers(a, b, c=0):
    return a + b + c

# Variable arguments
def sum_all(*args):
    return sum(args)

# Keyword arguments
def create_profile(**kwargs):
    return kwargs

# Lambda function
square = lambda x: x ** 2
numbers = [1, 2, 3, 4, 5]
squared = list(map(square, numbers))

# Multiple return values
def get_name_age():
    return "John", 25

name, age = get_name_age()`,
        tips: [
          { type: 'tip', content: 'Use *args for variable positional arguments, **kwargs for keyword arguments' }
        ]
      },
      {
        title: 'List Comprehensions',
        content: `# Basic list comprehension
squares = [x**2 for x in range(10)]
# Result: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# With condition
even_squares = [x**2 for x in range(10) if x % 2 == 0]
# Result: [0, 4, 16, 36, 64]

# Nested list comprehension
matrix = [[i*j for j in range(3)] for i in range(3)]
# Result: [[0, 0, 0], [0, 1, 2], [0, 2, 4]]

# Dictionary comprehension
square_dict = {x: x**2 for x in range(5)}
# Result: {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

# Set comprehension
unique_lengths = {len(word) for word in ["hello", "world", "python"]}
# Result: {5, 6}`,
        tips: [
          { type: 'tip', content: 'List comprehensions are faster than regular for loops for creating lists' }
        ]
      }
    ]
  },

  css: {
    title: 'CSS Cheat Sheet',
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
.container p { margin: 10px; }

/* Child selector */
.container > p { font-weight: bold; }

/* Adjacent sibling */
h1 + p { margin-top: 0; }

/* Attribute selector */
input[type="text"] { border: 1px solid #ccc; }

/* Pseudo-classes */
a:hover { color: red; }
input:focus { border: 2px solid blue; }
li:nth-child(odd) { background: #f0f0f0; }
p:first-child { margin-top: 0; }
p:last-child { margin-bottom: 0; }`,
        tips: [
          { type: 'tip', content: 'Use specific selectors to avoid style conflicts' }
        ]
      },
      {
        title: 'Flexbox',
        content: `/* Container */
.flex-container {
  display: flex;
  justify-content: center; /* horizontal alignment */
  align-items: center; /* vertical alignment */
  flex-direction: row; /* row | column | row-reverse | column-reverse */
  flex-wrap: wrap; /* wrap | nowrap | wrap-reverse */
  gap: 20px;
}

/* Common flex patterns */
.space-between { justify-content: space-between; }
.space-around { justify-content: space-around; }
.space-evenly { justify-content: space-evenly; }

/* Items */
.flex-item {
  flex: 1; /* grow, shrink, basis */
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 200px;
  align-self: flex-start; /* overrides align-items */
}`,
        tips: [
          { type: 'tip', content: 'Use gap property instead of margins for spacing in flexbox' }
        ]
      },
      {
        title: 'Grid',
        content: `/* Grid Container */
.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto 1fr auto;
  grid-gap: 20px; /* or just 'gap' */
  grid-template-areas: 
    "header header header"
    "sidebar main main"
    "footer footer footer";
}

/* Responsive grid */
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

/* Grid Items */
.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }

/* Grid positioning */
.item {
  grid-column: 1 / 3; /* spans from line 1 to 3 */
  grid-row: 2 / 4;
}`,
        tips: [
          { type: 'tip', content: 'Use CSS Grid for 2D layouts, Flexbox for 1D layouts' }
        ]
      }
    ]
  },

  html: {
    title: 'HTML Cheat Sheet',
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
    <meta name="description" content="Page description">
    <title>Page Title</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <nav>...</nav>
    </header>
    <main>
        <article>...</article>
        <aside>...</aside>
    </main>
    <footer>...</footer>
    <script src="script.js"></script>
</body>
</html>`,
        tips: [
          { type: 'tip', content: 'Always include viewport meta tag for responsive design' }
        ]
      },
      {
        title: 'Common Elements',
        content: `<!-- Headings -->
<h1>Main Heading</h1>
<h2>Sub Heading</h2>
<h3>Section Heading</h3>

<!-- Text -->
<p>This is a paragraph.</p>
<span>Inline text</span>
<strong>Bold text</strong>
<em>Italic text</em>
<mark>Highlighted text</mark>

<!-- Links -->
<a href="https://example.com">External Link</a>
<a href="#section">Internal Link</a>
<a href="mailto:email@example.com">Email Link</a>

<!-- Images -->
<img src="image.jpg" alt="Description" width="300" height="200">
<figure>
    <img src="image.jpg" alt="Description">
    <figcaption>Image caption</figcaption>
</figure>

<!-- Lists -->
<ul>
    <li>Unordered item 1</li>
    <li>Unordered item 2</li>
</ul>

<ol>
    <li>Ordered item 1</li>
    <li>Ordered item 2</li>
</ol>`,
        tips: [
          { type: 'tip', content: 'Always include alt text for images for accessibility' }
        ]
      },
      {
        title: 'Forms',
        content: `<form action="/submit" method="POST">
    <!-- Text Input -->
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    
    <!-- Email Input -->
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <!-- Password -->
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>
    
    <!-- Textarea -->
    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="4"></textarea>
    
    <!-- Select -->
    <label for="country">Country:</label>
    <select id="country" name="country">
        <option value="us">United States</option>
        <option value="ca">Canada</option>
    </select>
    
    <!-- Radio buttons -->
    <fieldset>
        <legend>Gender:</legend>
        <input type="radio" id="male" name="gender" value="male">
        <label for="male">Male</label>
        <input type="radio" id="female" name="gender" value="female">
        <label for="female">Female</label>
    </fieldset>
    
    <!-- Checkbox -->
    <input type="checkbox" id="subscribe" name="subscribe">
    <label for="subscribe">Subscribe to newsletter</label>
    
    <button type="submit">Submit</button>
</form>`,
        tips: [
          { type: 'tip', content: 'Always associate labels with form controls using for/id attributes' },
          { type: 'tip', content: 'Use appropriate input types for better mobile experience' }
        ]
      }
    ]
  },

  typescript: {
    title: 'TypeScript Cheat Sheet',
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

// Tuple
let person: [string, number] = ["John", 30];

// Enum
enum Color { Red, Green, Blue }
let selectedColor: Color = Color.Red;

// Any (avoid when possible)
let anything: any = "could be anything";

// Union types
let id: string | number = "123";
id = 456; // also valid

// Literal types
let direction: "up" | "down" | "left" | "right" = "up";`,
        tips: [
          { type: 'warning', content: 'Avoid using "any" type - it defeats the purpose of TypeScript' },
          { type: 'tip', content: 'Use union types for values that can be multiple types' }
        ]
      },
      {
        title: 'Interfaces & Types',
        content: `// Interface definition
interface User {
  name: string;
  age: number;
  email?: string; // optional property
  readonly id: number; // read-only property
}

// Using interface
const user: User = {
  id: 1,
  name: "John",
  age: 30
};

// Extending interfaces
interface Admin extends User {
  permissions: string[];
  role: "admin" | "superadmin";
}

// Type aliases
type ID = string | number;
type UserRole = "user" | "admin" | "guest";

// Function types
type GreetFunction = (name: string) => string;

// Intersection types
type UserWithRole = User & { role: UserRole };

// Generic interfaces
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}`,
        tips: [
          { type: 'tip', content: 'Use interfaces for object shapes, types for unions and primitives' }
        ]
      },
      {
        title: 'Functions & Generics',
        content: `// Function with types
function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

// Arrow function with types
const add = (a: number, b: number): number => a + b;

// Optional parameters
function buildName(firstName: string, lastName?: string): string {
  return lastName ? \`\${firstName} \${lastName}\` : firstName;
}

// Default parameters
function greet(name: string = "World"): string {
  return \`Hello, \${name}!\`;
}

// Rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

// Generic function
function identity<T>(arg: T): T {
  return arg;
}

// Generic with constraints
function getLength<T extends { length: number }>(arg: T): number {
  return arg.length;
}

// Multiple generics
function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}`,
        tips: [
          { type: 'tip', content: 'Use generics to make functions reusable with different types' }
        ]
      }
    ]
  }
};

export const categories = [
  { id: 'react', title: 'React', icon: '⚛️', color: 'react' },
  { id: 'javascript', title: 'JavaScript', icon: '📜', color: 'javascript' },
  { id: 'python', title: 'Python', icon: '🐍', color: 'python' },
  { id: 'css', title: 'CSS', icon: '🎨', color: 'css' },
  { id: 'html', title: 'HTML', icon: '🌐', color: 'html' },
  { id: 'typescript', title: 'TypeScript', icon: '📘', color: 'typescript' }
];