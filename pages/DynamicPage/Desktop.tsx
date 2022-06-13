import React, {useRef} from 'react'
import classNames from "classnames/bind"
import {useRouter} from 'next/router'
import {useMediaQuery} from "react-responsive"
import Header from "../components/Desktop/Header"
import Typewriter from "../components/Desktop/Typewriter"
import AboutMe from '../components/Desktop/AboutMe'
import MyProject from '../components/Desktop/MyProject'
import Contact from '../components/Desktop/Contact'

const Desktop = () => {

  return (
    <div className='holster'>
      <div className='container' dir="ltr">

        <div>
          <Header/>
          <Typewriter/>
        </div>

        <div id='about'>
          <AboutMe/>
        </div>

        <div id='work'>
          <MyProject/>
        </div>

        <div id='contact'>
          <Contact/>
        </div>

      </div>
    </div>
  )
}

export default Desktop