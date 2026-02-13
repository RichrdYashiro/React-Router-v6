import { Suspense } from "react";
import { useAuth } from "../context/AuthProvider";
import { Link, Outlet } from "react-router-dom";

export function MainNav() {
  const { user } = useAuth();

  return (
    <>
      <header>
        <ul className="main-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/episodes">Episodes</Link>
          </li>
          <li>
            <Link to="/locations">Locations</Link>
          </li>
          <li>
            <Link to="/characters">Characters</Link>
          </li>

          <li>
            {user ? (
              <span style={{ color: "#00ff95", fontWeight: "bold" }}>
                {user.name}
              </span>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </header>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
}
