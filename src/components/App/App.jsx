import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ApolloProvider as Provider } from "@apollo/react-hooks";
import { ApolloClient } from "apollo-client";
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
import { Cart } from "../Cart/Cart.jsx";
import { RecoveryPassword } from "../Recovery/Recovery.jsx";

import "./App.css";

const contextLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  const headersObj = {
    ...headers,
  };
  if (token !== "null" && token !== "undefined") {
    headersObj.Authorization = `Brearer ${token}`;
  }
  return headersObj;
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

const httpLink = new HttpLink({
  uri: "http://shop-roles.asmer.fs.a-level.com.ua/graphql",
});

const client = new ApolloClient({
  link: ApolloLink.from([onErrorLink, contextLink, httpLink]),
  cache: new InMemoryCache({
    addTypename: true,
    resultCaching: true,
  }),
});

export function App() {
  return (
    <div className="app">
      <Provider client={client}>
        {/* <Provider store={store}> */}
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/catalog" component={Main} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/cart" component={Cart} />
          <Route path="/recovery" component={RecoveryPassword} />
        </BrowserRouter>
        {/* </Provider> */}
      </Provider>
      <Footer />
    </div>
  );
}
