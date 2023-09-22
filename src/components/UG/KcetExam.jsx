import React from 'react'
import Header from './Header'
import { useState } from 'react'
import './IITjee.css'
import table1 from '../UG/Images/kcetimg1.png'
import tabimg from './Images/kcetimg2.png'
import tabimg1 from './Images/kcetimg3.png'
import tabimg5 from './Images/kcetimg4.png'
import { Link } from 'react-router-dom'
import logo from './logo2.jpg'

// Kecet exam 
import { Kcet_ExamPattern } from './UGExamPages/kcet/Kcet_ExamPattern'
import { Kcet_Eligibility } from './UGExamPages/kcet/Kcet_Eligibility'
import { Kcet_impDates } from './UGExamPages/kcet/Kcet_impDates'

export const KcetExam = () => {
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
                <h1>KCET EXAM</h1>
          
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
        answer: "Karnataka Examinations Authority"
    },
// Exam Pattern ==========================
    {
        Qustion: "EXAM PATTERN",
        answer: [<Kcet_ExamPattern/>],
     
       
    },
    // ELIGIBILITY ==========================================
    {
        Qustion: "ELIGIBILITY",
        answer: [<Kcet_Eligibility/>],
       
    },
// syllabus ================================
    {
        Qustion: "SYLLABUS",
        answer: " • The syllabus of the examination is based on PUC 1st and 2nd described via the Department of Pre-University Education of Karnataka State. If you are applying for Pharmacy then it consisted of three different subjects as Physics, Biology, and Chemistry. If applying for Engineering, then the candidate needs to prepare for subjects such as Chemistry, Maths, and Physics.",
        
    },

    {
        Qustion: "IMPORTANT DATES",
        answer: [<Kcet_impDates/>],
    },
]








