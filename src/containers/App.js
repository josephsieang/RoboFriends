import React from "react";

import "./App.css";

import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  // not using arrow function since it is a react function
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  getSearchField = (event) => {
    this.setState({ searchField: event.target.value });
    console.log(event.target.value);
  };

  render() {
    const { robots, searchField } = this.state;
    const getFilteredRobots = robots.filter((robotObj) => {
      return robotObj.name.toLowerCase().includes(searchField.toLowerCase());
    });
    if (robots.length === 0) {
      return (
        <div className="LoadingDiv">
          <h1> Loading...</h1>
        </div>
      );
    } else {
      return (
        <div className="tc">
          <h1>RobotFriends</h1>
          <SearchBox getSearchField={this.getSearchField} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={getFilteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
