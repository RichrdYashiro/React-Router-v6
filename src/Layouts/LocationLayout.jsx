import { Link, Outlet } from "react-router-dom";
import locations from "../jsons/location.json";
import { NotFound } from "../pages";

export default function LocationLayout() {
  const location = locations.map((e) => (
    <li key={e.id}>
      <Link to={`/locations/${e.id}`}>{e.name}</Link>
    </li>
  ));
  if (!location) {
    return <NotFound />;
  }

  return (
    <>
      {location}
      <Outlet />
    </>
  );
}
