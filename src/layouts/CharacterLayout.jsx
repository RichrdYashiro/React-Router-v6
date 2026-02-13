import characters from "../jsons/characters.json";
import { Link, Outlet } from "react-router-dom";

export default function CharacterLayout() {
  const character = characters.map((e) => (
    <li key={e.id}>
      <Link to={`/characters/${e.id}`}>{e.name}</Link>
    </li>
  ));
  if (!character) {
    return <NotFound />;
  }

  return (
    <>
      {character}
      <Outlet />
    </>
  );
}
