import React from "react";
import { Link } from "react-router-dom";

export default function HeaderNav(props) {
  return (
    <div className="lindsay">
          <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
            <h1> Lindsay's Closet</h1>
          </Link>
    </div>
  );
}
