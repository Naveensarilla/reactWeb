import React from 'react'
import Header from './Header'
import { useState } from 'react'
import './IITjee.css'
import table1 from '../UG/Images/keamimg1.png'
import tabimg from './Images/keamimg2.png'
import tabimg1 from './Images/keamimg3.png'
import tabimg5 from './Images/keamimg4.png'
import { Link } from 'react-router-dom'
import logo from './logo2.jpg'
import KEAMExamPattern from './UGExamPages/KEAMExamPage/KEAMExamPattern'
import KEAMEligibility from './UGExamPages/KEAMExamPage/KEAMEligibility'
import KEAMSyllabus from './UGExamPages/KEAMExamPage/KEAMSyllabus'
import KEAMImportantDates from './UGExamPages/KEAMExamPage/KEAMImportantDates'

export const KeamExam = () => {
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
       {/* import logo from './logo2.jpg' */}
       <nav>
             <div className="container nav__container">          
                <div className="pic">
                    <a href="/"><img src={logo} alt=""/></a>
                </div>    
                <ul className="nav__menu">
                    <li><Link to='/home'>Home</Link>   </li>
                    <li><a href="https://online-ug.egradtutor.in/" target='_blank' className="login1" >Login/User Registration </a></li>
                </ul>           
                 <button id="open-menu-btn"><i className="uil uil-bars"></i></button>
                 <button id="close-menu-btn"><i className="uil uil-multiply"></i></button>
             </div>   
           </nav> 
        <div className='FAQCONTENT' id='faq'>
            <div className="wrapper-3 container">
            
            <div className='' >
                <h1>KEAM EXAM</h1>
          
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
                                        <div className='imagessg'>{item.answer}  
                                        <img src={item.ansIMG} alt="" />
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
        answer: "Office of the Commissioner of Entrance Exams run by the Government of Kerala"
    },
// Exam Pattern ==========================
    {
        Qustion: "EXAM PATTERN",
        answer: [<KEAMExamPattern/>],
     
       
    },
    // ELIGIBILITY ==========================================
    {
        Qustion: "ELIGIBILITY",
        answer: [<KEAMEligibility/>],
       
    },
// syllabus ================================
    {
        Qustion: "SYLLABUS",
        answer: [<KEAMSyllabus/>],
        
    },

    {
        Qustion: "IMPORTANT DATES",
        answer: [<KEAMImportantDates/>],
    },
]







