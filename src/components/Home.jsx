function Home() {
  return (
    <section
      id="home"
      style={{
        minHeight: "300px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "#4a90e2" // 🔹 This changes ALL text inside section
      }}
    >
      <h2 style={{ fontSize: "2.3rem", color: "#a647ff" }}>Hi, I&apos;m Narendra Rawat</h2>
      <p style={{ maxWidth: "500px", margin: "auto", color: "#000500" }}>
        A passionate web developer who loves building beautiful and functional web experiences.
      </p>
    </section>
  );
}

export default Home;
