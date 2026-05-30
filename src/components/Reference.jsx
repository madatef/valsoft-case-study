import React from 'react';
import { referencesData } from '../constants';


export default function Reference() {
  return (
    <div style={{ padding: "24px 48px", height: "100%", overflowY: "auto" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h1 style={{
          fontSize: 24,
          fontWeight: 800,
          color: "#f1f5f9",
          marginBottom: 24,
          display: "flex",
          alignItems: "center",
          gap: 12
        }}>
          📚 Research References
        </h1>

        <p style={{
          color: "#94a3b8",
          fontSize: 14,
          marginBottom: 32,
          maxWidth: 800
        }}>
          All sources consulted during the DockMaster AI feature analysis, organized by research area.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {referencesData.map((section) => (
            <div
              key={section.id}
              style={{
                background: "rgba(15, 23, 42, 0.6)",
                border: "1px solid rgba(255,255,255,0.05)",
                borderRadius: 12,
                padding: 24
              }}
            >
              <h2 style={{
                fontSize: 18,
                fontWeight: 700,
                color: "#e2e8f0",
                marginBottom: 16,
                display: "flex",
                alignItems: "center",
                gap: 8
              }}>
                {section.id}. {section.category}
              </h2>

              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: 16
              }}>
                {section.resources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "block",
                      background: "rgba(30, 41, 59, 0.5)",
                      border: "1px solid rgba(255,255,255,0.05)",
                      borderRadius: 8,
                      padding: 16,
                      textDecoration: "none",
                      transition: "all 0.2s",
                      color: "#cbd5e1"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(56, 189, 248, 0.1)";
                      e.currentTarget.style.borderColor = "rgba(56, 189, 248, 0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(30, 41, 59, 0.5)";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                    }}
                  >
                    <div style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#e2e8f0",
                      marginBottom: 8,
                      lineHeight: 1.4
                    }}>
                      {resource.title}
                    </div>
                    <div style={{
                      fontSize: 11,
                      color: "#64748b",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap"
                    }}>
                      {resource.url}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 32,
          paddingTop: 24,
          borderTop: "1px solid rgba(255,255,255,0.05)",
          fontSize: 12,
          color: "#64748b",
          textAlign: "center"
        }}>
          Session date: May 2026. All URLs verified as accessible during research.
        </div>
      </div>
    </div>
  );
};
