import React from "react";
import styles from '../../styles/Home.module.scss'
import classNames from "classnames/bind";

const cs = classNames.bind(styles)

const Header = () => {
  return (
    <div className={styles.titleBar}>
      <a href={'/'} className={styles.title}>Jinhyo.Dev</a>
      <div>
        <button className={cs('btn', 'btn3')}>Contact</button>
        <button className={cs('btn')}>Work</button>
        <button className={cs('btn')}>About</button>
      </div>
    </div>
  );
}

export default Header;