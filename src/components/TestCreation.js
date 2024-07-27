import React, { useState } from 'react';

function TestCreation({ setTestId }) {
    const [testName, setTestName] = useState('');

    const createTest = () => {
        // In a real application, this would involve backend API calls
        setTestId(Date.now()); // Simulate test creation
    };

    return (
        <div>
            <h2>Create a Test</h2>
            <input
                type="text"
                value={testName}
                onChange={(e) => setTestName(e.target.value)}
                placeholder="Enter test name"
            />
            <button onClick={createTest}>Create Test</button>
        </div>
    );
}

export default TestCreation;

