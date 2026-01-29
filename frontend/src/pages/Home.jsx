import { useState } from "react";
import api from "../api/axios";

export default function Home() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const pingBackend = async () => {
    try {
      setLoading(true);
      setResult("");

      // Adjust endpoint if your backend uses a different route
      // Example: / , /api , /health, /api/v1/health
      const res = await api.get("/");
      setResult(typeof res.data === "string" ? res.data : JSON.stringify(res.data, null, 2));
    } catch (err) {
      const msg =
        err?.response?.data
          ? JSON.stringify(err.response.data, null, 2)
          : err?.message || "Request failed";
      setResult(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h2 style={{ marginTop: 0 }}>Frontend is running ✅</h2>
      <p>
        API Base URL: <code>{import.meta.env.VITE_API_URL}</code>
      </p>

      <div className="row" style={{ marginTop: 12 }}>
        <button className="btn" onClick={pingBackend} disabled={loading}>
          {loading ? "Pinging..." : "Ping Backend"}
        </button>
      </div>

      {result && (
        <pre className="card" style={{ marginTop: 16, whiteSpace: "pre-wrap" }}>
          {result}
        </pre>
      )}
    </div>
  );
}
