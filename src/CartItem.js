import React from "react";

class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {      // Creating a object state
            price: 989,
            title: 'Mobile Phone',
            qty: 0,
            img: ""
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }

    /**
     * Increases the quantity by 1 and updates the component's state.
     * It logs the current quantity to the console before the update and after the update
     */
    increaseQuantity = () => {
        console.log(this.state.qty); // Log the current quantity to the console
        
        // set state form 1:
        // this.setState((prevState) => ({
        // qty: prevState.qty + 1
        // }), () => {
        // console.log(this.state.qty);
        // });
        

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


    render() {
        const {price, title, qty, img} = this.state; // Object destructuring

        return(
            <div className="cart-item">
                <div className="left-block">
                    <img alt="" style={styles.image} src={img}/> {/* Applying the created syle*/}
                </div>
                <div className="right-block">
                    <div style={{}}>{title}</div>
                    <div style={{}}>Rs. {price}</div>
                    <div style={{}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img 
                            alt="increase"
                            className="action-icons" 
                            src="https://w7.pngwing.com/pngs/68/239/png-transparent-number-computer-icons-plus-miscellaneous-game-plus.png"
                            onClick={this.increaseQuantity}
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/659/659892.png"
                            onClick={this.decreaseQuantity}
                        />
                            <img alt="delete" 
                            className="action-icons" 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_KW_16p1iuJg5nfDvYyJjygmrrEtBVi1-K_SX1csj&s"
                        />
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