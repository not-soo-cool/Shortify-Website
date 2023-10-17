import React, { forwardRef, useEffect, useState } from 'react'
import './ViewProDetail.css'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fab, Slide } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import AutoModeIcon from '@mui/icons-material/AutoMode';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { viewDetailForm } from '../../../../../Actions/DetailAction';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ViewDetail = () => {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function formatDate(inputDate) {
    const date = new Date(inputDate);

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const formattedDay = String(day).padStart(2, '0');
    const formattedMonth = String(month).padStart(2, '0');

    const formattedDate = `${year}-${formattedMonth}-${formattedDay}`;
    return formattedDate;
  }

  const dispatch = useDispatch();
  const params = useParams();

  const { detail } = useSelector(state => state.detail)

  // console.log('Received detail:', detail); 

  useEffect(() => {
    dispatch(viewDetailForm(params.id));
  }, [dispatch, params.id]);

  // useEffect(()=>{
  //   if(error){
  //     alert.error(error);
  //     dispatch({type: 'clearErrors'})
  //   }
  // }, [alert, error, dispatch])
  

  return (
    <div className='viewdetailpro'>
      <section>
        <div className="viewlogin">
          <h2>Detail Form</h2>
          <form action="">
            <div className="input-box first" >

              <div className="input-box-elem three" >
                <h6>First Name</h6>
                <input type="text" value={detail ? detail.first_name : ''} readOnly/>
              </div>

              <div className="input-box-elem three" >
                <h6>Middle Name</h6>
                <input type="text" value={detail ? detail.middle_name : ''} readOnly />
              </div>

              <div className="input-box-elem three" >
                <h6>Last Name</h6>
                <input type="text" value={detail ? detail.last_name : ''} readOnly />
              </div>

            </div>

            <div className="input-box second" >

              <div className="input-box-elem three" >
                <h6>Email</h6>
                <input type="email" value={detail ? detail.email : ''} readOnly/>
              </div>

              <div className="input-box-elem three">
                <h6>DOB</h6>
                <input type="date" value={detail ? formatDate(detail.dob) : ''} readOnly/>
              </div>

              <div className="input-box-elem three" >
                <h6>Preferred Name</h6>
                <input type="text" value={detail ? detail.preferred_name : ''} readOnly />
              </div>

            </div>
            
            <div className="input-box third">

              <div className="input-box-elem three">
                <h6>Ph Number</h6>
                <input type="number" value={detail ? detail.phNumber : ''} readOnly/>  
              </div>

              <div className="input-box-elem two">
                <h6>Gender</h6>
                <input type="text" value={detail ? detail.gender : ''} readOnly/>
              </div>

              <div className="input-box-elem two">
                <h6>Marital</h6>
                <input type="text" value={detail ? detail.marital : ''} readOnly/>
              </div>

            </div>

            <div className="input-box fourth">

              <div className="input-box-elem one">
                <h6>Address</h6>
                <input type="text" value={detail ? detail.address : ''} readOnly/>  
              </div>

            </div>

            <div className="input-box fifth">
              
              <div className="input-box-elem three">
                <h6>City</h6>
                <input type="text" value={detail ? detail.city : ''} readOnly/>  
              </div>

              <div className="input-box-elem three">
                <h6>State</h6>
                <input type="text" value={detail ? detail.state : ''} readOnly/>  
              </div>

              <div className="input-box-elem three">
                <h6>Postal</h6>
                <input type="number" value={detail ? detail.postal : ''} readOnly/>  
              </div>
              
            </div>

            <div className="input-box sixth">

              <div className="input-box-elem two">
                <h6>SSN</h6>
                <input type="number" value={detail ? detail.ssn : ''} readOnly/> 
              </div>

              <div className="input-box-elem two">
                <h6>ID</h6>
                <input type="number" value={detail ? detail.id : ''} readOnly/>  
              </div>
 
            </div>

            <div className="input-box seventh" >

              <div className="input-box-elem three" >
                <h6>Emergency Name</h6>
                <input type="text" value={detail ? detail.emergency.name : ''} readOnly/>
              </div>

              <div className="input-box-elem three" >
                <h6>Emergency Relation</h6>
                <input type="text" value={detail ? detail.emergency.relation : ''} readOnly />
              </div>

              <div className="input-box-elem three" >
                <h6>Emergency Contact</h6>
                <input type="text" value={detail ? detail.emergency.phNum : ''} readOnly />
              </div>

            </div>

            <div className="input-box eigth" style={{
              marginTop: '10px'
            }}>
              <input type="button" value='Edit' className='btn' onClick={handleClickOpen} style={{
                width: '10%'
              }} />
            </div>

          </form>
        </div>
      </section>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Link to = {`/editprodetailform/${detail ? detail._id : ''}`} >
            <Button onClick={handleClose}>Agree</Button>
          </Link>
        </DialogActions>
      </Dialog>

    </div>
  )
}

export default ViewDetail
