import React, {Suspense} from 'react'
import classNames from "classnames/bind"
import style from "../../styles/mobileStyle.module.scss"
import router from 'next/router'

const Typewriter = React.lazy(() => import('../components/Mobile/Typewriter'))
const ScrollDown = React.lazy(() => import('../components/Mobile/ScrollDown'))
const AboutMe = React.lazy(() => import('../components/Mobile/AboutMe'))
const MyProject = React.lazy(() => import('../components/Mobile/MyProject'))
const Contact = React.lazy(() => import('../components/Mobile/Contact'))

const cs = classNames.bind(style);

const Mobile = () => {
  return (
    <>
      <div className={cs("holster")}>
        <Suspense fallback={<div className="lds-dual-ring"/>}>
          <div className={cs("container")} dir="ltr">

            <div>
              <a href={'/'} className={cs('pageLogo')}>Jinhyo.Dev</a>
              <Typewriter/>
              <ScrollDown/>
            </div>

            <div>
              <AboutMe/>
            </div>

            <div>
              <MyProject/>
            </div>

            <div>
              <Contact/>
            </div>

          </div>
        </Suspense>
      </div>
    </>
  )
}
export default Mobile;