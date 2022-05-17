import React, {useRef} from 'react'
import classNames from "classnames/bind"
import styles from '../styles/style.module.scss'
import {useRouter} from 'next/router'
import {useMediaQuery} from "react-responsive"
import Header from "./components/Header"
import Typewriter from "./components/Typewriter";
import AboutMe from './components/AboutMe'

const cs = classNames.bind(styles)

const Home = () => {
  const router = useRouter()

  const isPc = useMediaQuery({
    query: "(min-width:800px)"
  });

  if (isPc) {
    return (
      <div className='PC'>
        <div className='container'>
          <div className={cs('pages')}>
            <br/><br/>
            <Header/>
            <br/>
            <Typewriter/>
          </div>

          <div className={cs('pages')} id='about'>
            <h1 className={cs('category')}>About Me</h1>
            <AboutMe />
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
  } else {
    return (
      <div className='Mobile'>
        <div style={{color: "wheat"}}>This is Mobile</div>
      </div>
    )
  }
}

export default Home