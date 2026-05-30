import React, { useState } from 'react';
import { qnaData } from '../constants';


const QnA = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

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
          ❓ Q&A
        </h1>

        <p style={{
          color: "#94a3b8",
          fontSize: 14,
          marginBottom: 32,
          maxWidth: 800
        }}>
          Frequently asked questions about the DockMaster AI feature analysis and implementation strategy.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {qnaData.map((item) => (
            <div
              key={item.id}
              style={{
                background: "rgba(15, 23, 42, 0.6)",
                border: "1px solid rgba(255,255,255,0.05)",
                borderRadius: 12,
                overflow: "hidden"
              }}
            >
              <div
                onClick={() => toggleExpand(item.id)}
                style={{
                  padding: "20px 24px",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "rgba(30, 41, 59, 0.5)",
                  transition: "all 0.2s"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(56, 189, 248, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(30, 41, 59, 0.5)";
                }}
              >
                <h3 style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#e2e8f0",
                  margin: 0,
                  lineHeight: 1.4,
                  flex: 1,
                  textAlign: "left"
                }}>
                  {item.question}
                </h3>
                <div style={{
                  width: 24,
                  height: 24,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                  color: "#94a3b8",
                  transition: "transform 0.2s",
                  transform: expandedId === item.id ? "rotate(45deg)" : "rotate(0deg)"
                }}>
                  +
                </div>
              </div>

              {expandedId === item.id && (
                <div style={{
                  padding: "0 24px 24px",
                  color: "#cbd5e1",
                  lineHeight: 1.6,
                  fontSize: 14
                }}>
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QnA;