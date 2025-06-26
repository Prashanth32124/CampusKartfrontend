import React from 'react';

function Admissions() {
  return (
    <div className="p-4">
      <h1>Welcome to the Admission Page</h1>

      {/* Table Section */}
      <h2 style={{ marginTop: '20px' }}>Courses, Eligibility & Selection Criteria</h2>
      <table border="1" cellPadding="10" cellSpacing="0" style={{ marginTop: '10px', borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Eligibility</th>
            <th>Selection Criteria</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>BTech</td>
            <td>Class 12 with a 60% aggregate with Physics, Chemistry and Mathematics (PCM)</td>
            <td>JEE Main, JEE Advanced, AP EAMCET, KLEEE, Uni-GAUGE</td>
          </tr>
          <tr>
            <td>BBA</td>
            <td>Class 12 with a 55% aggregate</td>
            <td>KLAT + Interview</td>
          </tr>
          <tr>
            <td>BCom</td>
            <td>Class 12 with a 55% aggregate</td>
            <td>KLAT + Interview</td>
          </tr>
          <tr>
            <td>MBA</td>
            <td>Graduation with a 55% aggregate</td>
            <td>KLMAT, MAT, CAT, Any State/National Level Management Entrance Tests</td>
          </tr>
          <tr>
            <td>BArch</td>
            <td>Class 12 above 60% aggregate</td>
            <td>KLEEE and NATA</td>
          </tr>
          <tr>
            <td>BPharma</td>
            <td>Class 12 with a 60% aggregate and 60% aggregate in PCM/PCB</td>
            <td>KLEEE</td>
          </tr>
          <tr>
            <td>MTech</td>
            <td>BTech with 55% aggregate</td>
            <td>GATE, AP PGECET</td>
          </tr>
        </tbody>
      </table>

      {/* Admission Process Section */}
      <h2 style={{ marginTop: '40px' }}>Steps for KL (Deemed to be University) Vijayawada Admission Process 2025</h2>
      <p>KL (Deemed to be University) Vijayawada admissions are primarily entrance-based. Candidates can register online for admission to their preferred course. The admission process at KLU, Vijayawada is as per the steps below:</p>

      <h3>STEP 1: KLU, Vijayawada Application Process 2025</h3>
      <p>
        The mode of application is online. Aspirants must apply online at the official website for UG, PG and PhD courses for admission to the various programme.
        Candidates can fill out the application form on the university's official website.
        The application fee for UG, PG and PhD courses are INR 1,000 and INR 1,100, respectively.
      </p>

      <h3>STEP 2: Selection</h3>
      <p>
        The university considers various entrance exam scores such as KLAT + Interview, KLMAT/MAT/CAT/Any State/National Level specific Management Entrance Tests, KLEEE and NATA etc. for admission to the BBA, MBA, BArch among courses.
        It also considers the candidates' academic performance for final selection.
      </p>

      <h3>STEP 3: Merit List & Admission Confirmation</h3>
      <p>
        After the release of KLU, Vijayawada cutoff, aspirants with scores equal or above the cutoff are offered seats.
        The university also releases a merit list based on the composite scores of the candidates for admission.
        Shortlisted aspirants need to come for document verification and pay the KL (Deemed to be University) Vijayawada fee to confirm their seats in the university.
      </p>
    </div>
  );
}

export default Admissions;
