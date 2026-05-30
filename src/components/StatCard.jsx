import { useState } from "react";

export default function StatCard({ item, color }) {
    const [open, setOpen] = useState(false);
    return (
      <div style={{
        background: open ? `${color}0a` : "rgba(255,255,255,0.02)",
        border: `1px solid ${open ? color + "33" : "rgba(255,255,255,0.07)"}`,
        borderRadius: 12,
        overflow: "hidden",
        transition: "all 0.2s",
      }}>
        <button onClick={() => setOpen(!open)} style={{
          width: "100%", background: "none", border: "none", cursor: "pointer",
          padding: "16px 20px", display: "flex", gap: 14, alignItems: "flex-start", textAlign: "left",
        }}>
          <span style={{ fontSize: 20, flexShrink: 0, marginTop: 2 }}>{item.icon}</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#e2e8f0", lineHeight: 1.4, fontFamily: "'DM Mono', monospace" }}>
              "{item.stat}"
            </div>
            <div style={{ fontSize: 11, color: "#475569", marginTop: 4 }}>Click to see full justification</div>
          </div>
          <span style={{ fontSize: 16, color: "#475569", flexShrink: 0, transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>▾</span>
        </button>
        {open && (
          <div style={{ padding: "0 20px 20px 54px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <p style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.8, marginTop: 16 }}>{item.justification}</p>
            <div style={{ marginTop: 12, display: "flex", gap: 8, alignItems: "flex-start" }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: color, textTransform: "uppercase", letterSpacing: 1, flexShrink: 0, marginTop: 1 }}>Source:</span>
              <span style={{ fontSize: 11, color: "#64748b", fontStyle: "italic", lineHeight: 1.6 }}>{item.source}</span>
            </div>
          </div>
        )}
      </div>
    );
}