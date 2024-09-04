import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="bg-gradient-to-b from-blue-500 to-blue-300 p-4 text-2xl font-semibold flex justify-between items-center">
        <div>
          <Link to="/">
            <img src="./src/assets/logo.svg" alt="logo" />
          </Link>
        </div>
        <div>
          <ul className="flex justify-between items-center gap-12 flex-wrap">
            <li>
              <NavLink
                to={""}
                className={({ isActive }) =>
                  `${isActive && "text-red-600"} hover:text-red-500`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"about"}
                className={({ isActive }) =>
                  `${isActive && " text-red-600"} hover:text-red-500`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"contact"}
                className={({ isActive }) =>
                  `${isActive && " text-red-600"} hover:text-red-500`
                }
              >
                Contact
              </NavLink>
            </li>
            <li><NavLink
                to={"github"}
                className={({ isActive }) =>
                  `${isActive && " text-red-600"} hover:text-red-500`
                }
              >
                Github
              </NavLink></li>
            <li>
              <NavLink
                to={`responsiveComponent/${999}`}
                className={({ isActive }) =>
                  `${isActive && " text-red-600"} hover:text-red-500`
                }
              >
                Responsive
              </NavLink>
            </li>
          </ul>
        </div>
        <div></div>
      </nav>
    </>
  );
}

export default Header;
