import React, { Component } from "react";

class FoodForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      calories: "",
      image: ""
    };
  }

  sync(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.addNewFood(this.state);

    this.setState({
      name: "",
      calories: "",
      image: ""
    });
  }

  render() {
    return (
      <section className="FoodForm">
        <h2>Add a new Food to the DB</h2>

        <form onSubmit={event => this.handleSubmit(event)}>
          <label>
            Name:
            <input
              value={this.state.name}
              onChange={event => this.sync(event)}
              type="text"
              name="name"
              placeholder="Chick Peas"
            />
          </label>
          <label>
            Calories:
            <input
              value={this.state.calories}
              onChange={event => this.sync(event)}
              type="number"
              name="calories"
              placeholder="430"
            />
          </label>
          <label>
            Image:
            <input
              value={this.state.image}
              onChange={event => this.sync(event)}
              type="text"
              name="image"
              placeholder="http://www.example.com"
            />
          </label>
          <button>Add it to the list!</button>
        </form>
      </section>
    );
  }
}

export default FoodForm;
