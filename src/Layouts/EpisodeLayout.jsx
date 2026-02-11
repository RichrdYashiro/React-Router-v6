import { Link, Outlet } from "react-router-dom";
import episodes from "../jsons/episode.json";

export default function EpisodeLayout() {
  const episodeList = episodes.map((episode) => (
    <li key={episode.id}>
      <Link to={`/episodes/${episode.id}`}>
        <strong>{episode.episode}</strong>: {episode.name}
      </Link>
    </li>
  ));
  if (!episodeList) {
    return <NotFound />;
  }

  return (
    <div>
      <h1>Episode</h1>
      <ol>{episodeList}</ol>
      <Outlet />
    </div>
  );
}
