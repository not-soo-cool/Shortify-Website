import React from 'react'
import './SignUp.css'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import { Fab } from '@mui/material'
import { Link } from 'react-router-dom'
import AutoModeIcon from '@mui/icons-material/AutoMode';
import { green } from '@mui/material/colors';

const SignUp = () => {
  return (
    <div className='sign-up'>
      <section>
        <div className="sign-upok">
          <h2>Sign Up</h2>
          <form action="">
            <div className="input-box first">
              {/* <EmailOutlinedIcon /> */}
              <input type="text" placeholder='Full Name*' />
            </div>

            <div className="input-box first">
              {/* <EmailOutlinedIcon /> */}
              <input type="email" placeholder='Email*' />
            </div>
            
            <div className="input-box second">
              {/* <KeyOutlinedIcon /> */}
                <input type="password" placeholder='Password*' />
                
            </div>
            
            <div className="input-box second">
              {/* <KeyOutlinedIcon /> */}
                <input type="password" placeholder='Confirm Password*' />
                
            </div>

            <div className="input-box seventh" style={{
              marginTop: '10px'
            }}>
              <input type="submit" value='Submit' id='btn' style={{
                marginTop: '15px'
              }} />
            </div>

            {/* <div className="group" style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '0',
              padding: '0'
            }}>
              <a href="../pricing">New User? Sign Up</a>
              <br />
              <a href="../pricing">Forgot Password?</a>
            </div> */}

          </form>
        </div>
      </section>
    </div>
  )
}

export default SignUp
