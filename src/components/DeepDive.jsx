import { useState } from "react";
import { FEATURES } from "../constants";
import ImplLayer from './ImplLayer'
import DimCard from "./DimCard";
import StatCard from "./StatCard";


const SECTION_TABS = [
  { id: "stats", label: "📊 Stat Justification" },
  { id: "pricing", label: "💰 Pricing Justification" },
  { id: "buildvsbuy", label: "🔧 Build vs. Buy" },
  { id: "implementation", label: "🏗️ Implementation" },
];

export default function DeepDive() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeTab, setActiveTab] = useState("stats");
  const f = FEATURES[activeFeature];
  const section = f.sections[activeTab];

  return (
    <div style={{ minHeight: "100vh", background: "#080c14", fontFamily: "'Sora', sans-serif", color: "#e2e8f0" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=DM+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0f172a; }
        ::-webkit-scrollbar-thumb { background: #334155; border-radius: 2px; }
      `}</style>

      {/* Header */}
      <div style={{
        borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "24px 48px",
        display: "flex", alignItems: "center", justifyContent: "center",
        background: "rgba(8,12,20,0.9)", position: "sticky", top: 0, zIndex: 100, backdropFilter: "blur(12px)",
      }}>
        <div style={{ display: "flex", gap: 8 }}>
          {FEATURES.map((feat, i) => (
            <button key={feat.id} onClick={() => { setActiveFeature(i); setActiveTab("stats"); }} style={{
              background: activeFeature === i ? `${feat.color}18` : "rgba(255,255,255,0.03)",
              border: `1px solid ${activeFeature === i ? feat.color + "55" : "rgba(255,255,255,0.07)"}`,
              borderRadius: 8, padding: "8px 14px", cursor: "pointer",
              fontSize: 12, fontWeight: 700,
              color: activeFeature === i ? feat.color : "#475569",
              transition: "all 0.2s",
            }}>
              {feat.icon} {feat.code}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", height: "calc(100vh - 73px)" }}>
        {/* Sidebar */}
        <div style={{
          width: 220, flexShrink: 0, borderRight: "1px solid rgba(255,255,255,0.06)",
          padding: "28px 16px", display: "flex", flexDirection: "column", gap: 8,
        }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: "#334155", textTransform: "uppercase", letterSpacing: 2, marginBottom: 6, paddingLeft: 4 }}>
            Deep Dive Sections
          </div>
          {SECTION_TABS.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
              background: activeTab === tab.id ? `${f.color}15` : "none",
              border: `1px solid ${activeTab === tab.id ? f.color + "44" : "rgba(255,255,255,0.05)"}`,
              borderRadius: 10, padding: "12px 14px", cursor: "pointer", textAlign: "left",
              fontSize: 12, fontWeight: 600,
              color: activeTab === tab.id ? f.color : "#475569",
              transition: "all 0.2s", lineHeight: 1.4,
            }}>
              {tab.label}
            </button>
          ))}

          <div style={{ marginTop: "auto", padding: "16px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 10 }}>
            <div style={{ fontSize: 10, color: "#334155", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 10 }}>Active Feature</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: f.color }}>{f.code}</div>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#94a3b8", marginTop: 4, lineHeight: 1.4 }}>{f.title}</div>
          </div>
        </div>

        {/* Main */}
        <div style={{ flex: 1, overflowY: "auto" }}>
          {/* Feature hero strip */}
          <div style={{
            padding: "28px 48px", borderBottom: "1px solid rgba(255,255,255,0.06)",
            background: `linear-gradient(90deg, ${f.color}0d 0%, transparent 100%)`,
            display: "flex", alignItems: "center", gap: 16,
          }}>
            <span style={{ fontSize: 28 }}>{f.icon}</span>
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, color: f.color, textTransform: "uppercase", letterSpacing: 1.5 }}>{f.badge}</div>
              <h2 style={{ fontSize: 24, fontWeight: 800, color: "#f8fafc", letterSpacing: -0.5 }}>{f.title}</h2>
            </div>
            <div style={{ marginLeft: "auto", background: `${f.color}15`, border: `1px solid ${f.color}33`, borderRadius: 8, padding: "6px 14px" }}>
              <div style={{ fontSize: 10, color: "#475569", textTransform: "uppercase", letterSpacing: 1 }}>Viewing</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: f.color }}>{SECTION_TABS.find(t => t.id === activeTab)?.label}</div>
            </div>
          </div>

          <div style={{ padding: "40px 48px", display: "flex", flexDirection: "column", gap: 28 }}>

            {/* Intro */}
            <div style={{ borderLeft: `3px solid ${f.color}`, paddingLeft: 20 }}>
              <p style={{ fontSize: 15, fontWeight: 700, color: "#e2e8f0", marginBottom: 6 }}>{section.headline}</p>
              {section.intro && (
                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.7 }}>{section.intro}</p>
              )}
            </div>

            {/* Stats tab */}
            {activeTab === "stats" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <p style={{ fontSize: 11, color: "#475569", textTransform: "uppercase", letterSpacing: 1.5, fontWeight: 700 }}>Click each stat to expand the justification</p>
                {section.items.map((item, i) => <StatCard key={i} item={item} color={f.color} />)}
                <div style={{ marginTop: 8, padding: "16px 20px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 10 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#475569", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>A note on sourcing</div>
                  <p style={{ fontSize: 12, color: "#475569", lineHeight: 1.7 }}>Where marina-specific data exists, it is used directly. Where it does not, the most structurally analogous industry (typically auto repair for service stats, hotels for occupancy/pricing stats) provides the benchmark. In every case, the transfer is argued explicitly rather than assumed. Stats are labeled as directional where they are estimates, and as benchmarks where they are sourced figures.</p>
                </div>
              </div>
            )}

            {/* Pricing tab */}
            {activeTab === "pricing" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {section.points.map((p, i) => (
                  <div key={i} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "20px 24px" }}>
                    <div style={{ fontSize: 13, fontWeight: 800, color: f.color, marginBottom: 10 }}>{p.label}</div>
                    <p style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.8 }}>{p.body}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Build vs Buy tab */}
            {activeTab === "buildvsbuy" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {section.dimensions.map((dim, i) => <DimCard key={i} dim={dim} color={f.color} />)}
              </div>
            )}

            {/* Implementation tab */}
            {activeTab === "implementation" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {section.layers.map((layer, i) => <ImplLayer key={i} layer={layer} color={f.color} />)}
                <div style={{
                  marginTop: 8, padding: "20px 24px",
                  background: `${f.color}08`, border: `1px solid ${f.color}22`, borderRadius: 12,
                }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: f.color, textTransform: "uppercase", letterSpacing: 1.2, marginBottom: 8 }}>Team Recommendation</div>
                  <p style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.75 }}>
                    {f.id === 1 && "A 2–3 person AI engineering team can deliver F-01's MVP in 8–12 weeks. Required skills: one data engineer (ETL + vector store), one ML/AI engineer (RAG pipeline + prompt engineering), one frontend engineer (React integration into DockMaster Web). The data engineering work is the critical path — start there."}
                    {f.id === 2 && "F-03 requires a slightly larger team: one data engineer (feature pipeline + warehouse), one ML engineer (forecasting models + pricing function), one backend engineer (event detection + API integrations), one frontend engineer (pricing calendar UI). The revenue share instrumentation should be built in parallel from day one — it is harder to retrofit than to design in."}
                    {f.id === 3 && "F-08 requires a senior data privacy engineer as the first hire — this is non-negotiable. The anonymization layer must be designed before any data pipeline work begins. Remaining team: one data warehouse engineer (Snowflake pipeline), one backend engineer (benchmarking API), one LLM engineer (playbook generation), one frontend engineer (Compass UI). Budget 4 weeks at the start purely for privacy architecture and legal review."}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}