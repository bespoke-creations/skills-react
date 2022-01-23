import React, { lazy, Suspense } from "react";
import "./App.css";
import { Router, RouteComponentProps, Link } from "@reach/router";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactUs: React.FC<RouteComponentProps> = lazy(
  () => import("./Pages/Contact-us")
);
const Home: React.FC<RouteComponentProps> = lazy(() => import("./Pages/Home"));

function App() {
  return (
    <div className="App">
      <nav className=" navbar-inverse">
        <div className="navbar-header">Bespoke Creation</div>
        <Link to="/">Home</Link>
        &nbsp; &nbsp;&nbsp;&nbsp;
        <Link to="/contact-us">Contact Us</Link>
      </nav>
      <Suspense fallback={<div>Loading</div>}>
        <Router>
          <Home path="/" />
          <ContactUs path="/contact-us" />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
