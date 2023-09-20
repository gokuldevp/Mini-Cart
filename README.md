# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

=================================================================================================================================================================
# Mini Project: Starting the project

* Step 1: Create a react app
```
npx create-react-app cart
```
* Step 2: remove the unwanted file, only App.js, index.css and index.js remains
* Step 3: Add css style for the cart items.

### CartItem: first component

* Step 1: Create new file called CartItem.js (Camel case) for creating the cart components
- import React from "react"
- Create a class called CartItem extending from React.component
- Create the cart items using jsx
```
import React from "react";

class CartItem extends React.Component {
    render() {
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img alt=""/>
                </div>
                <div className="right-block">
                    <div>Phone</div>
                    <div>Rs: 100</div>
                    <div>Qty: 1</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                    </div>
                </div>
            </div>
        )
    }
}

export default CartItem;
```
* Step 2: Style the CartItem components
- Note: We style in react using objects, we need to write the styles in camel case
```
<img alt="" style={styles.image} /> {/* Applying the created syle*/}


const styles = {            //Creating object for style
    image: {
        height: 100,
        width: 110,
        borderRadius: 4,
        backgroundColor: 'pink'
    }
}
```
- Style can also be written directly inside the jsx file style={{}}
```
<div style={{fontSize:25}}>Phone</div>
```

### Adding state in CartItem
- Note: In JavaScript, the term "state" typically refers to the current condition or data associated with a component or object at a specific point in time. State is used to represent and manage information that can change over time as a result of user interactions, data fetching, or other factors. It's a fundamental concept in building dynamic web applications and is commonly used in libraries and frameworks like React.
* Step 1: Create the img tag (for creating the add, minus and delete button for cart)
* Step 2: Add the alt, className and the src
```
<img alt="increase" className="action-icons" src="https://w7.pngwing.com/pngs/68/239/png-transparent-number-computer-icons-plus-miscellaneous-game-plus.png"/>
<img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/659/659892.png"/>
<img alt="delete" className="action-icons" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_KW_16p1iuJg5nfDvYyJjygmrrEtBVi1-K_SX1csj&s"/>
```

* Step 3: Create a new state inside the constructor for CartItem.js
```
constructor() {
    super();
    this.state = {      // Creating a object state
        price: 989,
        title: 'Phone',
        qty: 2,
        img: ""
    }
}
```

* Step 4: Use the state inside the jsx
```
const {price, title, qty} = this.state; // Object destructuring

{/*Inside jsx*/}
<div style={{}}>{title}</div>
<div style={{}}>Rs. {price}</div>
<div style={{}}>Qty: {qty}</div>
```
### Events in React [Handling events docs](https://react.dev/learn/responding-to-events#adding-event-handlers)

* Step 1: Add onClick in the jsx in CartItem.js
```
<img 
    alt="increase"
    className="action-icons" 
    src="https://w7.pngwing.com/pngs/68/239/png-transparent-number-computer-icons-plus-miscellaneous-game-plus.png"
    onClick={this.increaseQuantity}
/>
```

* Step 2: Create a function to increase quantity inside the class Cartitem
    - notes: if we are using normal function syntax we need to bind the function with this onClick={this.increaseQuantity.bind(this)}
```
    increaseQuantity = () => {
        console.log(this.state.qty);
    }
```

* Step 3: hallow merge to update the 'qty' state
1. Note 1: Shallow merging in React refers to the process of merging two or more objects or states while only updating the top-level properties of those objects
2. Note 2: It allow to re-render the page one the update of the state is done
3. Note 3: setState is as asynchronous, we can user another callback function on the setstate for doing anyother operation for the state
```jsx
   /**
     * Increases the quantity by 1 and updates the component's state.
     * It logs the current quantity to the console before the update and after the update
     */
    increaseQuantity = () => {
        console.log(this.state.qty); // Log the current quantity to the console
        
        // set state form 1:
        this.setState(({
        qty: prevState.qty + 1
        }), () => {
        console.log(this.state.qty);
        });
        

        // set state form 2: - if prevState require, user this
        this.setState((prevState) => {
            return {
                qty: prevState.qty +1
            }
        }, () => {
            console.log(this.state.qty)
        });
    };

    /**
     * Decrease the quantity by 1 and updates the component's state if the quantity is more than 0.
     */
    decreaseQuantity = () => {
        this.setState((prevState) => {
            if (prevState.qty>0) {
                return {
                    qty: prevState.qty - 1
                }
            }
        });
    }
```

## Batching in React

Batching in React refers to the process by which multiple state updates or side effects are grouped together and executed in a single batch or render cycle, rather than immediately. React uses batching to optimize performance by reducing unnecessary re-renders and DOM updates. The batching applies only if we are not using the
callback function.

Here are some key points to understand about batching in React:

- **State Updates**: When you call `setState` to update the state of a component, React doesn't immediately re-render the component. Instead, it batches multiple state updates together and performs a single re-render. This behavior is important because it prevents unnecessary re-renders and ensures better performance.

- **Event Handlers**: Event handlers like click or input event handlers are also batched. This means that if multiple state updates occur within the same event handler function, React will batch them together and perform a single re-render.

- **Component Lifecycles**: Component lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` are also batched. This means that if you make multiple `setState` calls within these methods, React will batch the updates for more efficient rendering.

- **React Concurrent Mode**: React Concurrent Mode is an experimental feature that allows React to work on multiple tasks concurrently. In Concurrent Mode, React is even more aggressive about batching and prioritizing updates to ensure a smoother user experience.

Here's an example to illustrate batching in React:

```jsx
import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    // These state updates are batched together
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default Counter;
```

