import React from 'react'
import HomePage from './Home/Home'
import About from './About/About'
import './Landing.css'
import Contact from './Contact/Contact'

const Landing = () => {
  return (
    <div className='landing'>
        <div className="multi-circle">
            <HomePage />
            <About />
            <Contact />
        </div>
    </div>
  )
}

export default Landing
