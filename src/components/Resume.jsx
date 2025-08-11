// src/components/Resume.jsx
function Resume() {
  return (
    <section id="resume" className="resume-section" style={{
      textAlign: "center",
      padding: "3rem 1rem",
      marginTop: "2rem",
      borderRadius: "10px",
      background: "rgba(255,255,255,0.18)",
      boxShadow: "0 2px 14px rgba(76, 99, 255,0.10)"
    }}>
      <h2 style={{ fontSize: "2rem", color: "#6C63FF", marginBottom: "1.2rem" }}>Download My Resume</h2>
      <p style={{ color: "#43435c", marginBottom: "1.5rem" }}>
        Interested in my background? <br />Download my latest resume here:
      </p>
      <a 
        href="/Resume.pdf" 
        download 
        style={{
          display: "inline-block",
          background: "#6C63FF",
          color: "#fff",
          padding: "0.9rem 2.2rem",
          borderRadius: "27px",
          fontSize: "1.1rem",
          fontWeight: "bold",
          textDecoration: "none",
          boxShadow: "0 3px 14px rgba(108,99,255,0.13)",
          transition: "background 0.25s"
        }}
        onMouseOver={e => e.currentTarget.style.background = "#4c3cbe"}
        onMouseOut={e => e.currentTarget.style.background = "#6C63FF"}
      >
        ⬇️ Download Resume (PDF)
      </a>
    </section>
  );
}

export default Resume;
