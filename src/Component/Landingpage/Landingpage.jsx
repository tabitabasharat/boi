import React from 'react'
import Header from '../Othercomponents/Header'
import Mainpage from '../Othercomponents/Mainpage'
import Revolutionizing from '../Othercomponents/Revolutionizing'
import Footer from '../Othercomponents/Footer'
import GetinTouch from '../Othercomponents/GetinTouch'
import Canned from '../Othercomponents/Canned'
import Aboutus from '../Othercomponents/Aboutus'
import Oursolution from '../Othercomponents/Oursolution'
import Biofertilizer from '../Othercomponents/Biofertilizer '
import Education from '../Othercomponents/Education'
// import Revolutionizing from '../Othercomponents/Revolutionizing'

const Landingpage = () => {
  return (
    <>
    

    <div className='bg-img'>
    <Header/>
    <Mainpage/>
    </div>
    <div>  
    <Revolutionizing/> 
    <Oursolution/>
    <Biofertilizer/>
      <Canned/>
      <Education/>
      <GetinTouch/>
      <Aboutus/>
    <Footer/>
    </div>
    </>
  )
}

export default Landingpage
