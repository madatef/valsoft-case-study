export default function FeatureCard({ feature, isActive, onClick }) {
    return (
      <button onClick={onClick} style={{
        background: isActive
          ? `linear-gradient(135deg, ${feature.color}22 0%, transparent 100%)`
          : "rgba(255,255,255,0.02)",
        border: `1px solid ${isActive ? feature.color + "66" : "rgba(255,255,255,0.06)"}`,
        borderRadius: 16,
        padding: "20px 24px",
        cursor: "pointer",
        textAlign: "left",
        transition: "all 0.25s ease",
        width: "100%",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
          <span style={{ fontSize: 22 }}>{feature.icon}</span>
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, color: feature.color, textTransform: "uppercase", letterSpacing: 1.5 }}>{feature.code} · {feature.badge}</div>
          </div>
        </div>
        <div style={{ fontSize: 15, fontWeight: 800, color: isActive ? "#f1f5f9" : "#94a3b8", lineHeight: 1.3, whiteSpace: "pre-line" }}>
          {feature.title}
        </div>
        {isActive && (
          <div style={{ fontSize: 12, color: "#64748b", marginTop: 6, fontStyle: "italic" }}>{feature.tagline}</div>
        )}
      </button>
    );
}