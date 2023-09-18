import React from "react";

class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {      // Creating a object state
            price: 989,
            title: 'Mobile Phone',
            qty: 2,
            img: ""
        }
    }
    render() {
        const {price, title, qty} = this.state; // Object destructuring

        return(
            <div className="cart-item">
                <div className="left-block">
                    <img alt="" style={styles.image} src=""/> {/* Applying the created syle*/}
                </div>
                <div className="right-block">
                    <div style={{}}>{title}</div>
                    <div style={{}}>Rs. {price}</div>
                    <div style={{}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img alt="increase" className="action-icons" src="https://w7.pngwing.com/pngs/68/239/png-transparent-number-computer-icons-plus-miscellaneous-game-plus.png"/>
                        <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/659/659892.png"/>
                        <img alt="delete" className="action-icons" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_KW_16p1iuJg5nfDvYyJjygmrrEtBVi1-K_SX1csj&s"/>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {            //Creating object for style
    image: {
        height: 100,
        width: 110,
        borderRadius: 4,
        backgroundColor: 'pink'
    }
}

export default CartItem;