import React, { useEffect, useState } from 'react'
import './EditFormPro.css'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { UpdateProForm, viewForm } from '../../../../../Actions/FormAction';
import Loader from '../../../../Loader/Loader';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';

const EditFormPro = () => {

  const dispatch = useDispatch();
  const params = useParams();
  const alert = useAlert();

  const { form, loading } = useSelector(state => state.form)

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(viewForm(params.id));
  }, [dispatch, params.id]);

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

  const { message } = useSelector(state => state.updateForm)

  const [fname, setFname] = useState(form ? form.form_name : '');
  const [first, setFirst] = useState(form ? form.first_name : '');
  const [last, setLast] = useState(form ? form.last_name : '');
  const [email, setEmail] = useState(form ? form.email : '');
  const [password, setPassword] = useState(form ? form.password : '');
  const [username, setUsername] = useState(form ? form.username : '');
  const [phNumber, setPhNumber] = useState(form ? form.phNumber : '');
  const [gender, setGender] = useState(form ? form.gender : '');
  const [dob, setDob] = useState(form ? formatDate(form.dob) : '');
  const [address, setAddress] = useState(form ? form.address : '');
  const [city, setCity] = useState(form ? form.city : '');
  const [state, setState] = useState(form ? form.state : '');
  const [postal, setPostal] = useState(form ? form.postal : '');

  const handleFormSubmit = async(e) => {
    e.preventDefault();
    setOpen(false);
    await dispatch(UpdateProForm(params.id, fname, first, last, email, password, username, dob, gender, phNumber, address, city, state, postal));
  }

  useEffect(() => {
    dispatch(viewForm(params.id));
  }, [dispatch, params.id]);

  useEffect(() => {
    if(message){
        alert.success(message);
        dispatch({type: "clearMessage"})
    }
  }, [alert, message, dispatch]);


  return (
    loading ? <Loader /> : (
    <div className='editformpro'>
      <section>
        <div className="editformform">
          <h2>Edit Form</h2>
          <form action="">
            <div className="input-box first">

              <div className="input-box-elem three" >
                <h6>First Name</h6>
                <input type="text" 
                value={first} 
                onChange={(e) => setFirst(e.target.value)} />
              </div>

              <div className="input-box-elem three" >
                <h6>Last Name</h6>
                <input type="text" 
                value={last} 
                onChange={(e) => setLast(e.target.value)}  />
              </div>

              <div className="input-box-elem three" >
                <h6>Username</h6>
                <input type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}  />
              </div>
            </div>
            
            <div className="input-box second">
            <div className="input-box-elem two" >
                <h6>Email</h6>
                <input type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                style={{
                  width: '120%'
              }} />
              </div>

              <div className="input-box-elem two" >
                <h6 style={{
                  marginLeft: '20%'
                }}>Password</h6>
                <input type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} style={{
                  width: '80%',
                  marginLeft: '20%'
              }} />
              </div>
            </div>

            <div className="input-box third">
            <div className="input-box-elem three" >
                <h6>Ph Number</h6>
                <input type="text" 
                value={phNumber} 
                onChange={(e) => setPhNumber(e.target.value)} />
              </div>

              <div className="input-box-elem three" >
                <h6>Gender</h6>
                <input type="text" 
                value={gender} 
                onChange={(e) => setGender(e.target.value)}  />
              </div>

              <div className="input-box-elem three" >
                <h6>DOB</h6>
                <input type="text" 
                value={dob} 
                onChange={(e) => setDob(e.target.value)}  />
              </div>
            </div>

            <div className="input-box fourth">
              <div className="input-box-elem one">
                <h6>Address</h6>
                <input type="text" 
                value={address} 
                onChange={(e) => setAddress(e.target.value)} />  
              </div>
            </div>

            <div className="input-box fifth">
            <div className="input-box-elem three">
                <h6>City</h6>
                <input type="text" 
                value={city} 
                onChange={(e) => setCity(e.target.value)} />  
              </div>

              <div className="input-box-elem three">
                <h6>State</h6>
                <input type="text" 
                value={state} 
                onChange={(e) => setState(e.target.value)} />  
              </div>

              <div className="input-box-elem three">
                <h6>Postal</h6>
                <input type="number" 
                value={postal} 
                onChange={(e) => setPostal(e.target.value)} />  
              </div>
            </div>

            <div className="input-box sixth" style={{
              marginTop: '10px'
            }}>
              <input type="button" value='Save' className='btn' onClick={handleClickOpen} style={{
                width: '15%'
              }} />
            </div>
          </form>
        </div>
      </section>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Form Name"
            type="text"
            fullWidth
            variant="standard"
            value={fname}
            onChange={(e)=>setFname(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={handleFormSubmit}>Save</Button>
        </DialogActions>
      </Dialog>

    </div>
  ))
}

export default EditFormPro
