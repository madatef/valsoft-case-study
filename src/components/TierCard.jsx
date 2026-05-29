export default function TierCard({ name, price, desc, color }) {
    return (
      <div style={{
        background: "rgba(255,255,255,0.03)",
        border: `1px solid rgba(255,255,255,0.07)`,
        borderRadius: 12,
        padding: "18px 20px",
        flex: "1 1 180px",
      }}>
        <div style={{ fontSize: 11, fontWeight: 700, color, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 6 }}>{name}</div>
        <div style={{ fontSize: 18, fontWeight: 800, color: "#f1f5f9", marginBottom: 8, fontFamily: "'DM Mono', monospace" }}>{price}</div>
        <div style={{ fontSize: 12, color: "#94a3b8", lineHeight: 1.6 }}>{desc}</div>
      </div>
    );
}