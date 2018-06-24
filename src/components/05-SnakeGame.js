/*
  Create a snake game using React.
  - You should be able to control the snake using the arrow keys.
  - A piece of `food` should appear on random location withing the
  boundary once the snake eats the existing item.
  - You earn 100 points for each bite eaten.
  - The snake's body grows by 10% on every bite eaten.

  There is a gif in the root of this directory called `snake_game.gif` for reference
  on how the game works. Good luck!
*/

/* eslint-disable */

import React, { Component } from 'react';

import './Snake.css';
// snake [[0, 0],[1, 2]]
// board [['SNAKE', 'NOT_SNAKE', 'NOT_SNAKE'],
//       ['NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE'],
//       ['NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE']]
function getBoard(snake, food) {
  //snake: [0, 0]


  // create a blank board
  // put snake at the specified index
  const newRow = new Array(10).fill('NOT_SNAKE');
  const board = [];
  for (let i = 0; i < 10; i++) {
    board.push([...newRow]);
  }
  const foodY = food[0];
  const foodX = food[1];
  board[foodY][foodX] = 'FOOD';

  snake.forEach(coords => {
    const x = coords[0];
    const y = coords[1];
    board[y][x] = 'SNAKE';
  });

  return board;
}


class Snake extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snake: [[0,0]],
      directionX: 1,
      directionY: 0,
      food: [1, 4],
      board: [
        ['SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE'],
        ['NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'FOOD', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE'],
        ['NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE'],
        ['NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE'],
        ['NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE'],
        ['NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE'],
        ['NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE'],
        ['NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE'],
        ['NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE'],
        ['NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE', 'NOT_SNAKE'],
      ],
    };
    setInterval(this.updateSnake, 500);
  }

  calcNewHead = (snakeHead) => {
    // get the directionX, directionY
    // [0,0] x=1 y=0 => [1,0]
    // [0,0] x=0 y=1 => [0,1]
    const snakeHeadXPosition = snakeHead[0];
    const snakeHeadYPosition = snakeHead[1];
    return [(snakeHeadXPosition + this.state.directionX) % this.state.board.length, (snakeHeadYPosition + this.state.directionY) % this.state.board.length];
  }

  getBoardStateForCoords = (coords) => {
    //get the coords value in array

    return this.state.board[coords[1]][coords[0]];
  }

  moveSnake = (snakeHead) => {

    this.setState(prevState => ({
      snake: [...prevState.snake.slice(1), snakeHead],
    }));

    this.setState(prevState => ({
      board: getBoard(prevState.snake, prevState.food),
    }));
  }

  moveSnakeByEatingFood = (snake, snakeHead) => {
    // TODO: eat food


    // this.setState(prevState => ({
    //   snake: [...prevState.snake.slice(1), snakeHead],
    // });
    //   this.setState(prevState =)
    //   board: getBoard(snake, prevState.food),
    // });
    //regenerate food
  }

  updateSnake = () => {
    //get the snake head
    const snakeHead = this.state.snake[0];


    //get the directionX, directionY

    //calculate the new snake head
    const newSnakeHead = this.calcNewHead(snakeHead);



    //get the state of new coordinates
    const newBoardStateOfSnake = this.getBoardStateForCoords(newSnakeHead);


    //compare it with the board
      //if its snake -> throw Error
      switch(newBoardStateOfSnake) {
        case 'SNAKE':
          throw new Error('Game ended!');
          break;
        case 'NOT_SNAKE':
          this.moveSnake(newSnakeHead);

          break;
        case 'FOOD':
          this.moveSnakeByEatingFood(newSnakeHead);
          break;
        default:
          this.moveSnake(this.state.snake);
      }
      //if its food -> update(increase) the snake's head / get new food
      //if its not_snake -> update(increase) the snake's head / update(decrement) the snake's tail
    //update the board
  }

  handleKeyPress = (e) => {
    if (e.keyCode === 38) {
      // Up key
    } else if (e.keyCode === 40) {
      // Down key
    } else if (e.keyCode === 37) {
      // Left key
    } else if (e.keyCode === 39) {
      // Right key
    }
  }

  render() {


    return (
      <div className="snake-game" style={{ display: 'grid', gridTemplateRows: 'repeat(10, 1fr)'}}>
        {
          this.state.board.map(row => {
            return (
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)'}}>
                {
                  row.map(cell => {
                    return <div style={{padding: '20px',  border: '3px solid red'}} className={cell}></div>;
                  })
                }
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Snake;
