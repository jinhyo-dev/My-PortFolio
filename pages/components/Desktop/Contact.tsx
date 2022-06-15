import React, {useState, useRef} from 'react'
import classNames from 'classnames/bind'
import styles from '../../../styles/PcStyle.module.scss'
import {FaInstagram} from 'react-icons/fa'
import {GrMail} from 'react-icons/gr'
import {BsGithub} from 'react-icons/bs'
import {HiOutlineCode} from 'react-icons/hi'
import {SiDiscord} from 'react-icons/si'
import {ToastContainer, toast} from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';

const cs = classNames.bind(styles)

const Contact = () => {

  const notify = () => {
    toast.success('Copied!', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    })
  }

  const [instagramIsHover, setInstagramIsHover] = useState<boolean>(false)
  const [mailIsHover, setmailIsHover] = useState<boolean>(false)
  const [githubIsHover, setgithubIsHover] = useState<boolean>(false)
  const [codeIsHover, setCodeIsHover] = useState<boolean>(false)
  const [discordIsHover, setDiscordIsHover] = useState<boolean>(false)

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

  const handleCopy = (text: string) => {

    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          notify()
        })
        .catch(() => {
          alert("복사를 다시 시도해주세요.");
        });
    } else {
      if (!document.queryCommandSupported("copy")) {
        return alert("복사하기가 지원되지 않는 브라우저입니다.");
      }

      const textarea = document.createElement("textarea");
      textarea.value = text;

      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      notify()
    }
  }
  return (
    <div>
      <h1 className='category'>Contact</h1>
      <h1 className={cs('click')}>Click !</h1>
      <div className={cs('hoverContainer')}>
        {
          instagramIsHover &&
          <div className={cs('instagramHoverEvent', 'hoverBox')}>
            <div>Instagram</div>
            <p className={'hoverSupplement'}>jinhyo___</p>
          </div>
        }

        {
          mailIsHover &&
          <div className={cs('mailHoverEvent', 'hoverBox')}>
            <div>Mail</div>
            <p className={'hoverSupplement'}>admin@jinhyo.dev</p>
          </div>
        }

        {
          githubIsHover &&
          <div className={cs('githubHoverEvent', 'hoverBox')}>
            <div>Github</div>
            <p className={'hoverSupplement'}>jinhyo-dev</p>
          </div>
        }

        {
          codeIsHover &&
          <div className={cs('codeHoverEvent', 'hoverBox')}>
            <div>solved.ac</div>
            <p className={'hoverSupplement'}>jinhyo0850</p>
          </div>
        }

        {
          discordIsHover &&
          <div className={cs('discordHoverEvent', 'hoverBox')}>
            <div>Discord</div>
            <p className={'hoverSupplement'}>Jinhyo#4116</p>
          </div>
        }

      </div>
      <div className={cs('contactContainer')}>
        <FaInstagram className={cs('instagram', 'icon')} size={'130'} onClick={() => pushToPage('instagram')}
                     onMouseEnter={() => setInstagramIsHover(true)} onMouseLeave={() => setInstagramIsHover(false)}/>
        <GrMail className={cs('mail', 'icon')} size={'140'} onClick={() => pushToPage('mail')}
                onMouseEnter={() => setmailIsHover(true)} onMouseLeave={() => setmailIsHover(false)}/>
        <BsGithub className={cs('github', 'icon')} size={'115'} onClick={() => pushToPage('github')}
                  onMouseEnter={() => setgithubIsHover(true)} onMouseLeave={() => setgithubIsHover(false)}/>
        <HiOutlineCode className={cs('code', 'icon')} size={'140'} onClick={() => pushToPage('solvedac')}
                       onMouseEnter={() => setCodeIsHover(true)} onMouseLeave={() => setCodeIsHover(false)}/>
        <SiDiscord className={cs('discord', 'icon')} size={'150'}
                   onMouseEnter={() => setDiscordIsHover(true)} onMouseLeave={() => setDiscordIsHover(false)} onClick={() => handleCopy('Jinhyo#4116')}/>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default Contact