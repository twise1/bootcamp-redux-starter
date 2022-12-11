import React, { Component } from "react";
import "../styles.css";
import {RemoveGoodsFromCard} from "../redux/actions";
import {connect} from "react-redux";
const mapDispatchToProps = (dispatch) => ({
  RemoveGoodsFromCard : (id) => dispatch(RemoveGoodsFromCard(id))
});

class CartItem extends Component {
  render() {
    const {id, title, price } = this.props;
    return (
      <div className="cart-item">
        <p className="cart-item__title">{title}</p>
        <p className="cart-item__price">{price}.00$</p>
        <button className="goods-item__remove-from-card" onClick={() => this.props.RemoveGoodsFromCard(id)}>X</button>
      </div>
    );
  }
}

export default connect(null,mapDispatchToProps)(CartItem);