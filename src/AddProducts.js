import React from "react";

const AddProducts = (props) => {

    return (
        <div  className="add-products-form-container">
          <h1>Add Products</h1>
          <form >
            <div>
              <label htmlFor="productName" style={{color:'black'}}>Product Name:</label>
              <input
                type="text"
                id="productName"
                name="productName"
                // value={productName}
                // onChange={this.handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="quantity">Quantity:</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                // value={quantity}
                // onChange={this.handleInputChange}
              />
            </div>
            <button type="submit">Add Product</button>
          </form>
          
        </div>
      );
}

const style = {
    addProductsFormContainer:{
        width:'100vw',
        height: '100vh',
        backgroundColor: "blue",
        position: 'fixed'
    }
}

export default AddProducts