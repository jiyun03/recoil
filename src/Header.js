import { NavLink } from "react-router-dom";

function Header() {
  const style = {
    color: "hotpink",
    fontWeight: "bold",
    fontSize: 20,
  };

  return (
    <header>
      <ul>
        <li>
          <NavLink exact to="/" activeStyle={style}>
            Main
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/sub" activeStyle={style}>
            Sub
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
