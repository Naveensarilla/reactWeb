import React from 'react'
import Header from './Header'
import { useState } from 'react'
import './IITjee.css'
import table1 from '../UG/Images/bitsattableimg1.png'
import tabimg from './Images/bitsattableimg2.png'
import tabimg1 from './Images/bitsattableimg3.png'
import tabimg5 from './Images/bitsattableimg4.png'
import { Link } from 'react-router-dom'
import logo from './logo2.jpg'


// bitsat exam pages
import { Bitsat_ExamPattern } from './UGExamPages/bitsat/Bitsat_ExamPattern'
import { Bitsat_eligibility } from './UGExamPages/bitsat/Bitsat_eligibility'
import { Bistat_Syllabus } from './UGExamPages/bitsat/Bistat_Syllabus'
import { Bitsat_ImpDates } from './UGExamPages/bitsat/Bitsat_ImpDates'
import Bitsat_Banner from './Ug_Carousel/BITSAT/Bitsat_Banner'


export const BitsatExam = () => {
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
           <div className='jee_Carousal' style={{paddingBottom:'1rem'}}>
                <Bitsat_Banner/>
            </div>
        <div className='FAQCONTENT' id='faq'>
            <div className="wrapper-3 container">
            
            <div className='' >
                <h1>BITSAT</h1>
          
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
        answer: "Birla Institute of Technology and Science"
    },
// Exam Pattern ==========================
    {
        Qustion: "EXAM PATTERN",
        answer: [<Bitsat_ExamPattern/>],
        
     
       
    },
    // ELIGIBILITY ==========================================
    {
        Qustion: "ELIGIBILITY",
        answer: [<Bitsat_eligibility/>],
       
    },
// syllabus ================================
    {
        Qustion: "SYLLABUS",
        answer: [<Bistat_Syllabus/>],
        
    },

    {
        Qustion: "IMPORTANT DATES",
        answer: [<Bitsat_ImpDates/>],
    },
]



