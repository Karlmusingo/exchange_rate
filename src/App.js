import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Exchange rate using GraphQL and Apollo Client</p>
      </header>
      <Query
        query={gql`
          {
            rates(currency: "USD") {
              currency
              rate
              name
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <p> Loading...</p>;
          if (error) return <p> Error :(</p>;

          return data.rates.map(({ currency, rate, name }) => {
            return (
              <div key={currency}>
                <p>
                  {name} => {currency} : {rate}
                </p>
              </div>
            );
          });
        }}
      </Query>
    </div>
  );
}

export default App;
