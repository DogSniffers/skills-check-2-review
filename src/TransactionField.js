import React, { Component } from "react";
import axios from "axios";

class TransactionField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: 0,
      balance: 0
    };
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {}

  //? fires when props or state is changed
  componentDidUpdate(previousProps) {
    if (previousProps !== this.props) {
      //do something
    }
  }

  handleInput(event) {
    this.setState({ userInput: event.target.value });
  }

  handleSubmit = () => {
    axios
      .post("/api/transactions", { amount: this.state.userInput })
      .then(() => this.props.getTransactions())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <section>
        <label forHTML="amount">Transaction Amount</label>
        <input
          value={this.state.userInput}
          type="number"
          id="amount"
          onChange={this.handleInput}
        />
        <button onClick={this.handleSubmit}>add transaction</button>
        <ul>
          {this.props.transactions.map(element => {
            return (
              <li>
                <p>{element.t_date}</p>
            {element.t_amount < 0 ? <p style={{color: 'red'}}>{element.t_amount}</p> : <p>{element.t_amount}</p>}
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}


export default TransactionField;
