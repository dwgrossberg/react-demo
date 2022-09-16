import React, { Component } from "react";
import Overview from "./Components/Overview";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { tasks: ["Study React", "Buy dog food", "Eat jello"] };

    this.addTask = this.addTask.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addTask(e) {
    console.log(e.target.value);
    this.setState({ tasks: [...this.state.tasks, e.target.value] });
  }

  handleSubmit(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <div>
        <Overview data={this.state.tasks} />
        <form>
          <input type="submit" value="Add a new task:"></input>
          <input type="text" onChange={this.addTask}></input>
        </form>
      </div>
    );
  }
}

export default App;
