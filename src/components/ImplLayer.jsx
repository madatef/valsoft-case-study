import { useState } from 'react';

export default function ImplLayer({ layer, color }) {
    const [open, setOpen] = useState(false);
    return (
      <div style={{
        background: open ? `${color}08` : "rgba(255,255,255,0.02)",
        border: `1px solid ${open ? color + "22" : "rgba(255,255,255,0.06)"}`,
        borderRadius: 12, overflow: "hidden", transition: "all 0.2s",
      }}>
        <button onClick={() => setOpen(!open)} style={{
          width: "100%", background: "none", border: "none", cursor: "pointer",
          padding: "14px 20px", display: "flex", gap: 12, alignItems: "center", textAlign: "left",
        }}>
          <span style={{ fontSize: 18, flexShrink: 0 }}>{layer.icon}</span>
          <div style={{ flex: 1, fontSize: 13, fontWeight: 700, color: "#cbd5e1" }}>{layer.label}</div>
          <span style={{ fontSize: 14, color: "#475569", transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>▾</span>
        </button>
        {open && (
          <div style={{ padding: "4px 20px 18px 52px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
            {layer.items.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginTop: 12 }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: color, flexShrink: 0, marginTop: 7 }} />
                <span style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.7 }}>{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }