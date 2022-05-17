import React from 'react';
import styles from '../../styles/style.module.scss'
import classNames from "classnames/bind"
import { FaSchool, FaReact } from "react-icons/fa";

const cs = classNames.bind(styles)

const MyComponent = () => {
  return (
    <div>
      <div className={cs('informationBox')}>
        <div>About Me</div>
        <p>
          경북소프트웨어고등학교 <FaSchool style={{color: '#722F37'}}/> 에 재학중인 김진효입니다. <br/>
          주력 언어는 React.js <FaReact style={{color: '#61DBFB'}}/> 를 사용중이며 알고리즘과 웹개발을 하며 실력을 쌓아가는 중입니다. <br/>
        </p>
      </div>
    </div>
  );
}

export default MyComponent;
