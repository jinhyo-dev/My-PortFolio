import React from 'react';
import Typewrites from '../components/Mobile/Typewriter';
import ScrollDown from '../components/Mobile/ScrollDown';
import classNames from "classnames/bind";
import style from "../../styles/mobileStyle.module.scss";
import AboutMe from '../components/Mobile/AboutMe';
import MyProject from '../components/Mobile/MyProject';

const cs = classNames.bind(style);

const Mobile = () => {
  return (
    <>
      <div className={cs("holster")}>
        <div className={cs("container")} dir="ltr">

          <div>
            <Typewrites/>
            <ScrollDown/>
          </div>

          <div>
            <AboutMe/>
          </div>

          <div>
            <MyProject/>
          </div>

          <div>4</div>
        </div>
      </div>
    </>
  );
}
export default Mobile;