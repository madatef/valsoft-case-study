export default function StatPill({ label, value, note, color }) {
    return (
      <div style={{
        background: "rgba(255,255,255,0.04)",
        border: `1px solid rgba(255,255,255,0.08)`,
        borderRadius: 12,
        padding: "16px 20px",
        flex: "1 1 180px",
      }}>
        <div style={{ fontSize: 26, fontWeight: 800, color, fontFamily: "'DM Mono', monospace", letterSpacing: -1 }}>{value}</div>
        <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 2, textTransform: "uppercase", letterSpacing: 1 }}>{label}</div>
        <div style={{ fontSize: 11, color: "#64748b", marginTop: 3, fontStyle: "italic" }}>{note}</div>
      </div>
    );
}