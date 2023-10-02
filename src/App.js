import React from "react";
import Body from "./Body";
import Navbar from "./Navbar";
import {db} from './FirebaseInit';
import { collection, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";

class App extends React.Component {
  constructor () {
      super();
      this.state = {
          products: [],
          isAddProducts: false
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

  async getProductData() {
    const querySnapshot = await getDocs(collection(db, "products"));
    let products = [];
    querySnapshot.forEach((doc) => {
      const productData = doc.data();
      // Add the document ID to the product data
      productData.id = doc.id;
      products.push(productData);
    });
    return products;
  }

  handleQuantityChange = async (product, delta) => {
    let products = [...this.state.products]; // Create a copy of the products array
    const index = products.indexOf(product); // Find the index of the product
  
    if (index !== -1) {
      // Update the quantity
      products[index].qty += delta;
  
      // Update Firestore
      const productRef = doc(db, 'products', product.id);
      await updateDoc(productRef, {
        qty: products[index].qty,
      });
      
      products = await this.getProductData();
      console.log(`Quantity of id: ${product.title} has been changed by ${delta}`);
      this.setState({ products });
    } else {
      console.log(`Product with id ${product.id} not found in the state.`);
    }
  };

  // Handle increase in quantity
  handleIncreaseQuantity = (product) => {
    this.handleQuantityChange(product, 1);
  };

  // Handle decrease in quantity
  handleDecreaseQuantity = (product) => {
    this.handleQuantityChange(product, -1);
  };

  handleDeleteProducts = async (id) => {
      await deleteDoc(doc(db, "products", id));
      const products = await this.getProductData();
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

  onAddProduct = () => {
    this.setState({isAddProducts: true})
  }

  offAddProduct = () => {
    this.setState({isAddProducts: false})
  }

  render() {
    return (
      <div className="App">
        <Navbar
          count = {this.getCartCount()}
          onAddProduct = {this.onAddProduct}
        />
        <Body
        products={this.state.products}
        onIncreaseQuantity = {this.handleIncreaseQuantity}
        onDecreaseQuantity = {this.handleDecreaseQuantity}
        onDeleteProduct = {this.handleDeleteProducts}
        isAddProducts = {this.state.isAddProducts}
        totalPrice = {this.getTotalPrice}
        offAddProduct = {this.offAddProduct}
        />
      </div>
    );
  }
}

export default App;
