import React, { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: { text: "", id: uniqid() },
      tasks: [],
    };

    this.onDeleteTask = this.onDeleteTask.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      },
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: [...this.state.tasks, this.state.task],
      task: { text: "", id: uniqid() },
    });
  };

  onDeleteTask = (id) => {
    this.setState({
      tasks: this.state.tasks.filter((item) => {
        console.log(item.id, id);
        return item.id !== id;
      }),
    });
  };

  onEditTask = (text, id) => {
    this.setState(
      {
        tasks: [
          ...this.state.tasks.filter((item) => {
            return item.id !== id;
          }),
          { text: text, id: id },
        ],
        task: { text: "", id: uniqid() },
      },
      () => console.log(this.state)
    );
  };

  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter a new task:</label>
          <input
            onChange={this.handleChange}
            value={task.text}
            type="text"
            id="taskInput"
          />
          <button type="submit">Add task</button>
        </form>
        <Overview
          tasks={tasks}
          onDeleteTask={this.onDeleteTask}
          handleSetTask={this.handleSetTask}
          onEditTask={this.onEditTask}
        />
      </div>
    );
  }
}

export default App;
