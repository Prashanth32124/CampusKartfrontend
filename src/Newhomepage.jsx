import React from 'react'
import './CSS/Newhomepage.css';
import klImage from './images/kl.jpg';
import vitimage from './images/vit.png';
import srmimg from './images/srm.png';
import gitamimg from './images/gitam.png';
import gayatrividyaimg from './images/gayatrividya.png';
import rvrimg from './images/rvr.png';
import { useNavigate } from 'react-router-dom';
function Newhomepage() {
   const navigate = useNavigate();
   const handlelogout=()=>{
      navigate("/signup");
      alert("👤❌ You successfully logged out");
   }
  const handlesearch = () => {
    const searchValue = document.getElementById("search").value.toLowerCase().split(" ").join("");
    const cards = document.querySelectorAll(".clgcard");
    let anyVisible = false;
    for (let i = 0; i < cards.length; i++) {
      const clgname = cards[i].getAttribute("clgname").toLowerCase();
      if (clgname.includes(searchValue)) {
        /*cards[i].style.display = "block";*/
        cards[i].classList.remove("hidden");
        anyVisible = true;
      } else {
         cards[i].classList.add("hidden");
    }
  }
  };
  const handleImageClick=()=>{
    navigate('/Upload');
  }
  return (
    <div>
      <input id="search"
      type="text"
      placeholder="Search"
      onKeyDown={(e) => {
         if (e.key === "Enter") {
           handlesearch();
         }
       }}
      />
      <button id="search_button" onClick={handlesearch}>Search</button>
      <button onClick={handlelogout}>Logout</button>




      <div id="Lcontainer">
      <h3 id="h3">VERIFY THE COLLEGES AND FIND THE BEST BY YOUR INTREST AND JOIN</h3>
      <div className="clgcard" clgname="kluniversityguntur">
      <div id="subcontainer">
         <img id="img" src={klImage} alt="kl university guntur"  onClick={handleImageClick}/>
         
         <p><strong>KL University, Guntur: Courses, Fees, Ranking, Admission 2025, Placements, Cutoff</strong></p>
       </div>
       <div id="asubcontainer">
          <p>At the UG level, KL University offers BTech, BCA, BSc, BPharma, BBA LLB and various other courses to 
            students. At the PG level, KLU offers MTech, MCA, MPharm, and other courses are provided by KLU. Candidates
             wanting to get admission to various courses must apply online on the official website.
        Apart from these courses, the flagship courses at KLU are BTech, BCA, and MTech among many others. BTech
         graduates of KL University work in various industries, including software development, IT consulting, 
         and data science at top-tier firms.
      MTech programme at KL University, Andhra Pradesh is offered across various Engineering and Science disciplines,
       including Computer Science, Electronics and Communication Engineering, Electrical Engineering, Mechanical
        Engineering, Robotics and Automation, Chemical Engineering, Machine Design, and Biotechnology. Below mentioned
         are some of the most popular KL University courses, along with eligibility and selection criteria:</p>
         </div>





      </div>
      <div className="clgcard" clgname="vitap">
      <div id="subcontainer">
         <img id="img" src={vitimage} alt="vit ap" />
         <p><strong>VIT-AP University: Courses, Fees, Admissions 2025, Placements, Ranking</strong></p>
       </div>
       <div id="asubcontainer">
          <p>VIT Andhra Pradesh is one of the leading universities to deliver quality education to students
             and was established in 2017. It is spread over a huge campus of 100 acres. The university is also
              known as VIT Amaravati or VIT-AP, or VIT University Amravati. VIT Amaravati is approved by UGC and 
              has been accredited by NAAC. Further, the VIT group has a campus located at 3 other locations, i.e.
               Vellore, Chennai, and Bhopal. VIT-AP has received rankings in various categories by several important
                ranking bodies. Some of the ranking bodies are QS World University Ranking, Asia Ranking, 
                Young University, Shangai World University Ranking, and ARIIA 2019.
          The university has also been recognised as an Institute of national eminence. VIT University Amaravati 
          courses are offered to students at UG, PG, and PhD levels in various streams, including Engineering, 
          Management, Humanities, Science, etc. The university follows unique approaches to make classes and learning 
          more interactive and has introduced various methods to make classes more practical and fun. Some of them are 
          FFCS (Fully Flexible Credit System), PBL (Project Learning), Fully digitized academic portals, and 
          Hackathons/ Makeathons. Apart from this, the university has also collaborated with several international 
          universities such as Purdue University, University of Michigan, Arizona State University, State University 
          of New York, etc. Below are some key highlights around the VIT AP University:</p>
         </div>
      </div>





      <div className="clgcard" clgname="srm">
      <div id="subcontainer">
         <img id="img1" src={srmimg} alt="srm neerukonda" />
         <p><strong>SRM-mangalagiri University: Courses, Fees, Admissions 2025, Placements, Ranking</strong></p>
       </div>
       <div id="asubcontainer">
          <p>SRM University AP, Amaravati, also known as SRM University, Andhra Pradesh, is located in Mangalagiri, 
            Guntur district, Andhra Pradesh, near Neerukonda village. Established in 2017, it is a private university 
            offering undergraduate, postgraduate, and doctoral programs in engineering, liberal arts, and basic
             sciences. The university has two schools: the School of Engineering & Applied Sciences and the School of 
             Liberal Arts & Basic Sciences. It collaborates with prestigious institutions such as the University of 
             California Berkeley, MIT USA, and EFREI France.<br></br>
             <strong>Facilities:</strong> The university provides separate accommodation for boys and girls, a library, laboratories,
              computer labs, sports facilities, an auditorium, alumni association, gym, cafeteria, medical facilities,
               and guest rooms.<br></br>
            <strong>Scholarships:</strong> Merit scholarships, President Scholarship, Merit-cum-Means Scholarship, and others are 
            available to support deserving students.</p>
         </div>
      </div>



      <div className="clgcard" clgname="GITAM (Deemed to be University) – Visakhapatnam">
      <div id="subcontainer">
         <img id="img1" src={gitamimg} alt="GITAM (Deemed to be University) – Visakhapatnam" />
         <p><strong>GITAM University Vizag Campus: Courses, Admission 2025, Fees, Placements, Ranking</strong></p>
       </div>
       <div id="asubcontainer">
          <p>GITAM University Visakhapatnam Campus is ranked 39th by NIRF 2024 under the Architecture and Planning
             category, 37th under the Law category by NIRF 2024, and 48th by NIRF 2024 under the Pharmacy category.
              Gandhi Institute of Technology and Management, Visakhapatnam (GITAM) is a deemed university and was
               established in 1980. GITAM is recognised by the UGC and has various campuses which are located in 
               Visakhapatnam, Hyderabad, Bengaluru, and GIMSR campus. GITAM Visakhapatnam has been accredited with
                the NAAC with Grade A++. GITAM University Vizag provides undergraduate, postgraduate, and research
                 programmes under various schools of study.

         GITAM Vizag offers BTech and MBA as flagship courses to students. GITAM Vizag Campus students are placed 
         in top companies in top sectors such as Cognizant, Deloitte, Accenture, and others. Gandhi Institute of 
         Technology and Management has a state-of-the-art infrastructure. GITAM University Visakhapatnam has
          experienced faculty members.</p>
         </div>
      </div>



      <div className="clgcard" clgname="Gayatri Vidya Parishad College of Engineering (Autonomous) – Visakhapatnam">
      <div id="subcontainer">
         <img id="img1" src={gayatrividyaimg} alt="Gayatri Vidya Parishad College of Engineering (Autonomous) – Visakhapatnam" />
         <p><strong>Gayatri Vidya Parishad College of Engineering (Autonomous) – Visakhapatnam</strong></p>
       </div>
       <div id="asubcontainer">
          <p>Gayatri Vidya Parishad College of Engineering is a private institute. The institute was established in 
            1996 and is located in Visakhapatnam, Andhra Pradesh. It is a renowned educational institution and offers
             courses at UG and PG level. Some of the popular programmes include B.E. / B.Tech, M.E./M.Tech, M.Sc, MCA
              and M.Com. Gayatri Vidya Parishad College of Engineering offers a total of 36 courses to students in 12 
              specialisations such as Computer Science Engineering, Electrical Engineering, Electronics & Communication 
              Engineering, Information Technology, Mechanical Engineering, Robotics Engineering, Structural Engineering.
               The institute provides courses that are approved by AICTE. Further, the institute offers courses to 
               students in 4 streams such as Engineering, Science, IT & Software and Business & Management Studies.
                Gayatri Vidya Parishad College of Engineering courses are offered to students with a fee range of INR 
                40,000-4,14,800. The institute also offers an average median salary of INR 4,89,333. In addition to
                 this, the institute has a total seat intake of 1392 students.</p>
         </div>
      </div> 




      <div className="clgcard" clgname="RVR & JC College of Engineering – Guntur">
      <div id="subcontainer">
         <img id="img1" src={rvrimg} alt="RVR & JC College of Engineering – Guntur" />
         <p><strong>RVR & JC College of Engineering – Guntur</strong></p>
       </div>
       <div id="asubcontainer">
          <p>RVR and JC College of Engineering, established in 1985, is a private institute and is located in Guntur, 
            Andhra Pradesh. It is also known as RVR and JC and offers courses to the students at UG and PG level. 
            The institute offers a total of 25 courses to students including B.E. / B.Tech, M.E./M.Tech, MBA/PGDM 
            and MCA. RVR and JC courses are offered across 13 specialisations such as Electronics & Communication
             Engineering, Information Technology, Mechanical Engineering, Power Engineering, Signal Processing,
              Structural Engineering, VLSI Design. The institute has a total seat intake capacity of 1800 students
               and offers courses in Full Time mode. Further, the courses provided by the institute is approved by
                AICTE. RVR and JC courses are offered to students in various streams such as Engineering, IT &
                 Software and Business & Management Studies. RVR and JC College of Engineering courses are offered to
                  students with a fee range of INR 88,000-3,24,000. The institute also offers an average median salary 
                  of INR 3,75,091.</p>
         </div>
      </div> 





      </div>
    </div>
  )
}

export default Newhomepage
