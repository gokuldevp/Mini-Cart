import React from "react";
import Body from "./Body";
import Navbar from "./Navbar";
import {db} from './FirebaseInit';
import { collection, getDocs, doc, updateDoc, deleteDoc, addDoc } from "firebase/firestore";

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

// This function is responsible for adding a product to a Firestore collection.
handleAddingProducts = async (product) => {
  // Parse the JSON string (product) into a JavaScript object (productObject).
  const productObject = JSON.parse(product);
  console.log(productObject); // Log the parsed product object for debugging purposes.
  
  // Add the productObject to the Firestore collection named "products".
  await addDoc(collection(db, "products"), productObject);
  console.log("Product added to the database"); // Log a success message.
}

// This function handles the form submission event.
onAddFormSubmit = async(event) => {
  event.preventDefault(); // Prevent the default form submission behavior.
  
  // Create a FormData object from the submitted form.
  const formData = new FormData(event.target);
  const responseBody = {}; // Initialize an empty object for storing form data.
  
  // Iterate over the form data and populate the responseBody object.
  formData.forEach((value, property) => {
    responseBody[property] = value;
  });
  
  this.offAddProduct(); // Assuming this function is defined, it's called to handle UI interactions.
  
  // Convert the responseBody object into a JSON string (product).
  const product = JSON.stringify(responseBody);
  console.log(product); // Log the JSON string for debugging purposes.
  
  // Call the handleAddingProducts function to add the product to Firestore.
  await this.handleAddingProducts(product);
  
  // Fetch the updated list of products from Firestore and update the component's state.
  const products = await this.getProductData();
  this.setState({
    products
  });
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
        onAddFormSubmit = {this.onAddFormSubmit}
        />
      </div>
    );
  }
}

export default App;
