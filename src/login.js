import React, { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        // Burada giri� i�lemini ba�latabilirsin
        console.log("Giri� yap�ld�:", username, password);
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h2>Giri� Yap</h2>
                <input
                    type="text"
                    placeholder="Kullan�c� Ad�"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="�ifre"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Giri�</button>
            </form>
        </div>
    );
};

export default Login;
