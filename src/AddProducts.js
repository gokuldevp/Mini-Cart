import React from "react";

const AddProducts = (props) => {
  return (
    <div style={styles.addProductsFormContainer} className="add-products-form-container">
      <h1>ADD PRODUCT</h1>
      <form style={styles.form} method="POST" action="#">
        <div style={styles.formField}>
          <label htmlFor="title" style={styles.label}>Product Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            style={styles.input}
          />
        </div>
        <div style={styles.formField}>
          <label htmlFor="img" style={styles.label}>Product Image Url:</label>
          <input
            type="text"
            id="img"
            name="img"
            style={styles.input}
          />
        </div>
        <div style={styles.formField}>
          <label htmlFor="price" style={styles.label}>Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            style={styles.input}
          />
        </div>
        <div style={styles.formField}>
          <label htmlFor="qty" style={styles.label}>Product Quantity:</label>
          <input
            type="number"
            id="qty"
            name="qty"
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>Add Product</button>
        <button onClick={() => { props.offAddProduct() }} style={styles.cancelButton}>Cancel</button>
      </form>
    </div>
  );
}

const styles = {
  addProductsFormContainer: {
    width: '100%',
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: "#f0f0f0",
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formField: {
    marginBottom: '10px',
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    color: 'black',
    fontSize: '16px',
    marginBottom: '5px',
  },
  input: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
    marginLeft: '0', // Add this to align all inputs to the same starting line
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '10px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  cancelButton: {
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '10px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '10px',
  },
}

export default AddProducts;
