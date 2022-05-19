import React from 'react';
import styles from '../../styles/Style_PC.module.scss'
import classNames from "classnames/bind"
import {Typewriter} from '@chrisfieldsii/react-use-typewriter'
import {FaSchool, FaReact} from "react-icons/fa";

const cs = classNames.bind(styles)

const MyComponent = () => {
  return (

    <>
    <div className={cs('aboutme')}>
      {''}
      <p>
        <Typewriter
          cursor
          cursorStyle='.'
          typeSpeed={30}
          words={['Hi! My name Kim JinHyo. I am a student developer. Born in South Korea, Gyeong-ju, 2005.02.16 I am in Gyeongbuk Software HighSchool (2021 - present). \n I am Learning Next.js, Java, Python, MySQL and more.']}
          />
      </p>
    </div>
      {/* <div className={cs('aboutme')}>
        <p>
          Hi! My name Kim JinHyo. I am a student developer. <br/>
          Born in South Korea <img src={'https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg'}
                                   width={25} height={18}/> , Gyeong-ju, 2005.02.16 <br/>
          <span>I'm in Gyeongbuk Software HighSchool <FaSchool style={{color: '#187BCD'}}/> (2021 - present)</span>
          <br/>
          I am Learning Next.js, Java, Python, MySQL and more. <br/>
        </p>
      </div>
      */}

      <div className={cs('wrapper')}>

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

      <div>
        <div className={cs('informationBox', 'certificate')}>
          <div className={cs('content')}>
            <h3>Certificate</h3>
            <p>정보처리기능사</p>
            <p>리눅스 마스터 2급</p>
            <p>컴퓨터활용능력 2급</p>
            <p>네트워크 관리사 2급</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default MyComponent;
