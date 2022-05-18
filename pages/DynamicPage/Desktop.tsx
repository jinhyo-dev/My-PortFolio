import React, {useRef} from 'react'
import classNames from "classnames/bind"
import styles from '../../styles/Style_PC.module.scss'
import {useRouter} from 'next/router'
import {useMediaQuery} from "react-responsive"
import Header from "../components/Header"
import Typewriter from "../components/Typewriter"
import AboutMe from '../components/AboutMe'

const cs = classNames.bind(styles)

const Desktop = () => {
  return (
    <div>
      <div className='container'>
        <div className={cs('pages')}>
          <br/><br/>
          <Header/>
          <br/>
          <Typewriter/>
        </div>

        <div className={cs('pages')} id='about'>
          <h1 className={cs('category')}>About Me</h1>
          <img
            src={'https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_linux-256.png'}
            alt="linux" width={100} height={100}/>
          <AboutMe/>
        </div>

        <div className={cs('pages')} id='work'>
          <h1 className={cs('category')}>My Project</h1>
        </div>

        <div className={cs('pages')} id='contact'>
          <h1 className={cs('category')}>Contact</h1>
        </div>
      </div>
    </div>
  )
}

export default Desktop