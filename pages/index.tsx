import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import Desktop from './DynamicPage/Desktop';
import Mobile from './DynamicPage/Mobile'
import { BrowserView, MobileView } from 'react-device-detect'

const Home = () => {
    return (
      <div>
        <BrowserView>
          <Desktop />
        </BrowserView>

        <MobileView>
          <Mobile />
        </MobileView>
      </div>
    );
}

export default Home;
