import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import reportWebVitals from "./reportWebVitals";

import { App } from "./components/App/App.jsx";

import "./index.css";

const clientParam = {
  uri: "http://shop-roles.asmer.fs.a-level.com.ua/graphql",
};

const client = new ApolloClient(clientParam);

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      {/* <Provider store={store}> */}
      <App />
      {/* </Provider> */}
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
