export default function Step({ number, title, body, color }) {
    return (
      <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
        <div style={{
          width: 32, height: 32, borderRadius: "50%", background: color,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 13, fontWeight: 800, color: "#fff", flexShrink: 0, marginTop: 2,
          fontFamily: "'DM Mono', monospace",
        }}>{number}</div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 14, color: "#e2e8f0", marginBottom: 4 }}>{title}</div>
          <div style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.7 }}>{body}</div>
        </div>
      </div>
    );
}
  