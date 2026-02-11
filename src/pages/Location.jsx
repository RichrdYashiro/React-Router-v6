import locations from "../jsons/location.json";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import NotFound from "./NotFound";
export default function Location() {
  const { id } = useParams();
  const local = locations.find((local) => local.id === Number(id));
  if (!local) {
    return <NotFound />;
  }
  return (
    <div className="location-container">
      <Link to="/locations" className="back-btn">
        ← All Locations
      </Link>

      <div className="location-info">
        <h1 className="location-title">{local.name}</h1>

        <div className="info-grid">
          <div className="info-block">
            <span className="label">Type:</span>
            <span className="value">{local.type}</span>
          </div>

          <div className="info-block">
            <span className="label">Dimension:</span>
            <span className="value">{local.dimension}</span>
          </div>

          <div className="info-block">
            <span className="label">Discovery Date:</span>
            <span className="value">
              {new Date(local.created).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
