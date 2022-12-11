import React, { Component } from "react";
import "../styles.css";
import {connect} from "react-redux";

import CartItem from './CartItem';
const mapStateToProps = (state) => {
  return{
    cartGoods: state.cart
  }
};
class Cart extends Component {
  // state = {
  //   cartGoods: []
  // }
  getTotal() {
    const { cartGoods } = this.state;
    return cartGoods.reduce((acc, item) => acc + item.price, 0);
  }
  // componentDidMount(){
  //   store.subscribe(()=>{
  //     const state = store.getState();
  //     this.setState({cartGoods : state.cart})
  //   });
  // }
  render() {
    return (
      <div className="cart">
        <h2 className="cart__title" >Shopping Cart</h2>
        { this.props.cartGoods.length ? (
          <ul className="cart__list">
            {this.props.cartGoods.map((item) => (
              <li className="cart__list-item" key={item.id}>
                <CartItem {...item} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="cart__note">Nothing in the cart now</p>
        )}
        
        <p className="cart__total">Total: {this.getTotal()}.00$</p>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Cart);