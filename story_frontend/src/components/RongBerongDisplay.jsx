import React, { useEffect, useState } from 'react';

const RongBerongDisplay = () => {
    const [resumes, setResumes] = useState([]);

    const fetchResumes = async () => {
        try {
            const res = await fetch('http://127.0.0.1:8000/api/resume-jibon/');
            const data = await res.json();
            setResumes(data);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        fetchResumes();
    }, []);

    const downloadPDF = (id) => {
        window.open(`http://127.0.0.1:8000/api/resume-jibon/${id}/pdf_bana_bhai/`, '_blank');
    };

    return (
        <div className="card" style={{ borderColor: 'red' }}>
           <h2>All Jibons (Resumes)</h2>
           <button onClick={fetchResumes}>Refresh</button>
           <ul>
               {resumes.map(r => (
                   <li key={r.id}>
                       <strong>{r.nam_dham}</strong>
                       <button onClick={() => downloadPDF(r.id)}>PDF Bana Bhai</button>
                   </li>
               ))}
           </ul>
        </div>
    );
};

export default RongBerongDisplay;
