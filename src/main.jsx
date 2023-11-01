import ReactDOM from "react-dom/client";
import ProductsContext from "../context/ProductsContext.jsx";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductsContext>
    <App />
  </ProductsContext>
);
