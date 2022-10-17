import logo from './logo.svg';
import './App.css';
import ControlledForm from './components/ControlledForm';
import React, { Component } from 'react';
class NameForm extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = event => {
    alert('A name was submitted: ' + this.input.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={(input) => this.input = input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
function App() {
  return (
    <div>
      <ControlledForm />
      <NameForm />
    </div>
  );
}

export default App;
