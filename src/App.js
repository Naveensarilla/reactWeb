import React from 'react';
import {BrowserRouter as Router ,Routes,Route}from 'react-router-dom';
import  Footer  from '../src/components/UG/Footer';
import Landingpage from "../src/Landingpage";
import Home from './components/UG/Home';
import OTS from './components/UG/OTS';
import NEET from './components/UG/NEET';
import GATE_OTS from './components/PG/GATE_OTS';
import { GateOts } from './components/PG/GateOts';
import { PgHome } from './components/PG/PgHome';
import { MbaHome } from './components/MBA/MbaHome';
import { TERMsCONDITIONS } from './components/UG/TERMsCONDITIONS';
import { Privacypolicy } from './components/UG/Privacypolicy';
import { IITJEE_EXAM } from './components/UG/IITJEE_EXAM';
import OLVC from './components/UG/IITJEE_OLVC';
import {NeetExam} from './components/UG/NeetExam'
import { BitsatExam } from './components/UG/BitsatExam';
import { ViteeeExam } from './components/UG/ViteeeExam';
import { ApEamcetExam } from './components/UG/ApEamcetExam';
import { TsEamcetExam } from './components/UG/TsEamcetExam';
import { MhcetExam } from './components/UG/MhcetExam';
import { KcetExam } from './components/UG/KcetExam';
import { WbjeeExam } from './components/UG/WbjeeExam';
import { KeamExam } from './components/UG/KeamExam';
import { SrmJeeExam } from './components/UG/SrmJeeExam';

// ================ IMPORTED PG FILES =======================

import {PGGATE_Exam} from './components/PG/PGGATE_Exam.jsx'
import {PGIITJAMExam} from './components/PG/PGIITJAMExam.jsx'
import { JeeOts } from './components/UG/JeeOts';
import { NeetOtc } from './components/UG/NeetOtc';
import { NeetOLVC } from './components/UG/NeetOLVC';
import { BitsatOTC } from './components/UG/BitsatOTC';
import { BitsatOLVC } from './components/UG/BitsatOLVC';
// import { PgEseExam } from './components/PG/PgEseExam';
// import { EseExamPateern } from './components/PG/ExamPageComponent/EseExamPage/EseExamPateern';
import { Ese_ExamPage } from './components/PG/Ese_ExamPage';
import { Pg_Tifr_ExamPage } from './components/PG/Pg_Tifr_ExamPage';
import { Pg_Isro_ExamPage } from './components/PG/Pg_Isro_ExamPage';
import { Pg_BARC_Exam_Page } from './components/PG/Pg_BARC_Exam_Page';
import { Landing } from './Landing';













const App = () => {
  return (
  <Router>
 {/* <Home/> */}
    <Routes>
    <Route path='/' element={ < Landingpage/>} />
    <Route path='/home' element={ <Home/> }/>
   <Route path='/iitjee' element={<OTS/>}/>
   <Route path='/iitjee_olvc' element={<OLVC/>}/>

   
   <Route path='/' element={<GATE_OTS/>}/>
   <Route path='/' element={<GateOts/>}/>

   <Route path='/PgHome' element={<PgHome/>}/>
   {/* <Route path='/MbaHome' element={<MbaHome/>}/> */}

   <Route path='/MbaHome' element={<MbaHome/>}/>



   <Route path='/terms' element={<TERMsCONDITIONS/>}/>
   <Route path='/policy' element={<Privacypolicy/>}/>
   <Route path='/iitjeeExam' element={<IITJEE_EXAM/>}/>
   <Route path='/neetexam' element={<NeetExam/>}/>
   <Route path='/bitsatexam' element={<BitsatExam/>}/>
   <Route path='/viteeeexam' element={<ViteeeExam/>}/>
   <Route path='/apeamcetexam' element={<ApEamcetExam/>}/>
   <Route path='/tseamcetexam' element={<TsEamcetExam/>}/>
   <Route path='/mhcetexam' element={<MhcetExam/>}/>
   <Route path='/kcetexam' element={<KcetExam/>}/>
   <Route path='/wbjeeexam' element={<WbjeeExam/>}/>
   <Route path='/keamexam' element={<KeamExam/>}/>
   <Route path='/srmjeeexam' element={<SrmJeeExam/>}/>


{/* jee ots */}
<Route path='/iitjee_otc' element={<JeeOts/>}/>


{/* neet ots  olvc*/}
<Route path='/neetotc' element={<NeetOtc/>}/>
<Route path='/neet_olvc' element={<NeetOLVC/>}/>

{/* bitsat ots  olvc*/}
<Route path='/bitsatots' element={<BitsatOTC/>}/>
<Route path='/bitsat_olvc' element={<BitsatOLVC/>}/>

   {/* PG FILES */}

   <Route path='/pggateexam' element={<PGGATE_Exam/>}/>
   <Route path='/pgiitjamexam' element={<PGIITJAMExam/>}/>
   {/* <Route path='/pgEse_exam' element={<EseExamPateern/>}/> */}
   
   {/* pg exam pages */}
   <Route path='/pgEse_exam' element={<Ese_ExamPage/>}/>
    <Route path='/Ug_Tifr_ExamPage' element={<Pg_Tifr_ExamPage/>}/>
    <Route path='/isro_examPage' element={<Pg_Isro_ExamPage/>}/>
    <Route path='/barc_examPage' element={<Pg_BARC_Exam_Page/>}/>

    
    </Routes>
<Footer/>

{/* for example */}
{/* <Landing/> */}


  </Router>
  );
}

export default App;