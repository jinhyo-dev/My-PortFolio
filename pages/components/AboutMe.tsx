import React from 'react';
import styles from '../../styles/style.module.scss'
import classNames from "classnames/bind"
import {FaSchool, FaReact} from "react-icons/fa";

const cs = classNames.bind(styles)

const MyComponent = () => {
  return (
    <div>

      <div className={cs('informationBox', 'aboutme')}>
        <div>About Me</div>
        <ul>
          <p>Born in Gyeong-ju, 2005.02.16</p>
          <li>경북소프트웨어고등학교 <FaSchool style={{color: '#187BCD'}}/> (2021 - )</li>
          <li>월성중학교 <FaSchool style={{color: '#028A0F'}}/> (2018 - 2020)</li>
        </ul>
      </div>

      <div className={cs('informationBox', 'laguage')}>
        <div>Languages</div>

        <div>
          <img src={"https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react-256.png"} alt="React" width={80} height={80}/>
        </div>

        <div>
          <img src={"https://www.vectorlogo.zone/logos/python/python-vertical.svg"} alt="python" width={80} height={100}/>
        </div>

        <div>
          <img src={"https://www.vectorlogo.zone/logos/java/java-vertical.svg"} alt="Typescript" width={70} height={120}/>
        </div>
      </div>
    </div>
  )
    ;
}

export default MyComponent;
