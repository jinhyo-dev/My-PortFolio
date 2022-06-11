import React from 'react';
import classNames from "classnames/bind";
import style from "../../../styles/mobileComponents.module.scss";
import {ToastContainer, toast} from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';

const cs = classNames.bind(style);

const MyProject = () => {

  const notify = () => {
    toast.info('화면을 왼쪽으로 밀어주세요 🤓', {
      position: "bottom-center",
      autoClose: 1300,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <div onClick={notify}>
      <h1 className={cs('AboutMe-title')}>My Project</h1>
      <div className={cs("holster")}>
        <div className={cs("container")} dir="ltr">

          <div className={cs('contains')}>
            <div>
              <h1 className={cs('projectTitle')}>Uiseong Bus TimeTable</h1>
              <img
                src={'https://cdn.discordapp.com/attachments/935776183688245341/984433735783039006/ezgif.com-gif-maker_3.gif'}
                alt={'busTimeTable'} className={cs('busGif')}/>
              <div className={cs('description')}>
                교통에 불편한 점이 많아 그 점을 보완하여<br/>
                웹 페이지로 도리원 버스 터미널 기준<br/>
                시내버스와 시외버스의 시간표를 사용자에게<br/>
                보여줍니다. 다음 버스 도착 시간까지 얼마나<br/>
                남았는지 알려주는 서비스도 제공합니다.
              </div>
              <div className={cs('icons')}>
                <a href={'https://github.com/jinhyo-dev/gbsw-bustimetable'} target={'_blank'}>
                  <img
                    src={'https://cdn-icons-png.flaticon.com/512/733/733553.png'} alt={'github'}
                    className={cs('gitIcon')}/>
                </a>
                <a href={'https://bus.jinhyo.dev'} target={'_blank'}>
                  <img src={'https://cdn.discordapp.com/attachments/935776183688245341/984477589139783740/pngegg2.png'}
                       alt={'web'} className={cs('webIcon')}/>
                </a>
              </div>
            </div>
          </div>

          <div className={cs('contains')}>
            <div>
              <h1 className={cs('projectTitle')}>GBSW Blackboard Web</h1>
              <img
                src={'https://cdn.discordapp.com/attachments/935776183688245341/980794042180857937/blackboard.gif'}
                alt={'busTimeTable'} className={cs('blackboardGif')} onClick={notify}/>
              <div className={cs('description')}>
                학교의 공지사항을 공유하는 공지사항 게시판과<br/>
                오늘의 급식 메뉴를 보여줍니다.<br/>
                야자 현황 테이블을 쉽게 볼 수 있게 출력합니다.
              </div>
              <div className={cs('icons')}>
                <a href={'https://github.com/jinhyo-dev/gbsw-bustimetable'} target={'_blank'}>
                  <img
                    src={'https://cdn-icons-png.flaticon.com/512/733/733553.png'} alt={'github'}
                    className={cs('gitIcon')}/>
                </a>
                <a href={'https://bus.jinhyo.dev'} target={'_blank'}>
                  <img src={'https://cdn.discordapp.com/attachments/935776183688245341/984477589139783740/pngegg2.png'}
                       alt={'web'} className={cs('webIcon')}/>
                </a>
              </div>
            </div>
          </div>

          <div className={cs('contains')}><h1 className={cs('building')}>Building...</h1></div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default MyProject;