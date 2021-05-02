import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { ApolloLink } from "apollo-link";
import { onError } from "apollo-link-error";
import { HttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";

import { Header } from "../Header/Header.jsx";
import { Footer } from "../Footer/Footer.jsx";

import { Main } from "../Main/Main.jsx";
import { Favorites } from "../Favorites/Favorites.jsx";
import { Home } from "../Home/Home.jsx";
import { SignIn } from "../Forms/SignIn.jsx";
import { SignUp } from "../Forms/SignUp.jsx";
import { RecoveryPassword } from "../Recovery/Recovery.jsx";

import "./App.css";

const clientParam = {
  uri: "http://shop-roles.asmer.fs.a-level.com.ua/graphql",
};

const contextLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  console.log("token: ", token);
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : null,
    },
  };
});

const onErrorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const client = new ApolloClient(clientParam);

export function App() {
  return (
    <div className="app">
      <ApolloProvider client={client}>
        {/* <Provider store={store}> */}
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/catalog" component={Main} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/recovery" component={RecoveryPassword} />
        </BrowserRouter>
        {/* </Provider> */}
      </ApolloProvider>
      <Footer />
    </div>
  );
}
