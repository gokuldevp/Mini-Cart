import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor () {
      super();
      this.state = {
          products: [
              {
                  price: 19999,
                  title: 'Mobile Phone',
                  qty: 0,
                  img: "",
                  id: 1
              },
              {
                  price: 49999,
                  title: 'Computer',
                  qty: 0,
                  img: "",
                  id: 2
              },
              {
                  price: 2000,
                  title: 'Memmory card',
                  qty: 0,
                  img: "",
                  id: 3
              },
          ]
      }
  }

  handleIncreaseQuantity = (product) => {
      const products = this.state.products;
      const index = products.indexOf(product)
      products[index].qty ++;
      console.log(`Quantity of id: ${product.id} has been increased by 1`);
      this.setState({
          products
      })
  }

  handleDecreaseQuantity = (product) => {
      const products = this.state.products;
      const index = products.indexOf(product)
      if (products[index].qty > 0) {
          products[index].qty --;
          console.log(`Quantity of id: ${product.id} has been Decreased by 1`);
          this.setState({
              products
          })
      } else {
          console.log(`Quantity of id: ${product.id} can't be decreased further`);
      }
  }

  handleDeleteProducts = (id) => {
      let products = this.state.products;
      products = products.filter((product) => product.id !== id)

      this.setState({
          products
      })
  }

  getCartCount = () => {
    const products = this.state.products;
    let count = 0;
    products.forEach((product) => {
        count += product.qty;
      })
    return count;
  }

  render() {
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar
          count = {this.getCartCount()}
        />
        <Cart
          products = {products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDeleteProduct = {this.handleDeleteProducts}
        />
      </div>
    );
  }
}

export default App;
