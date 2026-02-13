import { Routes, Route, Link } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import { MainNav, PrivateRoute } from "./components";
import { lazy } from "react";

import "./App.css";
const EpisodeLayout = lazy(() => import("./layouts/EpisodeLayout"));
const LocationLayout = lazy(() => import("./layouts/LocationLayout"));
const CharacterLayout = lazy(() => import("./layouts/CharacterLayout"));
const Episode = lazy(() => import("./pages/Episode"));
const Location = lazy(() => import("./pages/Location"));
const Character = lazy(() => import("./pages/Character"));
const CharacterList = lazy(() => import("./pages/CharacterList"));
const LocationList = lazy(() => import("./pages/LocationList"));
const EpisodeList = lazy(() => import("./pages/EpisodeList"));
const Login = lazy(() => import("./pages/Login"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <AuthProvider>
      <main>
        <Routes>
          <Route element={<MainNav />}>
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
          </Route>
        </Routes>
      </main>
    </AuthProvider>
  );
}

export default App;
