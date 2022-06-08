import React from 'react';
import classNames from "classnames/bind";
import style from "../../../styles/mobileComponents.module.scss";

const cs = classNames.bind(style);

const ScrollDown = () => {
  return (
    <div className={cs('scrollDown')}>
      <div>Scroll Down</div>
      <img src={"../../scroll.png"} className={cs('scrollDown-text')} alt="scroll"/>
    </div>
  )
}

export default ScrollDown;