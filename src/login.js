﻿import React, { useState } from "react";
import backgroundImage from "./images/ArkaPlan.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://siparissistemisql.onrender.com/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.success) {
        alert(`✅ Giriş Başarılı! Hoş geldin ${data.user.AdSoyad}`);
        console.log("Kullanıcı Bilgisi:", data.user);
        // localStorage.setItem("kullanici", JSON.stringify(data.user));
        // navigate('/anasayfa'); // yönlendirme yapılabilir
      } else {
        alert("❌ Kullanıcı adı veya şifre hatalı");
      }
    } catch (error) {
      alert("❗ Sunucuya bağlanılamadı");
      console.error("Hata:", error);
    }
  };

  const containerStyle = {
    height: "100vh",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "35vw",
    paddingRight: "4vw",
  };

  const formStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    padding: "3rem",
    borderRadius: "16px",
    width: "550px",
    height: "600px",
    marginTop: "-200px",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "1.5rem",
    border: "1px solid rgba(255, 255, 255, 0.4)",
  };

  const inputStyle = {
    padding: "0.9rem 1rem",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
    width: "100%",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    padding: "0.9rem",
    fontSize: "1rem",
    width: "100%",
    backgroundColor: "#004aad",
    color: "white",
    fontWeight: "bold",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={handleLogin}>
        <h2>🚪 Giriş Yap</h2>
        <input
          type="text"
          placeholder="👤 Kullanıcı Adı"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="🔒 Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>➡️ Giriş</button>
      </form>
    </div>
  );
};

export default Login;
