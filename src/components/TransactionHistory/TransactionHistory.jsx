import React, { Component } from "react";
import propsTypes from "prop-types";
import styles from "./TransactionHistory.module.css";

export default class TransactionHistory extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  render() {
    return (
      <table className={styles.transaction_history}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {this.state.items.map((item) => (
            <tr key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

TransactionHistory.propsTypes = {
  items: propsTypes.array.isRequired,
};
