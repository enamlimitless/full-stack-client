import './App.css';
import React, { createContext, useState } from "react";
import Home from './Components/Home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddProduct from './Components/AddProduct/AddProduct';
import Login from './Components/Login/Login';
import NoMatch from './Components/NoMatch/NoMatch';
import Order from './Components/Order/Order';
import Header from './Components/Header/Header';
import Delete from './Components/AddProduct/Delete/Delete';
import PrivateRoute from './Components/PivateRoute/PrivateRoute';

export const UserContext = createContext();
function App() {
  const [userDetail, setUserDetail] = useState({});
  const [orderDetail, setOrderDetail] = useState({});
  return (
    <UserContext.Provider value={[userDetail, setUserDetail]}>
      <Header></Header>
    <Router>
        <Switch>
          <Route path="/admin">
            <AddProduct></AddProduct>
          </Route>
          <Route path="/delete">
            <Delete></Delete>
          </Route>
          <Route path="/login">
            <Login></Login>  
          </Route>
          <PrivateRoute path="/order">
            <Order></Order>
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path='*'>
            <NoMatch></NoMatch>
          </Route>         
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
