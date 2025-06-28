import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

function RouterComponent() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<h1>Home Page</h1>} />
          <Route path="/contact" element={<h1>Contact Page</h1>} />
          <Route path="/product" element={<h1>Product Page</h1>} />

          <Route path="*" element={<Navigate to="/home" />} />
          {/* <Route
            path="*"
            element={<h1>Sorry, this page isn't available.</h1>}
          /> */}
        </Routes>
      </BrowserRouter>

      <nav>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/product">Product</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default RouterComponent;
