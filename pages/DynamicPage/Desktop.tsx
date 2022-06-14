import React, {Suspense, useRef} from 'react'
import classNames from "classnames/bind"
import {useRouter} from 'next/router'
import {useMediaQuery} from "react-responsive"

const Header = React.lazy(() => import('../components/Desktop/Header'))
const Typewriter = React.lazy(() => import('../components/Desktop/Typewriter'))
const AboutMe = React.lazy(() => import('../components/Desktop/AboutMe'))
const MyProject = React.lazy(() => import('../components/Desktop/MyProject'))
const Contact = React.lazy(() => import('../components/Desktop/Contact'))

const Desktop = () => {

  return (
    <div className='holster'>
      <Suspense fallback={<div className="lds-dual-ring"/>}>
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
      </Suspense>
    </div>
  )
}

export default Desktop