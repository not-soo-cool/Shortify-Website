import React, { forwardRef, useEffect, useState } from 'react'
import './ViewForm.css'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fab, Slide } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import AutoModeIcon from '@mui/icons-material/AutoMode';
import { useDispatch, useSelector } from 'react-redux';
import { viewForm } from '../../../../../Actions/FormAction';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ViewForm = () => {

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
  
  const { form } = useSelector(state => state.form)

  useEffect(() => {
    dispatch(viewForm(params.id));
  }, [dispatch, params.id]);


  return (
    <div className='viewform'>
      <section>
        <div className="viewformok">
          <form action="">
            <h2>Standard Form</h2>
            <div className="input-box first">

              <div className="input-box-elem two" >
                <h6>First Name</h6>
                <input type="text" value={form ? form.first_name : ''} readOnly />
              </div>

              <div className="input-box-elem two" >
                <h6>Last Name</h6>
                <input type="text" value={form ? form.last_name : ''}  readOnly/>
              </div>
            </div>

            <div className="input-box second">

              <div className="input-box-elem two" >
                <h6>Email</h6>
                <input type="email" value={form ? form.email : ''} style={{
                    width: '120%'
                }} readOnly/>
              </div>

              <div className="input-box-elem two" >
                <h6 style={{
                    width: '80%',
                    marginLeft: '20%'
                }}>Password</h6>
                <input type="password" value={form ? form.password : ''} style={{
                    width: '80%',
                    marginLeft: '20%'
                }} readOnly/>
              </div> 
            </div>
            
            <div className="input-box third">

              <div className="input-box-elem three" >
                <h6>Username</h6>
                <input type="text" value={form ? form.username : ''}  readOnly/>
              </div>

              <div className="input-box-elem three">
                <h6>Gender</h6>
                <input type="text" value={form ? form.gender : ''} readOnly/>
              </div>

              <div className="input-box-elem three">
                <h6>DOB</h6>
                <input type="date" value={form ? formatDate(form.dob) : ''} readOnly/>
              </div>
            </div>

            <div className="input-box fourth">
              <div className="input-box-elem one">
                <h6>Address</h6>
                <input type="text" value={form ? form.address : ''} readOnly/>  
              </div>
            </div>

            <div className="input-box fifth">

              <div className="input-box-elem three">
                <h6>City</h6>
                <input type="text" value={form ? form.city : ''} readOnly/>  
              </div>

              <div className="input-box-elem three">
                <h6>State</h6>
                <input type="text" value={form ? form.state : ''} readOnly/>  
              </div>

              <div className="input-box-elem three">
                <h6>Postal</h6>
                <input type="number" value={form ? form.postal : ''} readOnly/>  
              </div>
            </div>

            <div className="input-box sixth" style={{
              marginTop: '10px'
            }}>
              <input type="button" value='Edit' className='btn' onClick={handleClickOpen} style={{
                width: '10%',
                fontSize: '16px',
                // padding: '15px 0px'
              }} />
            </div>

            <div className="group">
              <a href="../pricing">Need More Inputs? Try Pro</a>
            </div>

          </form>
        </div>
        <Link to='../pricing'>
            <Fab size="medium" 
            color="primary"
            aria-label="add" sx={{
                bottom: '10px',
                left: "1300px"
            }}>
                <AutoModeIcon />
            </Fab>
        </Link>
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
          <Link to = {`/editform/${form ? form._id : ''}`} >
            <Button onClick={handleClose}>Agree</Button>
          </Link>
        </DialogActions>
      </Dialog>

    </div>
  )
}

export default ViewForm
