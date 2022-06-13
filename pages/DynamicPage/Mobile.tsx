import React from 'react';
import Typewrites from '../components/Mobile/Typewriter';
import ScrollDown from '../components/Mobile/ScrollDown';
import classNames from "classnames/bind";
import style from "../../styles/mobileStyle.module.scss";
import AboutMe from '../components/Mobile/AboutMe';
import MyProject from '../components/Mobile/MyProject';
import Contact from '../components/Mobile/Contact';
import router from 'next/router'

const cs = classNames.bind(style);

const Mobile = () => {
  return (
    <>
      <div className={cs("holster")}>
        <div className={cs("container")} dir="ltr">

          <div>
            <h1 className={cs('pageLogo')} onClick={() => router.push('/')}>Jinhyo.Dev</h1>
            <Typewrites/>
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
      </div>
    </>
  );
}
export default Mobile;