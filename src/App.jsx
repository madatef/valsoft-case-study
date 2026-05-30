import { useState } from 'react'
import Main from './components/Main'
import DeepDive from './components/DeepDive'
import Reference from './components/Reference'
import QnA from './components/QnA'


function App() {
  const [page, setPage] = useState('main')

  return (
    <div style={{ minHeight: "100vh", background: "#080c14", fontFamily: "'Sora', sans-serif", color: "#e2e8f0" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=DM+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0f172a; }
        ::-webkit-scrollbar-thumb { background: #334155; border-radius: 2px; }
      `}</style>

      {/* Navbar */}
      <div style={{
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "20px 48px",
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
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{
              width: 7, height: 7, borderRadius: "50%", background: "#0EA5E9",
              boxShadow: "0 0 10px #0EA5E9",
            }} />
            <span style={{ fontSize: 10, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: 2 }}>
              Valsoft AI Venture Builder
            </span>
          </div>
          <h1 style={{ fontSize: 18, fontWeight: 800, color: "#f1f5f9", marginTop: 3 }}>
            DockMaster · AI Feature Proposals
          </h1>
        </div>

        {/* Navigation Buttons */}
        <div style={{ display: "flex", gap: 8 }}>
          <button
            onClick={() => setPage('main')}
            style={{
              background: page === 'main' ? "rgba(14, 165, 233, 0.15)" : "rgba(255,255,255,0.03)",
              border: `1px solid ${page === 'main' ? "rgba(14, 165, 233, 0.4)" : "rgba(255,255,255,0.07)"}`,
              borderRadius: 8,
              padding: "8px 16px",
              cursor: "pointer",
              fontSize: 12,
              fontWeight: 700,
              color: page === 'main' ? "#0EA5E9" : "#475569",
              transition: "all 0.2s",
            }}
          >
            📊 Main View
          </button>
          <button
            onClick={() => setPage('deepdive')}
            style={{
              background: page === 'deepdive' ? "rgba(139, 92, 246, 0.15)" : "rgba(255,255,255,0.03)",
              border: `1px solid ${page === 'deepdive' ? "rgba(139, 92, 246, 0.4)" : "rgba(255,255,255,0.07)"}`,
              borderRadius: 8,
              padding: "8px 16px",
              cursor: "pointer",
              fontSize: 12,
              fontWeight: 700,
              color: page === 'deepdive' ? "#8B5CF6" : "#475569",
              transition: "all 0.2s",
            }}
          >
            🔍 Deep Dive
          </button>
          <button
            onClick={() => setPage('reference')}
            style={{
              background: page === 'reference' ? "rgba(244, 63, 94, 0.15)" : "rgba(255,255,255,0.03)",
              border: `1px solid ${page === 'reference' ? "rgba(244, 63, 94, 0.4)" : "rgba(255,255,255,0.07)"}`,
              borderRadius: 8,
              padding: "8px 16px",
              cursor: "pointer",
              fontSize: 12,
              fontWeight: 700,
              color: page === 'reference' ? "#F43F5E" : "#475569",
              transition: "all 0.2s",
            }}
          >
            📚 References
          </button>
          <button
            onClick={() => setPage('qna')}
            style={{
              background: page === 'qna' ? "rgba(245, 158, 11, 0.15)" : "rgba(255,255,255,0.03)",
              border: `1px solid ${page === 'qna' ? "rgba(245, 158, 11, 0.4)" : "rgba(255,255,255,0.07)"}`,
              borderRadius: 8,
              padding: "8px 16px",
              cursor: "pointer",
              fontSize: 12,
              fontWeight: 700,
              color: page === 'qna' ? "#F59E0B" : "#475569",
              transition: "all 0.2s",
              display: none,
            }}
          >
            ❓ Q&A
          </button>
        </div>
      </div>

      {/* Page Content */}
      <div style={{ height: "calc(100vh - 73px)" }}>
        {page === 'main' ? <Main /> :
         page === 'deepdive' ? <DeepDive /> :
         page === 'reference' ? <Reference /> :
         <QnA />}
      </div>
    </div>
  )
}

export default App
