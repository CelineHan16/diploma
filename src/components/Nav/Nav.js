import "./Nav.css";

function Nav(props) {
  return (
    <nav className="Nav">
      <ul>
        <li><a href="/">Shop</a></li>
        <li><a href="/">Special days</a></li>
        <li><a href="/">Delivery</a></li>
        <li><a href="/">Location</a></li>
      </ul>
      <div>Bakery Paradise</div>
      <ul>
        <li><a href="/">About</a></li>
        <li><a href="/">Unveil</a></li>
        <li><a href="/">Account</a></li>
        <li><a href="/">Search</a></li>
      </ul>
    </nav>
  );
  
}

export default Nav;