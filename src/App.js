import React from "react";
import TransactionField from "./TransactionField";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      transactions: []
    }
  }

  componentDidMount(){
    this.getTransactions()
  }

  getTransactions = () => {
    axios.get("/api/transactions").then(res => this.setState({transactions: res.data}));
  };


  render() {
    return (
      <div className="App">
        <header>This is a bank website</header>
        <TransactionField getTransactions={this.getTransactions} transactions={this.state.transactions}/>
      </div>
    );
  }
}

export default App;
