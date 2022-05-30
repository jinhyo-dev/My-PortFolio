import React, {useRef} from 'react'
import classNames from "classnames/bind"
import styles from '../../styles/PcStyle.module.scss'
import {useRouter} from 'next/router'
import {useMediaQuery} from "react-responsive"
import Header from "../components/Header"
import Typewriter from "../components/Typewriter"
import AboutMe from '../components/AboutMe'
import MyProject from '../components/MyProject'

const cs = classNames.bind(styles)

const Desktop = () => {

  return (
    <div style={{ marginLeft: '0', marginRight: '0'}}>
      <div className='leftGap'></div>

      <div className='middle'>
        <div className={cs('pages')}>
          <br/><br/>
          <Header/>
          <br/>
          <Typewriter/>
        </div>

        <div className={cs('pages')} id='about'>
          <h1 className={cs('category')}>About Me</h1>
          <AboutMe/>
        </div>

        <div className={cs('pages', 'aboutPage')} id='work'>
          <h1 className={cs('category')}>My Project</h1>
          <MyProject/>
        </div>

        <div className={cs('pages')} id='contact'>
          <h1 className={cs('category')}>Contact</h1>
        </div>
      </div>

      <div className='rightGap'></div>
    </div>
  )
}

export default Desktop