import React from 'react';
import styles from '../../styles/Style_PC.module.scss'
import classNames from "classnames/bind"
import {FaSchool, FaReact} from "react-icons/fa";

const cs = classNames.bind(styles)

const MyComponent = () => {
  return (
    <div>

      <div className={cs('informationBox', 'certificate')}>
        <div>Certificate</div>
        <ul>
          <li>정보처리기능사</li>
          <li>리눅스 마스터 2급</li>
          <li>컴퓨터활용능력 2급</li>
          <li>네트워크 관리사 2급</li>
        </ul>
      </div>

      <div className={cs('informationBox', 'language')}>
        <div>Learning</div>
        <span><img src={"https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react-256.png"} alt="React"
                   width={80} height={80} style={{marginBottom: '10px', marginLeft: '10px'}}/></span>

        <span><img src={"https://www.vectorlogo.zone/logos/python/python-vertical.svg"} alt="python" width={80}
                   height={100}/></span>

        <span><img src={"https://www.vectorlogo.zone/logos/java/java-vertical.svg"} alt="Typescript" width={70}
                   height={120} style={{marginBottom: '2px'}}/></span>

        <span><img src={'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg'} alt="Typescript"
                   width={80} height={80} style={{marginBottom: '10px'}}/></span>
      </div>

      <div className={cs('informationBox', 'aboutme')}>
        <div>About Me</div>
        <ul>
          <p>Born in Gyeong-ju, 2005.02.16</p>
          <li>경북소프트웨어고등학교 <FaSchool style={{color: '#187BCD'}}/> (2021 - )</li>
          <li>월성중학교 <FaSchool style={{color: '#028A0F'}}/> (2018 - 2020)</li>
        </ul>
      </div>

    </div>
  )
}

export default MyComponent;
