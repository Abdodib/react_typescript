import React from 'react';

// Define a TypeScript interface for the props  This describes the expected properties the component receives

interface GreetingProps {
  name: string; // 'name' must be a string
}

// Define the functional component with typed props
// Optionally, you can use React.FC<GreetingProps> (Functional Component type)
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
