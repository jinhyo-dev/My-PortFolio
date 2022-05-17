import React from 'react'
import { Typewriter } from '@chrisfieldsii/react-use-typewriter'
import '@chrisfieldsii/react-use-typewriter/dist/index.css'
import styles from '../../styles/style.module.scss'
import classNames from "classnames/bind";

const cs = classNames.bind(styles)

const Typewriters = () => {
  return (
    <>
      <h1 className={cs('typewriter')}>
        Hello! I am Jinhyo Kim. <br/>
        {' '}
        <span>
          <Typewriter
            loop
            cursor
            cursorStyle='|'
            typeSpeed={90}
            deleteSpeed={70}
            delaySpeed={1500}
            words={['Student Developer', 'Web Developer', 'Always Learning!']}
          />
        </span>
      </h1>
    </>
  )
}

export default Typewriters