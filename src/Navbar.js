import React from "react";

function Navbar(props) {
    return(
      <div style={styles.nav}>

          <div style={styles.cartIconContainer}>
            <button
            style={styles.addProducts} 
            onClick={() => props.onAddProduct()}
            >Add product</button>
          </div>
          <div style={styles.cartIconContainer}>
              <img style={styles.cartIcon} alt="Cart" src="https://cdn-icons-png.flaticon.com/128/2838/2838838.png"/>
              <span style={styles.cartCount}>{props.count}</span>
          </div>
      </div>
  )

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