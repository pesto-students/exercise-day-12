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
    };
    this.addItem = this.addItem.bind(this);
    this.clearGroceriesList = this.clearGroceriesList.bind(this);
  }

  addItem(itemName) {
    this.setState(prevState => ({
      ...prevState,
      groceries: prevState.groceries.concat({ name: itemName }),
    }));
  }

  clearGroceriesList() {
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
        <FormComponent handleSubmit={this.addItem} />
        <button onClick={this.clearGroceriesList}>Clear</button>
        <ul>
          {groceriesComponents}
        </ul>
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

    this.state = { purchased: false };
    this.togglePurchase = this.togglePurchase.bind(this);
  }

  togglePurchase(e) {
    e.preventDefault();
    this.setState(prevState => ({ ...prevState, purchased: !prevState.purchased }));
  }

  render() {
    return (
      <li
        style={{
          color: this.state.purchased ? 'red' : 'black',
          cursor: 'pointer',
        }}
      >
        <a
          href=""
          onClick={this.togglePurchase}
          style={{ color: 'inherit' }}
        >
          {this.props.grocery.name}
        </a>
      </li>
    );
  }
}

class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this.updateInput = this.updateInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state.input);
    this.setState({ input: '' });
  }

  updateInput(e) {
    this.setState({ input: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="input"
          required
          value={this.state.input}
          onChange={this.updateInput}
        />
        <input type="submit" value="Add Item" />
      </form>
    );
  }
}

// Do prop validation here using the package `prop-types`
GroceryListItem.propTypes = {
  grocery: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

FormComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default GroceryList;
