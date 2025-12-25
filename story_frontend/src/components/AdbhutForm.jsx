import React, { useState } from 'react';

const AdbhutForm = () => {
  const [formData, setFormData] = useState({
    nam_dham: '',
    contact_shongjog: '',
    skills_khomota: '',
    experience_oviggota: '[]',
    education_porashona: '[]'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting:", formData);
    // todo: fix fetch url hardcode
    try {
        const response = await fetch('http://127.0.0.1:8000/api/resume-jibon/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        const data = await response.json();
        alert("Resume Jibon Created! ID: " + data.id);
    } catch (error) {
        console.error("Error hua bhai:", error);
    }
  };

  return (
    <div className="card">
      <h2>Resume Banabo (Create)</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nam Dham (Name):</label>
          <input type="text" name="nam_dham" value={formData.nam_dham} onChange={handleChange} required />
        </div>
        <div>
          <label>Contact Shongjog:</label>
          <input type="text" name="contact_shongjog" value={formData.contact_shongjog} onChange={handleChange} />
        </div>
        <div>
          <label>Skills Khomota:</label>
          <textarea name="skills_khomota" value={formData.skills_khomota} onChange={handleChange}></textarea>
        </div>
        <button type="submit">Submit Koro</button>
      </form>
    </div>
  );
};

export default AdbhutForm;
