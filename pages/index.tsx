import React, {useRef} from 'react'
import classNames from "classnames/bind"
import styles from '../styles/style.module.scss'
import {useRouter} from 'next/router'
import { useMediaQuery } from "react-responsive"
import Header from "./components/Header"
import Typewriter from "./components/Typewriter";
import ScrollToTop from "react-scroll-to-top";

const cs = classNames.bind(styles)

const Home = () => {
  const router = useRouter()

  const isPc = useMediaQuery ({
    query: "(min-width:800px)"
  });

  if(isPc){
    return (
      <div className='PC'>
        <Header/>
        <br/>
        <Typewriter />
        <ScrollToTop smooth color="#0ac6cc"/>

        <div className={cs('pages')} id='about'>
          <h1 className={cs('category')}>About Me</h1>
        </div>

        <div className={cs('pages')} id='work'>
        </div>

        <div className={cs('pages')} id='contact'>
        </div>

      </div>
    )
  } else {
    return (
      <div className='Mobile'>
        <div style={{ color: "wheat"}}>This is Mobile</div>
      </div>
    )
  }
}

export default Home