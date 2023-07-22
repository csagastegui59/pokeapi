import { Link, Outlet } from "react-router-dom";
import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <>
      <div className="navbar-colors navbar-flex">
        <div
          style={{
            marginLeft: '30px'
          }}
        >
          <p className="">
            <Link to="/">
              PokéAPI
            </Link>
          </p>
        </div>
        <Outlet />
      </div>
    </>
  )
}