import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

/**
 * Axios is a promise based HTTP client for the browser and node.js.
 * Refer to their github page to see how to use it to make HTTP requests.
 * Axios: https://github.com/axios/axios
 *
 * It is best not to fetch data from a server in the `render` method.
 * Any change to the state of a component can cause a re-render of the
 * component. This will likely happen more often than we want.
 * Use the appropriate lifecycle method to make the axios request.
 *
 * Exercise:
 *
 *  Create a `GithubRepos` component that lists all the GitHub repos for a user.
 *  Allow the repos to be provided as a prop.
 *
 *  https://api.github.com/users/{username}/repos
 */
/* eslint-disable react/no-unused-state */
const GithubRepos = ({ repos }) => {
  const list = repos.map((repo) => {
    return <li key={repo.id}>{ repo.name }</li>;
  });

  return (
    <ul>
      { list }
    </ul>
  );
};

// Task: Open the console in the browser. There will be a warning
// about incorrect prop type for user.
// Define the correct prop type for the prop `repos`
GithubRepos.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

/* eslint-disable react/no-multi-comp */
class UsernameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      repos: [],
    };

    this.onClickHandler = this.onClickHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onClickHandler() {
    axios.get(`https://api.github.com/users/${this.state.username}/repos`)
      .then((res) => {
        this.setState({ repos: res.data });
      });
  }

  onChangeHandler(e) {
    this.setState({
      username: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          name="username"
          onChange={this.onChangeHandler}
          value={this.state.username}
        />
        <button
          onClick={this.onClickHandler}
        >
          Get Repos
        </button>
        {/* Task: Display the results here. Use GithubRepos Component.
          It should be a list of repos of the user entered */}
        <GithubRepos repos={this.state.repos} />
      </div>
    );
  }
}

export default UsernameForm;
