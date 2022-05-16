import React from 'react'
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'

const Typewtiters = () => {
  return (
    <>
      <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal', color: "#fff" }}>
        Hi I'm {' '}
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Student Developer', 'Frontend Developer', 'lll', 'Repeat!']}
            loop={100000000000}
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1}
          />
        </span>
      </h1>
    </>
  )
}

export default Typewtiters