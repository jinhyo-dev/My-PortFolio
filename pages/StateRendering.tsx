import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Desktop from './DynamicPage/Desktop';
import Mobile from './DynamicPage/Mobile'

const StateRendering = () => {
  const isPC = useMediaQuery({
    query: '(min-width: 900px)'
  })

  return (
    isPC ? <Desktop/> : <Mobile/>
  );
}

export default StateRendering;