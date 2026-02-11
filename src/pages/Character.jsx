import characters from "../jsons/characters.json";
import { Link, useParams } from "react-router-dom";
import NotFound from "./NotFound";

export default function Characters() {
  const { id } = useParams();
  const character = characters.find((character) => character.id === Number(id));
  if (!character) {
    return <NotFound />;
  }
  return (
    <div className="container">
      <Link strokeWidth={2} to="/characters" className="back-link">
        ← Back to List
      </Link>

      <article className="character-card">
        <div className="card-image">
          <img src={character?.image} alt={character?.name} />
        </div>

        <div className="card-content">
          <h1 className="title">{character?.name}</h1>

          <div className="status-badge">
            <span
              className={`indicator ${character?.status.toLowerCase()}`}
            ></span>
            {character?.status} - {character?.species}
          </div>

          <div className="details">
            <div className="detail-item">
              <span className="label">Gender:</span>
              <span className="value">{character.gender}</span>
            </div>

            <div className="detail-item">
              <span className="label">Last known location:</span>
              <span className="value">
                {character.location?.name || "Unknown"}
              </span>
            </div>

            <div className="detail-item">
              <span className="label">Created at:</span>
              <span className="value">
                {new Date(character.created).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
