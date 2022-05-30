import React from 'react'
import styles from '../../styles/PcStyle.module.scss'
import classNames from "classnames/bind";

const cs = classNames.bind(styles)

const MyProject = () => {
  return (
    <div>
      <div className={cs('projectBox')}>
        <img src={'https://cdn.discordapp.com/attachments/935776183688245341/980794042180857937/blackboard.gif'} alt={'blackboard'}/>
      </div>
    </div>
  )
}

export default MyProject