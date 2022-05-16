import React, {useRef} from 'react'
import classNames from "classnames/bind"
import styles from '../styles/Home.module.scss'
import {useRouter} from 'next/router'
import { useMediaQuery } from "react-responsive"
import Header from "./components/Header"
import Typewtiter from "./components/Typewriter";

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
        <Typewtiter />
      </div>
    )
  } else {
    return (
      <div className='Mobile'>
      </div>
    )
  }
}

export default Home