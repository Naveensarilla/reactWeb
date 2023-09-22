import React from 'react'

import { useState } from 'react'
import './GATECSS.css'
import table1 from '../PG/Images/iitjamtableimg1.png'
import tabimg from '../PG/Images/iitjamtableimg2.png'
import tabimg3 from '../PG/Images/iitjamtableimg3.png'
import logo from '../../logo2.jpeg' 

import './PGIITJAMExam.css'

// IITJAM exam pagesi
import IITJAMExamPattern from './ExamPageComponent/IITJAMExamPage/IITJAMExamPattern'
import IITJAMEligibility from './ExamPageComponent/IITJAMExamPage/IITJAMEligibility'
import IITJAMSyllabus from './ExamPageComponent/IITJAMExamPage/IITJAMSyllabus'
import IITJAMImportantDates from './ExamPageComponent/IITJAMExamPage/IITJAMImportantDates'
import { Link } from 'react-router-dom'

export const PGIITJAMExam = () => {
    const [selected, setSelected] = useState(null)
    const toggle2 = (i1) => {
        // return i
        if (selected === i1) {
            return setSelected(null)

        }
        setSelected(i1)
    }
  return (
    <div className='' style={{margin: '2rem'}}>
       {/*import logo from '../../logo2.jpeg' */}
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
                <h1>IITJAM</h1>
          
            </div>
             <div className='sdfsf'>
                <div className="accordion">
                        {sixtoten.map((item, i2) => (
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




const sixtoten = [
    {
        Qustion: "CONDUCTING INSTITUTE",
        answer: "IIT GUWAHATI",
        
    },
// Exam Pattern ==========================
    {
        Qustion: "EXAM PATTERN",
        answer: [<IITJAMExamPattern/>],   
    },
    // ELIGIBILITY ==========================================
    {
        Qustion: "ELIGIBILITY",
        answer: [<IITJAMEligibility/>],
       


       
    },
// syllabus ================================
    {
        Qustion: "SYLLABUS",
        answer: [<IITJAMSyllabus/>],
    },

    {
        Qustion: "IMPORTANT DATES",
        answer: [<IITJAMImportantDates/>],
       
    },
]

