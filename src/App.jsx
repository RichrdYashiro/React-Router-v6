import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import {
  Episode,
  Home,
  NotFound,
  Login,
  LocationList,
  EpisodeList,
  Location,
  CharacterList,
  Character,
} from "./pages";
import { EpisodeLayout, LocationLayout, CharacterLayout } from "./Layouts";
import { AuthProvider } from "./context/AuthProvider";
import { MainNav, PrivateRoute } from "./components";

function App() {
  return (
    <AuthProvider>
      <MainNav />
      <main>
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
            <Route
              index
              element={
                <PrivateRoute>
                  <LocationList />
                </PrivateRoute>
              }
            />
            <Route path=":id" element={<Location />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </AuthProvider>
  );
}

export default App;
