import React from 'react'
import {Link} from "react-router-dom"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import './home.css'
import Header from './Header'
import './header.css'
import { About } from './About'
import Contactus  from './Contactus'
import Faq from  './Faq'
import { Footer } from './Footer'
import Course from './Course'
import { ExploreExams } from './ExploreExams'
import imh1 from './Banners/banner1.png'
import imh2 from './Banners/banner2.png'
import imh3 from './Banners/banner3.png'
import imh4 from './Banners/banner4.png'
import imh5 from './Banners/banner5.png'
import Ug_home_carousel from './Ug_Carousel/Ug_home_carousel'

const Home = () => {
  return (
<>
<Header/>
   
   <div>
   <marquee  direction="left" scrollamount="5" onmouseover="this.stop()" onmouseleave="this.start()">
                    <div>All tests will be LIVE according to the detailed schedule given. Do not
                        confuse to the Total No. of tests in the test cards while buying as they show the number of
                        tests LIVE at the moment..</div>
</marquee>
   </div>


<div id='home'></div>

    <div  className='corouselContent' style={{padding:'1rem'}}>
    <Carousel  className='banner' autoPlay infiniteLoop showIndicators={false} showThumbs={false} showArrows={false} showStatus={false} interval={2000} >
        <div className='banner1 container'>
            <div className='banner1-info'>
                <div className='banner1-info-heading'>
                    <h1>Welcome eGRADTutor</h1>
                    <p>eGRADTutor is an Edtech firm started with a vision to blend the boundaries in education and take
                        best-in-class courses and teachers virtually to every corner of the country. Our courses are
                        developed by the alumni of IIT/IISc with an intent to enhance the student's abilities to face some
                        of the toughest exams of the country. Our offerings not just provide a deeper understanding of the
                        subjects to the students, but they also make them exam ready. </p>
                </div>
                <div className='online-btn'>
                    <button>
                        <Link to={"/"}>Online Live classes</Link>
                    </button>
    
                    <button>
                        <Link to={"/"}>Online Live video classes</Link>
                    </button>
                </div>
    
            </div>
    
        </div>
    
    
       <div> <img src={imh1} alt="" /></div>
       <div> <img src={imh2} alt="" /></div>
       <div> <img src={imh3} alt="" /></div>
       <div> <img src={imh4} alt="" /></div>

       <div> <img src={imh5} alt="" /></div>
    
    </Carousel>

{/* <Ug_home_carousel/> */}

    
    </div>


    <About/>
    
    <ExploreExams/>
    <Course/>


<Contactus/>

<Faq/>
<Carousel>


</Carousel>

    </>
  )
}

export default Home