import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contactus'>
      <section>
        <div className="contactusform">
          <h2>Contact Us</h2>
          <form action="">
            <div className="input-box first">
              <input type="text" placeholder='Full Name' />
              <input type="email" placeholder='Email Address' />
            </div>

            <div className="input-box second">
              <input type="number" placeholder='Mobile Number' />
              <input type="text" placeholder='Subject' />
            </div>

            <div className="input-box fifth">
                <textarea name="" id="" placeholder='Your Message' ></textarea>
            </div>

            <div className="input-box sixth" style={{
              marginTop: '10px'
            }}>
              <input type="submit" value='Submit' id='btn' style={{
                width: '15%'
              }} />
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact
