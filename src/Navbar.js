import React from "react";
// import AddProducts from "./AddProducts";

class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      isAddProducts: false
    }
  }

  openAddProductsForm() {
    this.setState({isAddProducts: !this.state.isAddProducts})
  }

  render() {
    return(
      <div style={styles.nav}>

          <div style={styles.cartIconContainer}>
            <button
            style={styles.addProducts} 
            onClick={() => this.openAddProductsForm()}
            >Add product</button>
          </div>
          <div style={styles.cartIconContainer}>
              <img style={styles.cartIcon} alt="Cart" src="https://cdn-icons-png.flaticon.com/128/2838/2838838.png"/>
              <span style={styles.cartCount}>{this.props.count}</span>
          </div>
          {/* <AddProducts/> */}
      </div>
  )
  }

}

const styles = {
    cartIcon: {
      height: 32,
      marginRight: 20
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 0,
      top: -9
    },
    addProducts: {
      backgroundColor: 'Indigo',
      borderRadius: '50%',
      color:'white'
    }
  };

export default Navbar;