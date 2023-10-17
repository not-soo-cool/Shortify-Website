import React from 'react'
import './FormCard.css'
import { Link } from 'react-router-dom'

const FormCard = ({no, fname, first, last, tolink, isPro, fid}) => {

  return (
    <div className='formcard'>
        <div className='container' >
            <div className='card'>
                <div className="content">
                  <h2>{no}</h2>
                  <h3>{fname}</h3>
                  <p style={{
                  fontWeight: '500'
                }}> First Name - {first} <br /> Last Name - {last} <br /> . <br /> . </p>
                <a href={isPro ? (`/proform/${fid}`) : (tolink)}>View</a>
                </div>
              </div>
        </div>
      
    </div>
  )
}

export default FormCard
