import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    (setTimeout(() => {
      navigate("/");
    }, 2000),
      [navigate]);
  });
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Dimension Not Found</h1>
      <p>Похоже, Рик уничтожил эту реальность...</p>
    </div>
  );
}
