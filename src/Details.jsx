import React, { useState } from 'react';

function Details() {
  const [showApplicationSteps, setShowApplicationSteps] = useState(false);
  const [showDocuments, setShowDocuments] = useState(false);

  return (
    <div style={{ padding: '20px' }}>
         <nav>
    <ul>
      <li><a href="Klinfo">Clickhere[to know more info]</a></li>
      <li><a href="details">What things have to take for admission</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="upload">Back to colleges page</a></li>
    </ul>
  </nav>
      <h2>KL University, Vijayawada Application Process 2025</h2>
      <p>
        KL (Deemed to be University) Vijayawada application process 2025 is conducted online for UG, PG and PhD courses. The application fee at this university ranges between INR 1,000 and INR 1,100. For better clarity, students are advised to visit the official website.
      </p>

      {/* Accordion for Application Steps */}
      <div style={{ marginTop: '20px' }}>
        <h3
          onClick={() => setShowApplicationSteps(!showApplicationSteps)}
          style={{ cursor: 'pointer', color: '#007bff' }}
        >
          {showApplicationSteps ? '▼' : '▶'} Step-by-step Application Process
        </h3>
        {showApplicationSteps && (
          <ol style={{ marginTop: '10px' }}>
            <li>
              Click on ‘Apply Now' tab on the official website of KLU, Vijayawada (
              <a href="https://www.kluniversity.in" target="_blank" rel="noopener noreferrer">
                https://www.kluniversity.in
              </a>
              ) and register as a new user by filling in details such as name, email ID, and password.
            </li>
            <li>Verify the verification email sent to the registered email address.</li>
            <li>Once verified, candidates will receive an email with the user ID and password.</li>
            <li>Log in to the admission portal and fill up the application form with all relevant details.</li>
            <li>Pay the application fee online using credit card, debit card, or net banking and submit the form.</li>
          </ol>
        )}
      </div>

      {/* Accordion for Documents */}
      <div style={{ marginTop: '20px' }}>
        <h3
          onClick={() => setShowDocuments(!showDocuments)}
          style={{ cursor: 'pointer', color: '#007bff' }}
        >
          {showDocuments ? '▼' : '▶'} Important Documents Required at the time of Admission
        </h3>
        {showDocuments && (
          <ul style={{ marginTop: '10px' }}>
            <li>Scanned Class 10, Class 12 and graduation mark sheet</li>
            <li>Leaving Certificate</li>
            <li>Aadhaar Card</li>
            <li>Passport-size photograph</li>
            <li>Signature</li>
          </ul>
        )}
        <p style={{ marginTop: '10px' }}>
          <strong>Note:</strong> The list of documents mentioned above are the general documents. For more details visit the official website.
        </p>
      </div>
    </div>
  );
}

export default Details;
