import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ApolloProvider as Provider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { Header } from '../Header/Header.jsx';
import { Footer } from '../Footer/Footer.jsx';

import { Main } from '../Main/Main.jsx';
import { Home } from '../Home/Home.jsx';
import { SignIn } from '../Forms/SignIn.jsx';
import { SignUp } from '../Forms/SignUp.jsx';
import { Basket } from '../Basket/Basket.jsx';
import { Profile } from '../Profile/Profile.jsx';

import './App.css';

const contextLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  const headersObj = {
    ...headers,
  };
  if (token !== 'null' && token !== 'undefined') {
    headersObj.Authorization = `Brearer ${token}`;
  }
  return headersObj;
});

const onErrorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const httpLink = new HttpLink({
  uri: 'http://shop-roles.asmer.fs.a-level.com.ua/graphql',
});

const client = new ApolloClient({
  link: ApolloLink.from([onErrorLink, contextLink, httpLink]),
  cache: new InMemoryCache({
    addTypename: true,
    resultCaching: true,
  }),
});
export function App() {
  const getToken = localStorage.getItem('token');
  const [searchProduct, setSearchProduct] = useState('');
  const [isLoggetIn, setIsLoggetIn] = useState(getToken);

  const handleSearchClick = (value) => {
    setSearchProduct(value);
  };
  return (
    <div className="app">
      <Provider client={client}>
        <BrowserRouter>
          <Header isLoggetIn={isLoggetIn} handleSearchClick={handleSearchClick} />
          <Route exact path="/" component={Home} />
          <Route path="/catalog">
            <Main searchProduct={searchProduct} />
          </Route>
          <Route path="/signin">
            <SignIn setIsLoggetIn={setIsLoggetIn} />
          </Route>
          <Route path="/signup" component={SignUp} />
          <Route path="/profile">
            <Profile setIsLoggetIn={setIsLoggetIn} />
          </Route>
          <Route path="/basket" component={Basket} />
        </BrowserRouter>
      </Provider>
      <Footer />
    </div>
  );
}
