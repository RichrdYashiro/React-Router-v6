export default function MainMenu() {
  return (
    <>
      <h1>Main Menu</h1>
      <ul>
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
      </ul>
      ;
    </>
  );
}
