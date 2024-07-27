import React, { useState } from 'react';

function Mcq({ setUser}) {
    const [username, setUsername] = useState('');

    const handleLogin = () => {
        setUser(username);
    };

    return (
        <div>
            <h2>Mcq</h2>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
            />
            <button onClick={handleLogin}>Submit</button>
        </div>
    );
}

export default Mcq;
