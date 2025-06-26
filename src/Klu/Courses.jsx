import React, { useState } from 'react';
import '../CSS/Courses.css'
function Courses() {
    const [fee,Setfeedetails]=useState();
    const feedetails=()=>{
    
    }
  return (
    <div>
         <h3>KL University Courses, Fees & Eligibility</h3>
      <p>KL University offers various UG, PG and PhD courses. Check out the following table
         to learn more about KL University courses, fees and eligibility:</p>
    <div className="courses-container">
      <span id="table">
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Courses</th>
            <th>Tuition Fees</th>
            <th>Eligibility</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>B.E. / B.Tech (20 courses)</td>
            <td>₹6 L - ₹12 L</td>
            <td>10+2: 45–60%<br />Exams: JEE Main, JEE Advanced <button Onclick={feedetails}>get details of the fee</button> </td>
          </tr>
          <tr>
            <td>B.Sc. (3 courses)</td>
            <td>₹5.1 L - ₹9.8 L</td>
            <td>10+2: 55%<br />Exams: CBSE 12th, ISC + 1 More</td>
          </tr>
          <tr>
            <td>B.A. (2 courses)</td>
            <td>₹4.8 L - ₹5.4 L</td>
            <td>10+2: 50%<br />Exams: CBSE 12th, ISC + 1 More</td>
          </tr>
          <tr>
            <td>M.E./M.Tech (22 courses)</td>
            <td>₹2.4 L - ₹3.4 L</td>
            <td>Graduation: 50%<br />Exams: GATE, AP PGECET</td>
          </tr>
          <tr>
            <td>M.Sc. (6 courses)</td>
            <td>₹2 L - ₹2.6 L</td>
            <td>Graduation: 50–55%</td>
          </tr>
          <tr>
            <td>MCA (4 courses)</td>
            <td>₹2.8 L - ₹5.4 L</td>
            <td>Graduation: 50%<br />Exams: APICET</td>
          </tr>
          <tr>
            <td>MBA/PGDM (5 courses)</td>
            <td>₹6.7 L - ₹11 L</td>
            <td>Graduation: 50%<br />Exams: APICET, MAT + 3 More</td>
          </tr>
          <tr>
            <td>BBA (6 courses)</td>
            <td>₹6.8 L - ₹7.3 L</td>
            <td>10+2: 55%<br />Exams: CBSE 12th, ISC + 1 More</td>
          </tr>
          <tr>
            <td>BBA LL.B. (1 course)</td>
            <td>₹9.3 L</td>
            <td>10+2: 45%<br />Exams: APLAWCET</td>
          </tr>
          <tr>
            <td>B.Com (4 courses)</td>
            <td>₹5.1 L</td>
            <td>10+2: 50%<br />Exams: CBSE 12th, ISC + 1 More</td>
          </tr>
          <tr>
            <td>Pharm.D (1 course)</td>
            <td>₹18 L</td>
            <td>– / –</td>
          </tr>
          <tr>
            <td>BCA (8 courses)</td>
            <td>₹6.8 L</td>
            <td>10+2: 55%<br />Exams: CBSE 12th, BIEAP + 1 More</td>
          </tr>
          <tr>
            <td>B.Arch (1 course)</td>
            <td>₹14 L</td>
            <td>10+2: 60%<br />Exams: NATA, KLEEE</td>
          </tr>
          <tr>
            <td>B.Pharma (1 course)</td>
            <td>₹9.8 L</td>
            <td>10+2: 60%<br />Exams: AP EAMCET, KLEEE</td>
          </tr>
          <tr>
            <td>M.Pharma (1 course)</td>
            <td>₹4.6 L</td>
            <td>Graduation: 55%</td>
          </tr>
          <tr>
            <td>LL.M. (1 course)</td>
            <td>– / –</td>
            <td>Exams: CLAT, AP PGLCET</td>
          </tr>
          <tr>
            <td>B.Com (Hons) (2 courses)</td>
            <td>– / –</td>
            <td>10+2: 55%<br />Exams: CBSE 12th, ISC + 1 More</td>
          </tr>
          <tr>
            <td>M.A. (2 courses)</td>
            <td>₹1.6 L</td>
            <td>Graduation: 55%</td>
          </tr>
          <tr>
            <td>LL.D. (1 course)</td>
            <td>– / –</td>
            <td>Exams: CLAT</td>
          </tr>
          <tr>
            <td>Ph.D. (14 courses)</td>
            <td>₹2.4 L</td>
            <td>10+2: 60%, Graduation: 60%</td>
          </tr>
        </tbody>
      </table>
    </span>
    <div id="subcontainer">
      
    </div>
    </div>
    </div>
  );
}

export default Courses;
