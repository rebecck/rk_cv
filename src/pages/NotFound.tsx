import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ color: "black" }}>
      404 Not Found
      <br />
      <Link to="/" style={{ color: "black" }}>
        Home
      </Link>
    </div>
  );
}
