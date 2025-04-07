import React, { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        // Burada giriþ iþlemini baþlatabilirsin
        console.log("Giriþ yapýldý:", username, password);
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h2>Giriþ Yap</h2>
                <input
                    type="text"
                    placeholder="Kullanýcý Adý"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Þifre"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Giriþ</button>
            </form>
        </div>
    );
};

export default Login;
