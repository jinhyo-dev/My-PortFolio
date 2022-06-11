import React from 'react';
import classNames from 'classnames/bind';
import style from '../../../styles/mobileComponents.module.scss';

const cs = classNames.bind(style);

const Contact = () => {
  return (
    <div className={cs('contactContainer')}>
      <div className={cs('contacts')}>
        <img
          src={'https://cdn.discordapp.com/attachments/935776183688245341/985206859197730866/pngegg4.png'}
          alt={'instagram'} className={cs('instagramLogo')}/>
      </div>
    </div>
  )
}

export default Contact