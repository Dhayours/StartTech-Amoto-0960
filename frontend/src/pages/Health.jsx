import { useState } from "react";
import api from "../api/axios";

export default function Health() {
  const [path, setPath] = useState("/health");
  const [result, setResult] = useState("");

  const check = async () => {
    try {
      setResult("");
      const res = await api.get(path);
      setResult(typeof res.data === "string" ? res.data : JSON.stringify(res.data, null, 2));
    } catch (err) {
      const msg =
        err?.response?.data
          ? JSON.stringify(err.response.data, null, 2)
          : err?.message || "Request failed";
      setResult(msg);
    }
  };

  return (
    <div className="card">
      <h2 style={{ marginTop: 0 }}>Health Check</h2>
      <p>Try your backend endpoints here.</p>

      <div className="row">
        <input
          className="input"
          value={path}
          onChange={(e) => setPath(e.target.value)}
          placeholder="/health"
        />
        <button className="btn" onClick={check}>Check</button>
      </div>

      {result && (
        <pre className="card" style={{ marginTop: 16, whiteSpace: "pre-wrap" }}>
          {result}
        </pre>
      )}
    </div>
  );
}
