import React, { Component } from "react";

class FoodBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: this.props.food
    };
  }

  editQuantity(event) {
    const { name, value } = event.target;
    let { food } = this.state;
    food[name] = value;
    this.setState({ food });
  }

  addToToday() {
    let { food } = this.props;
    if (food.quantity > 0) {
      this.props.addFoodToToday(food);
    }
  }

  render() {
    const { food } = this.state;
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={food.image} alt={food.name + " image"} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{food.name}</strong> <br />
                <small>{food.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  onChange={event => this.editQuantity(event)}
                  name="quantity"
                  value={food.quantity}
                  className="input"
                  type="number"
                  // defaultValue="1"
                  min="0"
                />
              </div>
              <div className="control">
                <button
                  onClick={() => this.addToToday()}
                  className="button is-info"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default FoodBox;
