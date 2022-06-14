import React, {useState, Component} from 'react'
import classNames from 'classnames/bind'
import styles from '../../../styles/PcStyle.module.scss'
import {FaInstagram} from 'react-icons/fa'
import {GrMail} from 'react-icons/gr'
import {BsGithub} from 'react-icons/bs'
import {HiOutlineCode} from 'react-icons/hi'
import {SiDiscord} from 'react-icons/si'

const cs = classNames.bind(styles)

const Contact = () => {
  const [instagramIsHover, setInstagramIsHover] = useState<boolean>(false)

  const pushToPage = (e: string) => {
    if (e == 'instagram') {
      window.open('https://www.instagram.com/jinhyo___/', '_blank')
    } else if (e == 'mail') {
      window.location.href = 'mailto:admin@jinhyo.dev'
    } else if (e == 'github') {
      window.open('https://github.com/jinhyo-dev', '_blank')
    } else if (e == 'solvedac') {
      window.open('https://solved.ac/profile/jinhyo0850', '_blank')
    }
  }

  console.log(instagramIsHover)

  return (
    <div>
      <h1 className='category'>Contact</h1>
      <h1 className={cs('click')}>Click !</h1>
      <div className={cs('hoverContainer')}>
      {instagramIsHover && <div className={cs('hoverEvent', 'instagramHover')}>jinhyo___</div>}
      </div>
      <div className={cs('contactContainer')}>
        <FaInstagram className={cs('instagram', 'icon')} size={'130'} onClick={() => pushToPage('instagram')}
                     onMouseEnter={() => setInstagramIsHover(true)} onMouseLeave={() => setInstagramIsHover(false)}/>
        <GrMail className={cs('mail', 'icon')} size={'140'} onClick={() => pushToPage('mail')}/>
        <BsGithub className={cs('github', 'icon')} size={'115'} onClick={() => pushToPage('github')}/>
        <HiOutlineCode className={cs('code', 'icon')} size={'140'} onClick={() => pushToPage('solvedac')}/>
        <SiDiscord className={cs('discord', 'icon')} size={'150'}/>
      </div>
    </div>
  )
}

export default Contact