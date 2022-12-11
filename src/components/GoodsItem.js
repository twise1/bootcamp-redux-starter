import React, { Component } from "react";
import "../styles.css";
import store from "../redux/store";
import {addGoodsToCard} from "../redux/actions";


class GoodsItem extends Component {
  ButtonClick = (id) => {
    store.dispatch(addGoodsToCard(id));

  };
  render() {
    const { title, description, price, id } = this.props;

    return (
      <div className="goods-item" key={id}>
        <h3 className="goods-item__title">{title}</h3>
        <p className="goods-item__price">
          <span className="goods-item__price-value goods-item__price-value_old">{price*1.2}.00$ </span>
          <span className="goods-item__price-value goods-item__price-value_new">{price}.00$</span>
        </p>
        <p className="goods-item__description">{description}</p>
        <button className="goods-item__add-to-card" onClick={() => this.ButtonClick(id)}>Add to cart</button>
      </div>
    );
  }
}

export default GoodsItem;