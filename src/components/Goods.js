import React, { Component } from "react";
import "../styles.css";
import {connect} from "react-redux";

import GoodsItem from './GoodsItem';

const mapStateToProps = (state) => {
  return {
    goods: state.goods
  };
}


class Goods extends Component {
  render() {
    return (
      <div className="goods">
        <h2 className="goods__title">Video Games</h2>
        {this.props.goods.map(item => (
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

export default connect(mapStateToProps)(Goods);
