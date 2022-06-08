import React from 'react'
import styles from '../../styles/PcStyle.module.scss'
import classNames from "classnames/bind";

const cs = classNames.bind(styles)

const MyProject = () => {
  return (
    <div>
      <a href={'https://github.com/jinhyo-dev/Electronic-Blackboard-Web'} target={'_blank'}>
        <div className={cs('projectBox', 'projectBoxLeft')}>
          <img src={'https://cdn.discordapp.com/attachments/935776183688245341/980794042180857937/blackboard.gif'}
               alt={'blackboard'}/>
          <div className={cs('projectIntroduce')}>
            <h1>GBSW Blackboard</h1>
            <div>
              학교의 공지사항을 공유하는 공지사항 게시판과<br/>
              오늘의 급식 메뉴를 보여줍니다.<br/>
              야자 현황 테이블을 쉽게 볼 수 있게 출력합니다.
            </div>
          </div>
        </div>
      </a>

      <div className={cs('projectBox', 'projectBoxRight')}>
        <img src={'https://cdn.discordapp.com/attachments/802070321070211073/983634425881448530/busTimeTable.gif'}
             alt={'busTimeTable'} className={cs('busGif')}/>
        <div className={cs('projectIntroduce')}>
          <h1>GBSW Blackboard</h1>
          <div>
            학교의 공지사항을 공유하는 공지사항 게시판과<br/>
            오늘의 급식 메뉴를 보여줍니다.<br/>
            야자 현황 테이블을 쉽게 볼 수 있게 출력합니다.
          </div>
        </div>
      </div>

      <div className={cs('projectBox', 'projectBoxLeft')}>
        <img src={'https://cdn.discordapp.com/attachments/935776183688245341/980794042180857937/blackboard.gif'}
             alt={'blackboard'}/>
        <div className={cs('projectIntroduce')}>
          <h1>GBSW Blackboard</h1>
          <div>
            학교의 공지사항을 공유하는 공지사항 게시판과<br/>
            오늘의 급식 메뉴를 보여줍니다.<br/>
            야자 현황 테이블을 쉽게 볼 수 있게 출력합니다.
          </div>
        </div>
      </div>

      <div className={cs('projectBox', 'projectBoxRight')}>
        <img src={'https://cdn.discordapp.com/attachments/935776183688245341/980794042180857937/blackboard.gif'}
             alt={'blackboard'}/>
        <div className={cs('projectIntroduce')}>
          <h1>GBSW Blackboard</h1>
          <div>
            학교의 공지사항을 공유하는 공지사항 게시판과<br/>
            오늘의 급식 메뉴를 보여줍니다.<br/>
            야자 현황 테이블을 쉽게 볼 수 있게 출력합니다.
          </div>
        </div>
      </div>

    </div>
  )
}

export default MyProject