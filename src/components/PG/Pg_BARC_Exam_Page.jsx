import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../logo2.jpeg'
import BARCExamPattern from './ExamPageComponent/BARCExamPage/BARCExamPattern'
import BARCEligibility from './ExamPageComponent/BARCExamPage/BARCEligibility'
import BARCSyllabus from './ExamPageComponent/BARCExamPage/BARCSyllabus'
import BARCImportantDates from './ExamPageComponent/BARCExamPage/BARCImportantDates'

export const Pg_BARC_Exam_Page = () => {
    const [selected, setSelected] = useState(null)
    const toggle2 = (i1) => {
        // return i
        if (selected === i1) {
            return setSelected(null)

        }
        setSelected(i1)
    }
  return (
    <div>
        {/* import logo from '../../logo2.jpeg' */}
    <nav>
          <div className="container nav__container">          
             <div className="pic">
                 <a href="/"><img src={logo} alt=""/></a>
             </div>    
             <ul className="nav__menu">
                 <li><Link to='/PgHome'>Home</Link>   </li>
                 <li><a href="https://online-ug.egradtutor.in/" target='_blank' className="login1" >Login/User Registration </a></li>
             </ul>           
              <button id="open-menu-btn"><i className="uil uil-bars"></i></button>
              <button id="close-menu-btn"><i className="uil uil-multiply"></i></button>
          </div>   
        </nav> 
     <div className='FAQCONTENT' id='faq'>
         <div className="wrapper-3 container">
         
         <div className='' >
             <h1>ISRO EXAM PAGE</h1>
       
         </div>
          <div className='sdfsf'>
             <div className="accordion">
                     {barc.map((item, i2) => (
                         <div className="item2">
                             <div className="title" onClick={() => toggle2(i2)}>
                                 <h2>{item.Qustion}</h2>
                                 <span>{selected === i2 ? '-' : '+'}</span>
                             </div>
                             <div className={selected === i2 ? 'content-show2' : 'content2'}>
                                 <div>
                                     {/* <div className='imagessg'> */}
                                     <div className={item.class}>
                                         <div>
                                         <ul className={item.clName}>
                                             <div className='exSpace'>
                                             <li><b>{item.answer}</b></li><br />
                                            
                                             </div>
                                         </ul>
                                         </div>
                                         {/* <div className='imgSection'>
                                         <img src={item.ansIMG} alt="" />
                                         </div> */}
                                     
                                     </div>
                                                                     
                                 
                                 </div>
                             </div>
                         </div>
                     ))}

                 </div>
          </div>

         </div>
     </div>
    </div>
  )
}

const barc = [
    {
        Qustion: "CONDUCTING INSTITUTE",
        answer: "Bhabha Atomic Research Centre",
        
    },
// Exam Pattern ==========================
    {
        Qustion: "EXAM PATTERN",
        answer: [<BARCExamPattern/>],   
    },
    // ELIGIBILITY ==========================================
    {
        Qustion: "ELIGIBILITY",
        answer: [<BARCEligibility/>],
       


       
    },
// syllabus ================================
    {
        Qustion: "SYLLABUS",
        answer: [<BARCSyllabus/>],
    },

    {
        Qustion: "IMPORTANT DATES",
        answer: [<BARCImportantDates/>],
       
    },
]
