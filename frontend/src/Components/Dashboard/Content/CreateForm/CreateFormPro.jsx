import React, { useEffect, useState } from 'react'
import './CreateFormPro.css'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { createProForm } from '../../../../Actions/FormAction';

const CreateFormPro = () => {

  const dispatch = useDispatch();
  const alert = useAlert();

  const [fname, setFname] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [phNumber, setPhNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postal, setPostal] = useState("");

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { loading, error } = useSelector((state)=> state.user)

  const { message, loading: formloading } = useSelector((state)=>state.form)

  const handleFormSubmit = async(e) => {
    e.preventDefault();
    setOpen(false);
    await dispatch(createProForm(fname, first, last, email, password, username, dob, gender, phNumber, address, city, state, postal));
    // dispatch(loadUser());
  }

  useEffect(() => {
    if(error){
        alert.error(error);
        dispatch({type: "clearErrors"})
    }
    if(message){
        alert.success(message);
        dispatch({type: "clearMessage"})
    }
  }, [alert, error, message, dispatch]);


  return (
    <div className='formpro'>
      <section>
        <div className="formform">
          <form action="">
            <h2>Standard Form</h2>
            <div className="input-box first">

              <input type="text" placeholder='First Name' 
              value={first} 
              onChange={(e)=>setFirst(e.target.value)} />

              <input type="text" placeholder='Last Name' 
              value={last} 
              onChange={(e)=>setLast(e.target.value)} />

              <input type="text" placeholder='User Name' 
              value={username} 
              onChange={(e)=>setUsername(e.target.value)} />
              
            </div>
            
            <div className="input-box second">

              <input type="email" placeholder='Email' style={{
                width: '120%'
              }} 
              value={email} 
              onChange={(e)=>setEmail(e.target.value)} />

              <input type="password" placeholder='Password' style={{
                width: '80%'
              }} 
              value={password} 
              onChange={(e)=>setPassword(e.target.value)}/>

            </div>

            <div className="input-box third">

              <input type="number" placeholder='Ph Number' style={{
                // width: '120%'
              }} 
              value={phNumber} 
              onChange={(e)=>setPhNumber(e.target.value)} />

              <input type="text" placeholder='Gender' style={{
                // width: '80%'
              }} 
              value={gender} 
              onChange={(e)=>setGender(e.target.value)}/>

              <input type="date" placeholder='DOB' style={{
                // width: '100%'
              }} 
              value={dob} 
              onChange={(e)=>setDob(e.target.value)} />

            </div>

            <div className="input-box fourth">

              <input type="text" placeholder='Address' style={{
                // width: '120%'
              }} 
              value={address} 
              onChange={(e)=>setAddress(e.target.value)} />

            </div>

            <div className="input-box fifth">

              <input type="text" placeholder='City' style={{
                // width: '120%'
              }} 
              value={city} 
              onChange={(e)=>setCity(e.target.value)} />

              <input type="text" placeholder='State' style={{
                // width: '80%'
              }} 
              value={state} 
              onChange={(e)=>setState(e.target.value)}/>

              <input type="number" placeholder='Postal' style={{
                // width: '100%'
              }} 
              value={postal} 
              onChange={(e)=>setPostal(e.target.value)} />

            </div>

            <div className="input-box sixth" style={{
              marginTop: '10px'
            }}>
              <input type="button" value='Submit' className='btn' disabled={formloading} 
              onClick={handleClickOpen} style={{
                width: '15%'
              }} />

            </div>

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

          </form>
        </div>
      </section>
    </div>
  )
}

export default CreateFormPro
