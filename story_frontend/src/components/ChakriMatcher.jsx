import React, { useState } from 'react';

const ChakriMatcher = () => {
    const [score, setScore] = useState(null);

    const checkATS = async () => {
        // Mock check
        const response = await fetch('http://127.0.0.1:8000/api/chakri-bakri/ats_check_korbo/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ description: "Need a Ninja Developer" })
        });
        const data = await response.json();
        setScore(data);
    };

    return (
        <div className="card" style={{ backgroundColor: 'orange' }}>
            <h2>ATS Check Korbo</h2>
            <button onClick={checkATS}>Check Score</button>
            {score && (
                <div>
                    <h3>Score Koto? {score.score_koto}</h3>
                    <p>Missing: {score.missing_keywords.join(', ')}</p>
                </div>
            )}
        </div>
    );
};

export default ChakriMatcher;
