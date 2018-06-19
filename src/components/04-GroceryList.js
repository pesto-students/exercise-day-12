import React from 'react';
import PropTypes from 'prop-types';

/*
  In this exercises, you'll will make a reactive grocery list.

  Task 1: Fill the `return` of `GroceryList` render method. It should return
        a list of `GroceryListItem`. You need to display the groceries names
        using `this.props` in `GroceryListItem`. We already prepared the variable
        `groceriesComponents` inside `render` method containing a list of these items for you.


  Task 2: Create an input box and a button. User should be able to add more grocery items and click
          the `Add` button to add it to the list displaying the item.

  Task 3: Create a button to clear the whole list.

  Task 4: Clicking on a grocery item should change its color to red. Clicking again should change
          it back to black. Red means the item has been purchased.

*/

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [{ name: 'Apples' }, { name: 'KitKat' }, { name: 'Red Bull' }],
      grocery: '',
    };

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.clearListHandler = this.clearListHandler.bind(this);
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.setState(prevState => ({
      groceries: [...prevState.groceries, { name: this.state.grocery }],
    }));

    this.setState({ grocery: '' });
  }

  onChangeHandler(event) {
    this.setState({ grocery: event.target.value });
  }

  clearListHandler() {
    this.setState({ groceries: [] });
  }

  render() {
    const { groceries } = this.state;
    /*
      Properties are a way to pass parameters to your React components.
      We mentioned this in the third exercise. Properties are to React
      components what attributes are to HTML elements.

      Below you can see how to pass properties to child components.
      We have defined a `grocery` property for each `GroceryListItem`.
    */
    const groceriesComponents = groceries.map(item => ( // eslint-disable-line no-unused-vars
      <GroceryListItem grocery={item} />
    ));
    // Hint: Don't forget about putting items into `ul`
    return (
      <div>
        <ul>
          {groceriesComponents}
        </ul>
        <form onSubmit={this.onSubmitHandler}>
          <input type="text" name="grocery" placeholder="Add a Grocery Item" value={this.state.grocery} onChange={this.onChangeHandler} />
          <input type="submit" value="Add" />
          <button onClick={this.clearListHandler}>Clear</button>
        </form>
      </div>
    );
  }
}

// Render grocery name from component's properties.
// If you have a problem, check `this.props` in the console.
/* eslint-disable react/no-multi-comp, no-useless-constructor */
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      purchased: [],
    };
    this.groceryClickHandler = this.groceryClickHandler.bind(this);
  }

  groceryClickHandler(event) {
    const groceryName = event.target.textContent;
    const exists = this.state.purchased.indexOf(groceryName);
    if (exists !== -1) {
      event.target.style.color = 'black'; // eslint-disable-line
      this.setState(prevState => ({
        purchased: prevState.purchased.filter(item => item !== groceryName),
      }));
    } else {
      event.target.style.color = 'red'; // eslint-disable-line
      this.setState(prevState => ({
        purchased: [...prevState.purchased, groceryName],
      }));
    }
  }

  render() {
    return (
      <li onClick={this.groceryClickHandler /* eslint-disable-line */}>
        {this.props.grocery.name}
      </li>
    );
  }
}

// Do prop validation here using the package `prop-types`
GroceryListItem.propTypes = {
  grocery: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default GroceryList;
