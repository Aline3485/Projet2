import React from "react";
import { Link } from "react-router-dom";
import Logo from "@assets/image/Logo.png";
import concert from "@assets/image/concert.png";
import inscription from "@assets/image/ajouter-le-fichier.png";
import contact from "@assets/image/contact.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbarcontainer">
      <nav>
        <ul className="list">
          <Link className="lin" to="/">
            <img src={Logo} alt="" className="logo" />
          </Link>
          <Link className="lin" to="/event">
            <img src={concert} alt="" className="icon" />
          </Link>
          <Link className="lin" to="/inscription">
            <img src={inscription} alt="" className="icon" />
          </Link>
          <Link className="lin" to="/contact">
            <img src={contact} alt="" className="icon" />
          </Link>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
