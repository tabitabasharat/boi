import React from 'react'
import Header from '../Othercomponents/Header'
import Mainpage from '../Othercomponents/Mainpage'
import Revolutionizing from '../Othercomponents/Revolutionizing'
import Footer from '../Othercomponents/Footer'
import GetinTouch from '../Othercomponents/GetinTouch'
import Canned from '../Othercomponents/Canned'
import Aboutus from '../Othercomponents/Aboutus'

const Landingpage = () => {
  return (
    <>
    <div className='bg-img'>
    <Header/>
    <Mainpage/>
    </div>
    <div>   
      <Canned/>
      <Aboutus/>
      <GetinTouch/>
      {/* <Revolutionizing/> */}
    <Footer/>
    </div>
    </>
  )
}

export default Landingpage
