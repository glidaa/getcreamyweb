import React from "react";
import { Link } from "react-router-dom";

export default function home() {
  return (
    <div>
      This is a home page,{" "}
      <span>
        <Link to="/login">Enter Login</Link>
      </span>
    </div>
  );
}
