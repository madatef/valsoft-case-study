import { useState } from 'react'
import { FEATURES, HONORABLE_MENTIONS } from './constants'
import FeatureCard from './components/FeatureCard'
import StatPill from './components/StatPill'
import Step from './components/Step'
import TierCard from './components/TierCard'

function App() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeTab, setActiveTab] = useState("problem");
  const f = FEATURES[activeFeature];
 
  const tabs = [
    { id: "problem", label: "The Problem" },
    { id: "solution", label: "The Solution" },
    { id: "data", label: "Data & Feasibility" },
    { id: "gtm", label: "Go-To-Market" },
  ];
 
  return (
    <div style={{
      minHeight: "100vh",
      background: "#080c14",
      fontFamily: "'Sora', 'Outfit', sans-serif",
      color: "#e2e8f0",
    }}>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=DM+Mono:ital,wght@0,400;0,500;1,400&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0f172a; }
        ::-webkit-scrollbar-thumb { background: #334155; border-radius: 2px; }
      `}</style>
 
      {/* Header */}
      <div style={{
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "28px 48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "rgba(8,12,20,0.9)",
        position: "sticky",
        top: 0,
        zIndex: 100,
        backdropFilter: "blur(12px)",
      }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 8, height: 8, borderRadius: "50%", background: "#0EA5E9",
              boxShadow: "0 0 12px #0EA5E9",
            }} />
            <span style={{ fontSize: 11, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: 2 }}>
              Valsoft AI Venture Builder
            </span>
          </div>
          <h1 style={{ fontSize: 20, fontWeight: 800, color: "#f1f5f9", marginTop: 4 }}>
            DockMaster · AI Feature Proposals
          </h1>
        </div>
        <div style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 8,
          padding: "8px 16px",
          fontSize: 12,
          color: "#64748b",
          fontFamily: "'DM Mono', monospace",
        }}>
          3 features · May 2026
        </div>
      </div>
 
      <div style={{ display: "flex", height: "calc(100vh - 77px)" }}>
 
        {/* Left Sidebar */}
        <div style={{
          width: 280,
          flexShrink: 0,
          borderRight: "1px solid rgba(255,255,255,0.06)",
          padding: "28px 20px",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          overflowY: "auto",
        }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: "#475569", textTransform: "uppercase", letterSpacing: 2, marginBottom: 4, paddingLeft: 4 }}>
            Feature Selection
          </div>
          {FEATURES.map((feat, i) => (
            <FeatureCard
              key={feat.id}
              feature={feat}
              isActive={activeFeature === i}
              onClick={() => { setActiveFeature(i); setActiveTab("problem"); }}
            />
          ))}
 
          <div style={{
            marginTop: "auto",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 12,
            padding: "16px",
          }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: "#475569", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 8 }}>Priority Matrix</div>
            {FEATURES.map((feat) => (
              <div key={feat.id} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: feat.color, flexShrink: 0 }} />
                <div style={{ fontSize: 11, color: "#64748b", flex: 1 }}>{feat.code}</div>
                <div style={{ width: 60, height: 4, background: "rgba(255,255,255,0.06)", borderRadius: 2, overflow: "hidden" }}>
                  <div style={{
                    height: "100%", background: feat.color, borderRadius: 2,
                    width: feat.id === 1 ? "95%" : feat.id === 2 ? "80%" : "70%",
                  }} />
                </div>
              </div>
            ))}
            <div style={{ fontSize: 10, color: "#334155", marginTop: 6 }}>by implementation readiness</div>
          </div>
        </div>
 
        {/* Main Content */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflowY: "auto" }}>
 
          {/* Feature Hero */}
          <div style={{
            padding: "40px 48px 32px",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            background: `radial-gradient(ellipse at 80% 0%, ${f.color}10 0%, transparent 60%)`,
          }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 24 }}>
              <div>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: `${f.color}18`, border: `1px solid ${f.color}44`,
                  borderRadius: 100, padding: "4px 12px", marginBottom: 16,
                }}>
                  <span style={{ fontSize: 12 }}>{f.icon}</span>
                  <span style={{ fontSize: 11, fontWeight: 700, color: f.color, textTransform: "uppercase", letterSpacing: 1.5 }}>{f.badge}</span>
                </div>
                <h2 style={{
                  fontSize: 38, fontWeight: 800, color: "#f8fafc", lineHeight: 1.15,
                  whiteSpace: "pre-line", letterSpacing: -1.5,
                }}>
                  {f.title}
                </h2>
                <p style={{ fontSize: 15, color: "#64748b", marginTop: 12, maxWidth: 520, fontStyle: "italic" }}>
                  {f.tagline}
                </p>
              </div>
              <div style={{
                background: `${f.color}12`,
                border: `1px solid ${f.color}33`,
                borderRadius: 16,
                padding: "12px 20px",
                textAlign: "center",
                flexShrink: 0,
              }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 28, fontWeight: 700, color: f.color }}>{f.code}</div>
                <div style={{ fontSize: 10, color: "#475569", textTransform: "uppercase", letterSpacing: 1, marginTop: 2 }}>Feature ID</div>
              </div>
            </div>
          </div>
 
          {/* Tabs */}
          <div style={{
            display: "flex", gap: 2, padding: "0 48px",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            background: "rgba(8,12,20,0.6)",
          }}>
            {tabs.map(tab => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
                background: "none", border: "none", cursor: "pointer",
                padding: "16px 20px",
                fontSize: 13, fontWeight: 600,
                color: activeTab === tab.id ? f.color : "#475569",
                borderBottom: `2px solid ${activeTab === tab.id ? f.color : "transparent"}`,
                transition: "all 0.2s",
              }}>
                {tab.label}
              </button>
            ))}
          </div>
 
          {/* Tab Content */}
          <div style={{ padding: "40px 48px", flex: 1 }}>
 
            {activeTab === "problem" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                <p style={{ fontSize: 15, color: "#94a3b8", lineHeight: 1.85, maxWidth: 700 }}>
                  {f.problem.body}
                </p>
                <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                  {f.problem.stats.map((s, i) => (
                    <StatPill key={i} {...s} color={f.color} />
                  ))}
                </div>
 
                {/* Competitive awareness callout */}
                <div style={{
                  background: `rgba(251, 191, 36, 0.06)`,
                  border: "1px solid rgba(251,191,36,0.2)",
                  borderRadius: 12,
                  padding: "16px 20px",
                  display: "flex", gap: 12, alignItems: "flex-start",
                }}>
                  <span style={{ fontSize: 18, flexShrink: 0 }}>⚠️</span>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: "#fbbf24", marginBottom: 4 }}>Competitive Awareness</div>
                    <div style={{ fontSize: 13, color: "#d97706", lineHeight: 1.6 }}>{f.existing}</div>
                  </div>
                </div>
              </div>
            )}
 
            {activeTab === "solution" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: f.color, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 4 }}>
                  How It Works — Step by Step
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  {f.solution.steps.map((step, i) => (
                    <Step key={i} number={i + 1} title={step.title} body={step.body} color={f.color} />
                  ))}
                </div>
              </div>
            )}
 
            {activeTab === "data" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 16 }}>
                    Data Requirements
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {f.dataRequired.map((d, i) => (
                      <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                        <div style={{ width: 20, height: 20, borderRadius: 6, background: `${f.color}22`, border: `1px solid ${f.color}44`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                          <span style={{ fontSize: 10 }}>✓</span>
                        </div>
                        <span style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1.6 }}>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
 
                <div style={{
                  background: `${f.color}0a`,
                  border: `1px solid ${f.color}22`,
                  borderRadius: 12,
                  padding: "20px 24px",
                }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: f.color, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 8 }}>
                    Build vs. Buy Assessment
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    {[
                      { label: "ML Stack", value: f.id === 1 ? "LLM + RAG on work order history" : f.id === 2 ? "Time-series forecasting (Prophet / XGBoost)" : "Aggregation pipeline + LLM analysis" },
                      { label: "Integration Point", value: "DockMaster API (existing)" },
                      { label: "Time to MVP", value: f.id === 1 ? "8–12 weeks" : f.id === 2 ? "10–14 weeks" : "12–16 weeks" },
                      { label: "Build Complexity", value: f.id === 1 ? "Medium" : f.id === 2 ? "Medium-High" : "High (data privacy layer critical)" },
                    ].map((item, i) => (
                      <div key={i} style={{ background: "rgba(255,255,255,0.03)", borderRadius: 8, padding: "12px 14px" }}>
                        <div style={{ fontSize: 10, color: "#475569", textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{item.label}</div>
                        <div style={{ fontSize: 13, color: "#cbd5e1", fontWeight: 600 }}>{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
 
            {activeTab === "gtm" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 12 }}>
                    Positioning
                  </p>
                  <p style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1.8, maxWidth: 680 }}>{f.gtm.positioning}</p>
                </div>
 
                <div>
                  <p style={{ fontSize: 13, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 16 }}>
                    Pricing Tiers
                  </p>
                  <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                    {f.gtm.tiers.map((tier, i) => (
                      <TierCard key={i} {...tier} color={f.color} />
                    ))}
                  </div>
                </div>
 
                <div>
                  <p style={{ fontSize: 13, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 16 }}>
                    Sales Motions
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {f.gtm.sales.map((s, i) => (
                      <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                        <div style={{
                          width: 24, height: 24, borderRadius: "50%",
                          background: `${f.color}20`, border: `1px solid ${f.color}44`,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: 11, fontWeight: 700, color: f.color, flexShrink: 0, marginTop: 1,
                        }}>{i + 1}</div>
                        <p style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.7 }}>{s}</p>
                      </div>
                    ))}
                  </div>
                </div>
 
                <div style={{
                  background: `${f.color}08`,
                  border: `1px solid ${f.color}22`,
                  borderRadius: 12,
                  padding: "20px 24px",
                }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                    <span style={{ fontSize: 16 }}>🏰</span>
                    <div style={{ fontSize: 12, fontWeight: 700, color: f.color, textTransform: "uppercase", letterSpacing: 1.5 }}>Competitive Moat</div>
                  </div>
                  <p style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.75 }}>{f.gtm.moat}</p>
                </div>
              </div>
            )}
          </div>
 
          {/* Honorable Mentions */}
          <div style={{
            padding: "40px 48px 48px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            background: "rgba(255,255,255,0.01)",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.06)" }} />
              <div style={{ fontSize: 10, fontWeight: 700, color: "#334155", textTransform: "uppercase", letterSpacing: 2, whiteSpace: "nowrap" }}>
                Honorable Mentions — Additional Opportunities
              </div>
              <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.06)" }} />
            </div>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: 14,
            }}>
              {HONORABLE_MENTIONS.map((m) => (
                <div key={m.code} style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 12,
                  padding: "16px 18px",
                  transition: "border-color 0.2s",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                    <span style={{ fontSize: 16 }}>{m.icon}</span>
                    <div>
                      <div style={{ fontSize: 9, fontWeight: 700, color: m.color, textTransform: "uppercase", letterSpacing: 1.5 }}>{m.code} · {m.badge}</div>
                    </div>
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#94a3b8", marginBottom: 8, lineHeight: 1.3 }}>{m.title}</div>
                  <div style={{ fontSize: 12, color: "#475569", lineHeight: 1.65 }}>{m.summary}</div>
                </div>
              ))}
            </div>
          </div>
 
        </div>
      </div>
    </div>
  );
}

export default App
