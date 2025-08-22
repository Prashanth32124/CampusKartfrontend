import React, { useState } from 'react';
import './CSS/Predict.css';
import { useNavigate } from 'react-router-dom';
function Predict() {
  const [cgpa, setCgpa] = useState('');
  const [score, setScore] = useState('');
  const [branch, setBranch] = useState('');
  const [budget, setBudget] = useState('');
  const [location, setLocation] = useState('');
  const [answer, setAnswer] = useState('');
  const navigate=useNavigate();
  const handleSubmit = async () => {
    const prompt = `
A student has the following profile:
- CGPA/Percentage: ${cgpa}
- Entrance Exam Score: ${score}
- Interested Branch: ${branch}
- Budget: ₹${budget} Lakh(s)
- Preferred Location: ${location}

Suggest 3 best colleges in India that match these preferences and give a short explanation for each.
Don't add any markdown formatting give answer as plain text. 
`;

    try {
      const response = await fetch(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyDROGmAxuByRpac24Lpu74N-Tgil2mTjxw',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: prompt,
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await response.json();
      const result = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No answer received.';
      setAnswer(result);
    } catch (err) {
      console.error(err);
      setAnswer('Error contacting Gemini AI.');
    }
  };
  const handlemovepage=()=>{
  navigate('/Newhomepage');
  }
  return (
  <div className="predict-page">
    <div className="predict-card">
      <label id="c12">For Class 12th / Diploma Passed Out Only</label><br />

      <label className="l">CGPA/PERCENTAGE</label>
      <input
        className="i"
        type="number"
        step="any"
        onChange={(e) => setCgpa(e.target.value)}
        value={cgpa}
        placeholder="Enter CGPA of diploma or inter"
      />

      <label className="l">Entrance Exam Score</label>
      <input
        className="i"
        type="number"
        step="any"
        onChange={(e) => setScore(e.target.value)}
        value={score}
        placeholder="Enter entrance exam score"
      />

      <label className="l">Interested Branch</label>
      <input
        className="i"
        type="text"
        placeholder="Enter interested branch"
        onChange={(e) => setBranch(e.target.value)}
        value={branch}
      />

      <label className="l">Budget (in Lakhs ₹)</label>
      <input
        className="i"
        type="number"
        placeholder="Enter your budget in lakhs"
        onChange={(e) => setBudget(e.target.value)}
        value={budget}
      />

      <label className="l">Location Preference</label>
      <input
        className="i"
        type="text"
        list="colleges"
        onChange={(e) => setLocation(e.target.value)}
        value={location}
      />
      <datalist id="colleges">
        <option value="Delhi" />
        <option value="Mumbai" />
        <option value="Hyderabad" />
        <option value="Bangalore" />
        <option value="Chennai" />
      </datalist>

      <textarea
        id="texta"
        placeholder="AI prediction will appear here..."
        value={answer}
        readOnly
      ></textarea>

      <button id="sb" onClick={handleSubmit}>Submit</button>
      <button id="mc" onClick={handlemovepage}>Move to College Pages</button>
    </div>
  </div>
);
}

export default Predict;
