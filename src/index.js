import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

//  import Products from "./classbase/products";
// import Products from "./functional/funcProduct";

 import Main from './practice/main'

// import Appp from "./classbase/Appp";
// import Apppf from "./functional/Apppf";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

reportWebVitals();
