import React from 'react';
import styles from '../../styles/PcStyle.module.scss'
import classNames from "classnames/bind"
import {Typewriter} from '@chrisfieldsii/react-use-typewriter'
import {FaSchool, FaReact} from "react-icons/fa";

const cs = classNames.bind(styles)

const MyComponent = () => {
  return (

    <div className='aboutPage'>
      <div className={cs('aboutme')}>
        {''}
        <p>
          <Typewriter
            cursor
            cursorStyle='.'
            typeSpeed={30}
            words={['Hi! My name Kim JinHyo. I am a student developer. Born in South Korea 🇰🇷, Gyeong-ju, 2005.02.16 I am in Gyeongbuk Software HighSchool 🎓 (2021 - present). \n I am Learning Next.js, Java, Python, MySQL and more.']}
          />
        </p>
      </div>

      <div className={cs('wrapper', 'boxHover')}>

        <h1>Skills 💪</h1>
        <div className={cs('skill')}>
          <p>React.js</p>
          <div className={cs('skill-bar', 'react')}>
            <span className={cs('react-count')}>70%</span>
          </div>
        </div>

        <div className={cs("skill")}>
          <p>Python</p>
          <div className={cs('skill-bar', 'python')}>
            <span className={cs('python-count')}>60%</span>
          </div>
        </div>

        <div className={cs("skill")}>
          <p>JAVA</p>
          <div className={cs('skill-bar', 'java')}>
            <span className={cs('java-count')}>50%</span>
          </div>
        </div>

        <div className={cs("skill")}>
          <p>CPP</p>
          <div className={cs('skill-bar', 'cpp')}>
            <span className={cs('cpp-count')}>40%</span>
          </div>
        </div>

      </div>

        <div className={cs('certificate', 'boxHover')}>
          <h1>Certificate 🪪</h1>
          <p>Certificate of Data Processing <span>정보처리기능사</span></p>
          <p>Linux Master Level-2 <span>리눅스 마스터 2급</span></p>
          <p>Computer Literacy Certificate Level-2 <span>컴퓨터 활용능력 2급</span></p>
          <p>Network Manager Level-2 (written test) <span>네트워크 관리사 2급 (필기)</span></p>
        </div>

      <div>
        <h1>Awards</h1>
      </div>

    </div>
  )
}

export default MyComponent;
