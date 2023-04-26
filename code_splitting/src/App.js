import { Redirect, Route, Switch } from "react-router-dom";
import MainHeader from "./components/MainHeader";

import Welcome from "./pages/Welcome";

import React, { Suspense } from "react";

// React.lazy takes a function that must call a dynamic import(), import must return a Promise

// import("./math").then(math => {
//   console.log(math.add(16, 26));
// });

// when name export chaining the Promise returned by import() and adding that default export.
const ProductDetails = React.lazy(() =>
  import("./pages/ProductDetails").then((module) => ({
    default: module.ProductDetails,
  }))
);
const Products = React.lazy(() => import("./pages/Products"));
const Contact = React.lazy(() => import("./pages/Contact"));

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/welcome" />
            </Route>

            <Route path="/welcome">
              <Welcome />
            </Route>

            <Route path="/products" exact>
              <Products />
            </Route>

            <Route path="/products/:productId">
              <ProductDetails />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
