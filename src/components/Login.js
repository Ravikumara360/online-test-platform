import React, { useState } from 'react';

function Login({ setUser }) {
    const [username, setUsername] = useState('');

    const handleLogin = () => {
        setUser(username);
    };

    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;
