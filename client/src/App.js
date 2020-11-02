import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import "./App.css";
import { Provider } from 'react-redux';
import store from './utils/store';

import Home from "./pages/Home";
import Nav from "./components/Nav";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AllProducts from "./components/AllProducts";
import ViewAll from './components/ViewAll'
import SingleProduct from "./pages/SingleProduct";
import SingleCategory from "./pages/SingleCategory";

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Provider store={store}>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
              <Route exact path ='/viewcategory' component={AllProducts} />
              <Route exact path ='/viewall' component={ViewAll} />
              <Route exact path ='/products/:id' component={SingleProduct} />
              <Route exact path ='/category/:id' component={SingleCategory} />
            </Switch>
          </Provider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
