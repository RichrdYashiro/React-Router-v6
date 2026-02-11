import "./App.css";

import { Routes, Route, Link } from "react-router-dom";
import {
  Episode,
  Home,
  NotFound,
  LocationList,
  EpisodeList,
  Location,
  CharacterList,
  Character,
} from "./pages";
import { EpisodeLayout, LocationLayout, CharacterLayout } from "./Layouts";
function App() {
  return (
    <>
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

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/characters" element={<CharacterLayout />}>
          <Route index element={<CharacterList />} />
          <Route path=":id" element={<Character />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="/episodes" element={<EpisodeLayout />}>
          <Route index element={<EpisodeList />} />
          <Route path=":id" element={<Episode />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="/locations" element={<LocationLayout />}>
          <Route index element={<LocationList />} />
          <Route path=":id" element={<Location />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
