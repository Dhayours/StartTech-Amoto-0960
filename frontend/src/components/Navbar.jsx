import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="card" style={{ marginBottom: 16 }}>
      <div className="row" style={{ justifyContent: "space-between" }}>
        <strong>StartTech</strong>
        <div className="row">
          <Link className="btn" to="/">Home</Link>
          <Link className="btn" to="/health">Health</Link>
        </div>
      </div>
    </div>
  );
}
