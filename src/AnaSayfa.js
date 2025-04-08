import React from "react";

const AnaSayfa = () => {
  const containerStyle = {
    display: "flex",
    height: "100vh",
    width: "100vw",
    fontFamily: "Arial, sans-serif",
  };

  const sidebarStyle = {
    width: "250px",
    backgroundColor: "#004aad",
    color: "white",
    padding: "2rem 1rem",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    fontWeight: "bold",
    fontSize: "1.1rem",
    boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
  };

  const mainContentStyle = {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: "2rem",
  };

  const navItemStyle = {
    cursor: "pointer",
    padding: "0.5rem 1rem",
    borderRadius: "8px",
    transition: "background 0.3s",
  };

  const handleHover = (e, enter) => {
    e.target.style.backgroundColor = enter ? "rgba(255,255,255,0.2)" : "transparent";
  };

  return (
    <div style={containerStyle}>
      <div style={sidebarStyle}>
        <div
          style={navItemStyle}
          onMouseEnter={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}
        >
          📦 MÜŞTERİLER
        </div>
        <div
          style={navItemStyle}
          onMouseEnter={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}
        >
          ➕ TESLİM KARTI EKLE
        </div>
        <div
          style={navItemStyle}
          onMouseEnter={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}
        >
          📊 KULLANICI ANALİZLERİ
        </div>
      </div>

      <div style={mainContentStyle}>
        <h1>👋 Hoş Geldiniz</h1>
        <p>Burada sayfanın ana içeriği yer alacak.</p>
      </div>
    </div>
  );
};

export default AnaSayfa;
