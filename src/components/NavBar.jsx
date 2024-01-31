import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav>
        <Link className="link" to="/">
          <h1>Kalvium</h1>
        </Link>
        <ul>
          <Link className="link" to="/contact">
            <li>Contact</li>
          </Link>
          <Link className="link" to="/about">
            <li>About</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
