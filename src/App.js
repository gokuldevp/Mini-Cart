import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import {db} from './FirebaseInit';
import { collection, getDocs } from "firebase/firestore";



class App extends React.Component {
  constructor () {
      super();
      this.state = {
          products: []
          // [
          //     {
          //         price: 19999,
          //         title: 'Mobile Phone',
          //         qty: 0,
          //         img: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2129&q=80",
          //         id: 1
          //     },
          //     {
          //         price: 49999,
          //         title: 'Computer',
          //         qty: 0,
          //         img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
          //         id: 2
          //     },
          //     {
          //         price: 2000,
          //         title: 'Memory card',
          //         qty: 0,
          //         img: "https://images.unsplash.com/photo-1632251350035-7f750a5973b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1802&q=80",
          //         id: 3
          //     },
          // ]
      }
  }

  async componentDidMount() {
    try {
        const products = await this.getProductData();
        this.setState({
            products
        });
    } catch (error) {
        console.error("Error fetching data from Firebase:", error);
    }
  }

  async getProductData () {
    const querySnapshot = await getDocs(collection(db, "products"));
    let products = []
    querySnapshot.forEach((doc) => {
      products.push(doc.data())
    });
    return products
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

  getTotalPrice = () => {
    const products = this.state.products;
    let total = 0;
    products.forEach((product) => {
        total += product.qty * product.price;
      })
    return total;
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
        <div style={{margin: 10}}>
          <h4>Total: {this.getTotalPrice()}</h4>
        </div>
      </div>
      
    );
  }
}

export default App;
