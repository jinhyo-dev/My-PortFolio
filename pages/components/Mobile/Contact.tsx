import React from 'react';
import classNames from 'classnames/bind';
import style from '../../../styles/mobileComponents.module.scss';
import { FaInstagram } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import { BsGithub } from 'react-icons/bs'
import { HiOutlineCode } from 'react-icons/hi'
import { SiDiscord } from 'react-icons/si'

const cs = classNames.bind(style);

const Contact = () => {

  const pushToPage = (e: string) => {
    if (e == 'instagram') {
      window.location.href = 'https://www.instagram.com/jinhyo___/'
    } else if (e == 'mail') {
      window.location.href = 'mailto:admin@jinhyo.dev'
    } else if (e == 'github') {
      window.location.href = 'https://github.com/jinhyo-dev'
    } else if (e == 'solvedac') {
      window.location.href = 'https://solved.ac/profile/jinhyo0850'
    }
  }

  return (
    <div className={cs('contactContainer')}>

      <div className={cs('contacts', 'instagramBox')} onClick={() => pushToPage('instagram')}>
        <div className={cs('instaIcon')}>
          <FaInstagram size={'70'} className={cs('insins')}/>
        </div>
        <div className={cs('instagram')}>Instagram<br/><div>jinhyo___</div></div>
      </div>

      <div className={cs('contacts', 'bottomBox')} onClick={() => pushToPage('mail')}>
        <div className={cs('instaIcon')}>
          <GrMail size={'70'} color={'#34A853'}/>
        </div>
        <div className={cs('instagram')}>Mail<br/><div>admin@jinhyo.dev</div></div>
      </div>

      <div className={cs('contacts', 'bottomBox')} onClick={() => pushToPage('github')}>
        <div className={cs('instaIcon')}>
          <BsGithub size={'65'} color={'#000'}/>
        </div>
        <div className={cs('instagram')}>github<br/><div>jinhyo-dev</div></div>
      </div>

      <div className={cs('contacts', 'bottomBox')} onClick={() => pushToPage('solvedac')}>
        <div className={cs('instaIcon')}>
          <HiOutlineCode size={'70'} color={'#0080d2'}/>
        </div>
        <div className={cs('instagram')}>solved.ac<br/><div>jinhyo0850</div></div>
      </div>

      <div className={cs('contacts', 'bottomBox')} onClick={() => pushToPage('solvedac')}>
        <div className={cs('instaIcon')}>
          <SiDiscord size={'70'} color={'#404EED'}/>
        </div>
        <div className={cs('instagram')}>discord<br/><div>Jinhyo#4116</div></div>
      </div>

    </div>
  )
}

export default Contact