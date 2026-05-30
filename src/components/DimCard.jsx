import { useState } from "react";

export default function DimCard({ dim, color }) {
    const [open, setOpen] = useState(false);
    return (
      <div style={{
        background: open ? `${color}0a` : "rgba(255,255,255,0.02)",
        border: `1px solid ${open ? color + "33" : "rgba(255,255,255,0.07)"}`,
        borderRadius: 12, overflow: "hidden", transition: "all 0.2s",
      }}>
        <button onClick={() => setOpen(!open)} style={{
          width: "100%", background: "none", border: "none", cursor: "pointer",
          padding: "14px 20px", display: "flex", gap: 12, alignItems: "center", textAlign: "left",
        }}>
          <div style={{ flex: 1, fontSize: 13, fontWeight: 700, color: "#cbd5e1" }}>{dim.label}</div>
          <span style={{ fontSize: 14, color: "#475569", transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>▾</span>
        </button>
        {open && (
          <div style={{ padding: "0 20px 18px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <p style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.8, marginTop: 14 }}>{dim.body}</p>
          </div>
        )}
      </div>
    );
}