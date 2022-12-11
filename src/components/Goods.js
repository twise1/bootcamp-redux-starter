import React, { Component } from "react";
import "../styles.css";
import store from "../redux/store";

import GoodsItem from './GoodsItem';

class Goods extends Component {
  state = {
    goods: []
  }
  componentDidMount(){
    const state = store.getState();
    this.setState({ goods: state.goods });  
  }
  render() {
    return (
      <div className="goods">
        <h2 className="goods__title">Video Games</h2>
        {this.state.goods.map(item => (
          <ul className="goods__list">
            <li className="goods__list-item" key={item.id}>
              <GoodsItem {...item} />
            </li>
          </ul>
        ))}
      </div>
    );
  }
}

export default Goods;