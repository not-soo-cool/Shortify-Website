import React, { useEffect, useState } from 'react'
import './DetailCard.css'

const DetailCard = ({no, dname, first, last, tolink, isPro, did}) => {

  return (
    <div className='detailcard' >
        <div className='container' >
            <div className='card'>
            <div className="content">
                <h2>{no}</h2>
                <h3>{dname}</h3>
                <p style={{
                  fontWeight: '500'
                }}> First Name - {first} <br /> Last Name - {last} <br /> . <br /> . </p>
                <a href={isPro ? (`/prodetailform/${did}`) : (tolink)}>View</a>
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default DetailCard
