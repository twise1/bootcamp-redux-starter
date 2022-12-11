import React, { Component } from "react";
import "../styles.css";
import {addGoodsToCard} from "../redux/actions";
import { connect } from "react-redux";


mapDispatchToProps = (dispatch) => ({
  addGoodsToCard : (id) => dispatch(addGoodsToCard(id))
});


class GoodsItem extends Component {
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
        <button className="goods-item__add-to-card" onClick={() => this.props.addGoodsToCard(id)}>Add to cart</button>
      </div>
    );
  }
}

export default connect(null,mapDispatchToProps)(GoodsItem);