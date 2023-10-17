import React, { useEffect, useState } from 'react'
import './FormSaved.css'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import FormCard from './FormCard'
import { Button, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { getMyForms } from '../../../../Actions/FormAction';


const FormSaved = () => {

  const [prevToggle, setPrevToggle] = useState(true);
  const [nextToggle, setNextToggle] = useState(false);

  const dispatch = useDispatch();
  const alert = useAlert();

  const { forms, error } = useSelector((state)=>state.form)

  let box = document.querySelector('.formcard-container')
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
    dispatch(getMyForms());
  }, [dispatch]);

  useEffect(() => {
    if(error){
        alert.error(error);
        dispatch({type: "clearErrors"})
    }
  }, [alert, error, dispatch]);

  console.log(forms);

  return (
    <div className="formcard-caraousel" >
      <Button className='pre-btn' onClick={pressprev}
      disabled={prevToggle}>
        <ChevronLeftIcon />
      </Button>

      <div className="formcard-container">
        {
          forms && forms.length > 0 ? (
            forms.map((form, index) => (
              <FormCard 
              key={form._id}
              fid={form._id}
              no= {index>9 ? `${index+1}` : `0${index+1}`}
              fname= {form.form_name}
              first= {form.first_name}
              last= {form.last_name}
              tolink= {`/form/${form._id}`}
              isPro= {form.isProForm}
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

export default FormSaved
