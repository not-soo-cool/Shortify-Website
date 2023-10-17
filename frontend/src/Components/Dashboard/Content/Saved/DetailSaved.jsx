import React, { useEffect, useState } from 'react'
import './DetailSaved.css'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Button, Typography } from '@mui/material'
import { getMyDetails } from '../../../../Actions/DetailAction'
import DetailCard from './DetailCard';


const DetailSaved = () => {

  const [prevToggle, setPrevToggle] = useState(true);
  const [nextToggle, setNextToggle] = useState(false);

  const dispatch = useDispatch();
  const alert = useAlert();

  const { details, error } = useSelector((state)=>state.detail)

  let box = document.querySelector('.detailcard-container')
  // let width = box.clientWidth

  const pressprev = () => {
    setNextToggle(false);

    let width = box.clientWidth
    box.scrollLeft = box.scrollLeft - width/2;

    if(box.scrollLeft - width/2 <= 0){
      setPrevToggle(true);
    }
  }

  const pressnext = () => {
    let width = box.clientWidth
    box.scrollLeft = box.scrollLeft + width/2;

    setPrevToggle(false);

    if(box.scrollWidth - width - box.scrollLeft <= 0){
      setNextToggle(true);
    }
  }

  useEffect(() => {
    dispatch(getMyDetails());
  }, [dispatch]);

  useEffect(() => {
    if(error){
        alert.error(error);
        dispatch({type: "clearErrors"})
    }
  }, [alert, error, dispatch]);

  return (
    <div className="detailcard-caraousel" >
      <Button className='pre-btn' onClick={pressprev}
      disabled={prevToggle}>
        <ChevronLeftIcon />
      </Button>

      <div className="detailcard-container">
        {
          details && details.length > 0 ? (
            details.map((detail, index)=> (
              <DetailCard 
              key={detail._id}
              did={detail._id}
              no= {index>9 ? `${index+1}` : `0${index+1}`}
              dname={detail.detail_name}
              first={detail.first_name}
              last={detail.last_name}
              tolink={`/detailform/${detail._id}`}
              isPro={detail.isDetailPro}
              middle={detail.middle_name}
              email={detail.email}
              dob={detail.dob}
              prefer={detail.preferred_name}
              phNum={detail.phNumber}
              gender={detail.gender}
              marital={detail.marital}
              address={detail.address}
              city={detail.city}
              state={detail.state}
              postal={detail.postal}
              ssn={detail.ssn}
              id={detail.id}
              eName={detail.eName}
              eRelation={detail.eRelation}
              eContact={detail.eContact}
              />
            ))
          ) : (
            <Typography variant='h6'>No detail forms yet</Typography> 
          )
        }
      </div>

      <Button className='next-btn' onClick={pressnext} 
      disabled={nextToggle}>
        <ChevronRightIcon />
      </Button>

    </div>
  )
}

export default DetailSaved
