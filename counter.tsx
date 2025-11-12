import React, { Component } from 'react';

//  Define the shape of props (none in this case)
interface CounterProps {}

// Define the shape of the component state
interface CounterState {
  count: number; // 'count' is a number
}

// Extend React.Component with typed props and state
class Counter extends Component<CounterProps, CounterState> {
  // Initialize state with correct type
  state: CounterState = {
    count: 0,
  };

  // Define the increment method with arrow function syntax
  // Arrow functions automatically bind 'this'
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  // Render method with JSX
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
