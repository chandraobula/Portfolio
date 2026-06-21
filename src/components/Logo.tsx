export default function Logo() {
  return (
    <div
      style={{
        position: "fixed",
        top: 32,
        left: "clamp(20px,5vw,80px)",
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        gap: 8,
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-playfair), Georgia, serif",
          fontStyle: "italic",
          fontSize: 20,
          fontWeight: 400,
          color: "#2B1D0E",
          letterSpacing: "-0.01em",
        }}
      >
        M
        <span style={{ color: "#C4622D" }}>.</span>
        A
      </span>
    </div>
  );
}
