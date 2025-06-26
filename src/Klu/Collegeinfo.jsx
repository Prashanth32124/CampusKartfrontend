import React, { useState } from 'react'
import '../CSS/Collegeinfo.css';
function Collegeinfo() {
  const [answer ,Setanswer]=useState();
   const [answer1 ,Setanswer1]=useState();
   const [answer2 ,Setanswer2]=useState();
   const [answer3 ,Setanswer3]=useState();
   const [answer4 ,Setanswer4]=useState();
    const [answer5 ,Setanswer5]=useState();
    const [answer6 ,Setanswer6]=useState();
    const [answer7 ,Setanswer7]=useState();
    const [answer8 ,Setanswer8]=useState();
  const [count , Setcount]=useState(0);
  const [count1 , Setcount1]=useState(0);
  const [count2 , Setcount2]=useState(0);
  const [count3 , Setcount3]=useState(0);
  const [count4 , Setcount4]=useState(0);
  const [count5 , Setcount5]=useState(0);
  const [count6 , Setcount6]=useState(0);
  const [count7 , Setcount7]=useState(0);
  const [count8 , Setcount8]=useState(0);
  const hello=()=>{
   Setanswer(`A: 
No, candidates cannot join directly at KL (Deemed to be University) Vijayawada. To join KL (Deemed to be University) 
Vijayawada, aspirants need to meet the eligibility criteria and follow the admission process. KLU, Vijayawada 
admission 2025 is entrance-based. The university also accepts national-level entrance exam scores such as GATE,
 MAT, NATA etc. for admission to specific courses. KL (Deemed to be University) Vijayawada 
offers 25 courses at the UG and PG levels in multiple streams like Engineering, Management, Science etc`);

    Setanswer1(`A: 
KL University (KLU) in Hyderabad has a seat intake of 20 for its four-year B.Tech program. The university also offers courses in B.Tech in Artificial Intelligence and Data Science, B.Tech in Electronics and Communication Engineering, and B.Tech in Computer Science and Engineering. 
The number of seats for these courses are 60, 120, and 360, respectively. 
To be eligible for admission to the B.Tech program, students must: 
 
Pass 10+2 or equivalent examination with at least 60% in aggregate and 60% in group subjects
Have Physics, Chemistry, and Mathematics as subjects in 10+2 and at least 60% marks from any recognised board
The selection criteria for admission to the B.Tech programme are KLEEE/ JEE Main/ JEE Advanced
`)

Setanswer2(`A: 
The admission process for the B.Tech programme at KL University Hyderabad involves the following steps:

Eligibility: Candidates must have completed 10+2 or equivalent with Physics, Chemistry, and Mathematics as subjects and at least 60% marks from any recognised board.

Entrance Exam: Admission to the B.Tech programs is based on performance in the KL Engineering Entrance Examination (KLEEE), JEE-Main, JEE-Advanced, or other state-level engineering entrance exams across India.

Merit in Sports/Cultural Activities: Candidates with merit in sports or cultural activities may also be considered for admission.

Application: Interested candidates need to apply for the program, either online through the university’s official website or offline by visiting the campus.

Admit Card: After successfully submitting the application, candidates will receive an admit card for the entrance exam.

Entrance Exam Dates: The KLEEE and other entrance exams are conducted on specified dates, which are announced by the university.

Results & Cutoff: Following the exams, the university will announce the results and the cutoff marks required for admission.

Interview: Some candidates may also be required to attend a personal interview as part of the selection process.

For the most current and detailed information, it’s best to refer to the official KL University Hyderabad website or contact their admissions office. `)

Setanswer3(`A: 
KL University - Online provides direct admission to students based on merit. Hence, apply for admission to various 
courses as soon as the admission window opens. Candidates willing to get admission must take part in the
 KL University - Online admission process before the last date of application. `)
Setanswer4(
  <table style={{ borderCollapse: 'collapse', width: '100%' }} border="1">
  <thead>
    <tr>
      <th>Particulars</th>
      <th>Placement Statistics (2024)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Highest Package (Domestic)</td>
      <td>INR 60 LPA</td>
    </tr>
    <tr>
      <td>Highest Package (International)</td>
      <td>INR 100 LPA</td>
    </tr>
    <tr>
      <td>Average Package</td>
      <td>INR 7.8 LPA</td>
    </tr>
    <tr>
      <td>Total Recruiters</td>
      <td>400+</td>
    </tr>
    <tr>
      <td>Internships</td>
      <td>5000+</td>
    </tr>
    <tr>
      <td>Students Placed</td>
      <td>4000+</td>
    </tr>
    <tr>
      <td>Placement Percentage</td>
      <td>85%</td>
    </tr>
  </tbody>
</table>
);
Setanswer5(`
  A: KLMAT exam is a speed based test of 90 minutes. In the exam, candidates have to solve about 75 questions from 
  English, GK, Quantitative Aptitude and Logical Reasoning sections. Every questions carries one mark. There is no
   negative marking. The difficulty level of KLMAT is easy and one can crack it within the given time limit.`)

Setanswer6(`
  A: 
The admission process for the Bachelor of Computer Applications (BCA) programme at KL University Hyderabad 

Eligibility: Candidates should have passed the 10+2 level of Senior School Certificate Examination with at least 55% marks.
Entrance Examination: Applicants must qualify in a written test conducted by the university
 `)

 Setanswer7(`
  A: 
KL University offers multiple MBA courses mainly through the Department of Management and KLBS, Vijayawada. 
The Department of Management offers MBA (General) course and MBA in Fintech, Public Policy and Public Policy &
 Management. Further, KLBS Vijayawada offers MBA (IEV), MBA (Regular) in Human Resource Management, Marketing 
 Management and Finance Management and MBA (Dual Specialisation) in MBA Finance + Business Analytics and MBA Marketing
  + Digital Marketing.`)

Setanswer8(
   <table border="1" style={{ borderCollapse: 'collapse', width: '100%' }}>
    <thead>
      <tr>
        <th>Particulars</th>
        <th>Placement Statistics (2024)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Highest Domestic Package</td>
        <td>INR 60 LPA</td>
      </tr>
      <tr>
        <td>Highest International Package</td>
        <td>INR 100 LPA</td>
      </tr>
    </tbody>
  </table>
)


Setcount(count+1);
Setcount1(count1+1);
Setcount2(count2+1);
Setcount3(count3+1);
Setcount4(count4+1);
Setcount5(count5+1);
Setcount6(count6+1);
Setcount7(count7+1);
Setcount8(count8+1);
  }
  let answerElement=" ";
  let answerElement1=" ";
  let answerElement2=" ";
  let answerElement3=" ";
  let answerElement4=" ";
  let answerElement5=" ";
  let answerElement6=" ";
  let answerElement7=" ";
  let answerElement8=" ";
 if(count%2==0){
  answerElement=<p id="answer">{answer}</p>
 }
 if(count1%2==0){
   answerElement1=<p id="answer">{answer1}</p>
 }
  if(count2%2==0){
   answerElement2=<p id="answer">{answer2}</p>
 }
 if(count3%2==0){
   answerElement3=<p id="answer">{answer3}</p>
 }
 if(count4%2==0){
    answerElement4 = <div id="answer">{answer4}</div>;
 }
 if(count5%2==0){
   answerElement5=<p id="answer">{answer5}</p>
 }
 if(count6%2==0){
   answerElement6=<p id="answer">{answer6}</p>
 }
 if(count7%2==0){
   answerElement7=<p id="answer">{answer7}</p>
 }
 if(count8%2==0){
   answerElement8=<div id="answer">{answer8}</div>
 }

  return (
    <div>
      <div id="questionsanswers">
        <p><strong>KL University, Guntur Highlights 2025</strong></p>
<p id="p01">Koneru Lakshmaiah Education Foundation (KLEF) was established in 1981 as KL College of Engineering.
It was upgraded to KL College of Engineering Autonomous in 2006 by UGC and was declared KL Deemed to be
University in 2009 by UGC. KLU is situated on a spacious 100-acre campus. The University is accredited
by the NAAC with an A++ grade in 2018. There are two campuses of the university, and they are:
Vijayawada Campus (Guntur), located in Andhra Pradesh and Hyderabad Campus (Aziz Nagar), located in Telangana.
There are 11 colleges affiliated with KL University, including KLEF College of Engineering, KLEF College of Law,
KLEF College of Pharmacy, etc. According to the NIRF reports for 2024, KLU ranked 22 among the top 100 Universities
and 40 in Overall. The university also encourages financially backwards students with special fee concessions and 
several scholarships to promote equal opportunities. In 2023, the highest pay package was 23 LPA as compared 
to 18.67 LPA in the year 2022. The university’s faculty is proficient with more than 700 professors holding 
a doctorate (PhD) in the Vijayawada Campus.<br></br>
Koneru Lakshmaiah University Vijayawada, offers more than 200 UG, PG, PhD, and Post-Doctoral courses across several
 streams of Management, Technology, Science, Accountancy, Philosophy, Law, Language, and others. The most 
 popular courses at KLU are BTech and MTech, among others. The University has collaborations with top companies
  such as Microsoft, IBM, CISCO, Orange Research Labs, and more. It also includes several clubs, committees, and 
  student associations to encourage extracurricular activities. Koneru Lakshmaiah University (KLU) also offers 
  distance education programmes through its Centre for Distance and Online Education.</p>
<h1>commonly aksed questions</h1>
        <h3>On Admissions</h3>
        <button onClick={hello}>Click to reveal the answer</button>
        <p id="p12">click to reveal all answers for the under given questions</p>
        
        <p>Q: Can I join KL (Deemed to be University) Vijayawada directly?</p>
         {answerElement}

        <p>Q: What is the seat intake for B.Tech at KL University Hyderabad?</p>
        {answerElement1}

        <p>Q: What is the admission process for B.Tech in KL University Hyderabad?</p>
        {answerElement2}

        <p>Can I get direct admission in KL University - Online?</p>
        {answerElement3}

        <p>Does KL University have good placements?</p>
        {answerElement4}

        <p>Q:What is the pattern for KLMAT exam?</p>
        {answerElement5}

        <p>Q:What is the admission process for BCA in KL University Hyderabad?</p>
        {answerElement6}

        <p>Q:What MBA specialisations does KL University offer?</p>
        {answerElement7}

        <p>Q:What is the highest package offered at KL University?</p>
        {answerElement8}


        
      </div>
    </div>
  )
}

export default Collegeinfo
