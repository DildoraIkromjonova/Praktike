const About = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f5f7",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>About Us</h1>
      <p
        style={{
          width: "700px",
          textAlign: "center",
          fontSize: "18px",
          color: "#666",
          lineHeight: "30px",
        }}
      >
        Welcome to Cyber Store. We offer the latest smartphones, laptops,
        smartwatches and accessories with high quality and affordable prices.
      </p>
    </div>
  );
};

export default About;