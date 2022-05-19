import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import Desktop from './DynamicPage/Desktop';
import Mobile from './DynamicPage/Mobile'
import { BrowserView, MobileView } from 'react-device-detect'

const Home = () => {
  const isPC = useMediaQuery({
    query: '(min-width: 900px)'
  })

  return (
      isPC ? <Desktop/> : <Mobile/>
    );
}

export default Home;
