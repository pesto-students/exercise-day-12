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
      groceryItem: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.addItem = this.addItem.bind(this);
    this.clearList = this.clearList.bind(this);
  }
  handleChange(e) {
    this.setState({ groceryItem: e.target.value });
  }
  addItem(e) {
    e.preventDefault();
    const newItem = { name: this.state.groceryItem };
    const currentItems = this.state.groceries;
    currentItems.push(newItem);
    this.setState({ groceries: currentItems });
  }
  clearList(e) {
    e.preventDefault();
    const clearedList = [];
    this.setState({ groceries: clearedList });
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
        <input type="text" name="itemName" onChange={this.handleChange} />
        <input type="button" name="addBtnName" value="Add" onClick={this.addItem} />
        <ul>
          {groceriesComponents}
        </ul>
        <input type="button" name="clearBtnName" value="Clear list" onClick={this.clearList} />
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
      purchased: false,
    };
    this.purchasedMark = this.purchasedMark.bind(this);
  }
  purchasedMark(e) {
    e.preventDefault();
    this.setState({ purchased: !this.state.purchased });
  }
  render() {
    // eslint-disable-next-line
    const { name } = this.props.grocery;
    const color = this.state.purchased ? 'mark' : '';
    return (
      <li key={name} className={color} onClickCapture={this.purchasedMark}>{name}</li>
    );
  }
}
GroceryListItem.PropTypes = {   // eslint-disable-line
  // grocery: PropTypes.object,
  grocery: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};
// Do prop validation here using the package `prop-types`

export default GroceryList;
