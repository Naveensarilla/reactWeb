import React from 'react'
import vision from './vision.png'
import mision from './target.png'
import './mbaAbout.css'
import logo from './logo _image.jpg'
export const MbaAbout = () => {
  return (
    <>
        <div className='container mba_about mba_Container'>
            <div className='img_content'>
                <div className='mbaImg'><img src={logo} alt="" /></div>
                <div className='mbaP'><p>eGRADTutor is an Edtech firm started with a vision to blend the boundaries in education and take best-in-class courses and teachers virtually to every corner of the country. Our courses are developed by the alumni of IITs/IISc with an intent to enhance the student's abilities to face some of the toughest exams of the country. Our offerings not just provide a deeper understanding of the subjects to the students, but they also make them exam ready.</p></div>
            </div>

            {/* vision mission */}
           <div className='v_mContant'>
                <div className='mba_mision'>
                        <div className='viImg'>
                            <img className='vmImg' src={vision} alt="" />
                        </div>
                        <div className='mba_vision_contant'>
                            <p>Our vision is to blend the boundaries in education and take best-in-class courses and teachers virtually to every corner of the country.</p>
                            <ul>
                                <p>Values:</p>
                                <li>We believe in constant innovation and development.</li>
                                <li>We act with integrity and humility.</li>
                                <li>We work with energy and curiosity.</li>
                                <li>We seek growth and equal opportunity.</li>
                            </ul>

                        </div>
                    </div>
                    <div className='mba_vision'>
                        <div className='viImg'>
                            <img className='vmImg' src={mision} alt="" />
                        </div>
                        <div>
                            <p>Our mission is to be the most accessible and affordable online education provider in the country.</p>
                            <p>We intend to build a virtual knowledge pool that strengthens the students and thereby strengthens the country in the journey towards growth and innovation.</p>
                        </div>
                    </div>
           </div>
        </div>
    </>
  )
}
