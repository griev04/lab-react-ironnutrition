import React, { Component } from "react";

class TodayList extends Component {
  render() {
    const { todaysFood } = this.props;
    const foodHTML = todaysFood.map((oneFood, idx) => {
      return (
        <li key={idx}>
          <p>{oneFood.quantity} {oneFood.name} = {oneFood.quantity*oneFood.calories}</p>
        </li>
      );
    });
    return (
      <div>
        <h3>Today's Foods</h3>
        <ul>
          {foodHTML}
        </ul>
      </div>
    );
  }
}

export default TodayList;
