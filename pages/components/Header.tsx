import React, {useState} from "react";
import styles from '../../styles/Style_PC.module.scss'
import classNames from "classnames/bind";
import scrollIntoView from 'scroll-into-view-if-needed'

const cs = classNames.bind(styles)

const Header = () => {
  const scrollToRef = (ref: string) => {
    const des = document.getElementById(ref)
    scrollIntoView(des!, {
      scrollMode: 'if-needed',
      block: 'start',
      inline: 'nearest',
      behavior: 'smooth'
    })
  }

  return (
    <div className={styles.titleBar}>
      <a href={'/'} className={styles.title}>Jinhyo.Dev</a>
      <div>
        <button className={cs('btn', 'btn3')} onClick={() => scrollToRef('contact')}>Contact</button>
        <button className={cs('btn')} onClick={() => scrollToRef('work')}>Work</button>
        <button className={cs('btn')} onClick={() => scrollToRef('about')}>About</button>
      </div>
    </div>
  );
}

export default Header;