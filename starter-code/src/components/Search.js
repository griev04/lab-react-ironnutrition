import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ""
    };
  }

  sync(event) {
    const { name, value } = event.target;

    this.setState({ [name]: value });

    this.props.handleSearch(value);
  }

  render() {
    const { query } = this.state;

    return (
      <section className="Search">
        Search
        <input
          onChange={event => this.sync(event)}
          type="text"
          value={query}
          name="query"
        />
      </section>
    );
  }
}

export default Search;
