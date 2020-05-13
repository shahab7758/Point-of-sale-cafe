import React, { Component, lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./style.css";
// import Billing from "./Billing";
const All = lazy(() => import("./All"));
const Billing = lazy(() => import("./Billing"));
const Juice = lazy(() => import("./Juice"));
const FastFood = lazy(() => import("./FastFood"));
const Biscuits = lazy(() => import("./Biscuits"));
const SoftDrinks = lazy(() => import("./SoftDrinks"));
const Home = lazy(() => import("./Home"));

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Suspense fallback={<div>Loadinng...</div>}>
            <Home />
            {/* <Billing /> */}
            <Switch>
              <Route exact path="/all" component={All} />
              <Route exact path="/billing" component={Billing} />
              <Route exact path="/juice" component={Juice} />
              <Route exact path="/biscuits" component={Biscuits} />
              <Route exact path="/fastfood" component={FastFood} />
              <Route exact path="/softdrinks" component={SoftDrinks} />
            </Switch>
          </Suspense>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
