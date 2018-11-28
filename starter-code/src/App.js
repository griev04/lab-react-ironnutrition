import React, { Component } from "react";
import foods from "./foods.json";

import "bulma/css/bulma.css";
import "./App.css";
import FoodBox from "./components/FoodBox";
import FoodForm from "./components/FoodForm";
import Search from "./components/Search";
import TodayList from "./components/TodayList";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foodArray: foods,
      completeArray: foods,
      todaysFood: [],
      showNewFoodDialog: false
    };
  }
  toggleAddForm() {
    const { showNewFoodDialog } = this.state;

    this.setState({ showNewFoodDialog: !showNewFoodDialog });
  }

  addNewFood(food) {
    let { completeArray } = this.state;
    completeArray.unshift(food);
    this.setState({ foodArray: completeArray, completeArray });
  }

  handleSearch(query) {
    const { completeArray } = this.state;
    this.setState({
      foodArray: completeArray.filter(oneFood =>
        oneFood.name.toLowerCase().includes(query.toLowerCase())
      )
    });
  }

  addFoodToToday(newFood) {
    let {todaysFood} = this.state;
    todaysFood.push(newFood);
    this.setState({
      todaysFood: todaysFood
    })
  }

  render() {
    const { showNewFoodDialog, foodArray, todaysFood } = this.state;

    return (
      <div className="App">
        <div className="main">
          <Search handleSearch={query => this.handleSearch(query)} />

          {foodArray.map((food, idx) => (
            <FoodBox
              food={food}
              key={idx}
              addFoodToToday={newFood => this.addFoodToToday(food)}
            />
          ))}
        </div>

        <aside>
          <button onClick={() => this.toggleAddForm()}>Add new food</button>
          {showNewFoodDialog && (
            <FoodForm addNewFood={newFood => this.addNewFood(newFood)} />
          )}
          <TodayList todaysFood={todaysFood} />
        </aside>
      </div>
    );
  }
}

export default App;
