 import "./header.css"
 import { Link } from "react-router-dom";
const Header = () => {
    return ( 
        <nav className="navbar">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo text-dark " > Shop</Link>
          <Link to="cartShop" className="title-card text-dark  ">Shopping Cart</Link>
        </div>
      </nav>
     );
}
 
export default Header;