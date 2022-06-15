import {Typewriter} from '@chrisfieldsii/react-use-typewriter'
import '@chrisfieldsii/react-use-typewriter/dist/index.css'
import classNames from "classnames/bind";
import style from "../../../styles/mobileComponents.module.scss";

const cs = classNames.bind(style)

const AboutMe = () => {
  return (
    <>
      <h1 className={cs('AboutMe-title')}>About Me</h1>
      <div className={cs('aboutMe')}>
        <p>
          {''}
          <Typewriter
            cursor
            cursorStyle='.'
            typeSpeed={30}
            words={["Hi! My name Kim JinHyo. I am a Student-Developer. Born in South-Korea🇰🇷, Gyeong-ju, 2005.02.16 I'm in Gyeongbuk Software HighSchool 🎓 (2021~present). I'm Learning Next.js,Java,Python,MySQL and more."]}
          />
        </p>
      </div>

      <img src={'https://cdn.discordapp.com/attachments/950184728542203944/984358718021980180/Ver_3.png'}
           alt="skillbars" className={cs('skillbars')}/>

      <img src={'https://cdn.discordapp.com/attachments/950184728542203944/984375873077645372/e92761de06854907.png'}
           alt={'certificate'} className={cs('certificate')}/>
    </>
  )
}

export default AboutMe