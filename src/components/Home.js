import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
 
  return (
    <div className="home">
      <Link className="home-link" to="/nasaphoto" >See into the stars!</Link>
    </div>
  );
}