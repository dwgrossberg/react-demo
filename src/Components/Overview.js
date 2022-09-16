import React, { Component } from "react";

export default class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.data);
    const list = this.props.data.map((task) => <li key={task}>{task}</li>);
    return (
      <div>
        My Tasks:
        <ul>{list}</ul>
      </div>
    );
  }
}
