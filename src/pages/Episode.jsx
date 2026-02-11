import { Link, useParams } from "react-router-dom";
import episode from "../jsons/episode.json";
import NotFound from "./NotFound";
export default function Episode() {
  const { id } = useParams();

  const episodeItem = episode.find((e) => e.id === Number(id));
  if (!episodeItem) {
    return <NotFound />;
  }
  return (
    <div className="episode-page">
      <Link to="/episodes" className="back-link">
        ← All Episodes
      </Link>

      <div className="episode-details">
        <span className="episode-code">{episodeItem.episode}</span>

        <h1>{episodeItem.name}</h1>

        <div className="meta-info">
          <p>
            <strong>Air Date:</strong> {episodeItem.air_date}
          </p>
          <p>
            <strong>Created:</strong>{" "}
            {new Date(episodeItem.created).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}
