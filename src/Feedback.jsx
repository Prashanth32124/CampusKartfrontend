import React, { useState } from 'react';

function Feedback() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleFeedbackChange = (e) => setFeedback(e.target.value);

  const handleSubmit = async() => {
    if (!name || !email || !feedback) {
      alert('Please fill in all fields.');
      return;
    }
    try {
      const res = await axios.post("https://rp2backend.vercel.app/feedback", {
        name,
        email,
        feedback
      });

      if (res.data.success) {
        alert('Thank you for your valuable feedback!');
        setName('');
        setEmail('');
        setFeedback('');
      } else {
        alert('Some error occurred.');
      }
    } catch (err) {
      console.error(err);
      alert('Server error. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Feedback</h2>

      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={handleNameChange} />
      </div>

      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
      </div>

      <div>
        <label>Feedback:</label>
        <textarea value={feedback} onChange={handleFeedbackChange} />
      </div>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Feedback;
