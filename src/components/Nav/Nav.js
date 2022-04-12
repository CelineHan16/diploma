import "./Nav.css";
import Logo from "../ui/Logo";
import NavItem from "./NavItem/NavItem";

function Nav(props) {

  return (
    <nav className="Nav">
      <ul>  
        <NavItem url="/shop">Shop</NavItem>
        <NavItem url="/">Special days</NavItem>
        <NavItem url="/">Delivery</NavItem>
        <NavItem url="/">Location</NavItem>
      </ul>
      <NavItem url="/"><Logo /></NavItem>
      <ul>
        <NavItem url="/about">About</NavItem>
        <NavItem url="/">Unveil</NavItem>
        <NavItem url="/account">Account</NavItem>
        <NavItem url="/">Search</NavItem>
      </ul>
    </nav>
  );
  
}

export default Nav;