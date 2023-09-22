import React from 'react'
// import Header from './Header'
import { useState } from 'react'
// import './IITjee.css'
import table1 from '../UG/Images/vittableimg1.png'
import tabimg from '../UG/Images/vittableimg2.png'
import tabimg1 from '../UG/Images/vittableimg3.png'
import tabimg5 from '../UG/Images/vittableimg4.png'
import { Link } from 'react-router-dom'
import logo from '../../logo2.jpeg'





//ESE Exam pages 
import { EseExamPateern } from './ExamPageComponent/EseExamPage/EseExamPateern'
import EseEligibility from './ExamPageComponent/EseExamPage/EseEligibility'
import { EseSyllabus } from './ExamPageComponent/EseExamPage/EseSyllabus'
import EseImportantDates from './ExamPageComponent/EseExamPage/EseImportantDates'









export const Ese_ExamPage = () => {
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
                <h1>ESE EXAM</h1>
          
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
                                        {/* <img src={item.ansIMG} alt="" /> */}
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
        answer: "Union Public Service Commission"
    },
// Exam Pattern ==========================
    {
        Qustion: "EXAM PATTERN",
        answer: [<EseExamPateern />],
        // ansIMG: [table1],
     
       
    },
    // ELIGIBILITY ==========================================
    {
        Qustion: "ELIGIBILITY",
        answer: [<EseEligibility/>],
       
    },
// syllabus ================================
    {
        Qustion: "SYLLABUS",
        answer: [<EseSyllabus/>],
        
    },

    {
        Qustion: "IMPORTANT DATES",
        answer: [<EseImportantDates/>],
    },
]

