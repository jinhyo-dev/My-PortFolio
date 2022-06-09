import React from 'react';
import Typewrites from '../components/Mobile/Typewriter';
import ScrollDown from '../components/Mobile/ScrollDown';
import classNames from "classnames/bind";
import style from "../../styles/mobileStyle.module.scss";
import AboutMe from '../components/Mobile/AboutMe';

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

          <div>3</div>
          <div>4</div>
        </div>
      </div>
    </>
  );
}
export default Mobile;