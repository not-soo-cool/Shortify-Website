import React, { useEffect, useState } from 'react'
import './CreateDetailPro.css'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fab, TextField } from '@mui/material'
import { Link } from 'react-router-dom'
import AutoModeIcon from '@mui/icons-material/AutoMode';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { createDetail, createProDetail } from '../../../../Actions/DetailAction';

const CreateDetailPro = () => {

  const dispatch = useDispatch();
  const alert = useAlert();

  const [dname, setDname] = useState("");
  const [first, setFirst] = useState("");
  const [middle, setMiddle] = useState("");
  const [last, setLast] = useState("");
  const [prefer, setPrefer] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [phNumber, setPhNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postal, setPostal] = useState("");
  const [ssn, setSsn] = useState("");
  const [id, setId] = useState("");
  const [marital, setMarital] = useState("");
  const [eName, setEName] = useState("");
  const [eRelation, setERelation] = useState("");
  const [eContact, setEContact] = useState("");

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { loading, error } = useSelector((state)=> state.user)

  const { message, loading: detailLoading } = useSelector((state)=>state.detail);

  const handleDetailSubmit = async(e) => {
    e.preventDefault();
    setOpen(false);
    await dispatch(createProDetail(dname, first, middle, last, prefer, email, dob, gender, phNumber, address, city, state, postal, ssn, id, marital, eName, eRelation, eContact));
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
    <div className='detailpro'>
      <section>
        <div className="login">
          <form action="">
          <h2>Detail Form</h2>
            <div className="input-box first">

              <input type="text" placeholder='First Name' 
              value={first} 
              onChange={(e)=>setFirst(e.target.value)} />

              <input type="text" placeholder='Middle Name' 
              value={middle} 
              onChange={(e)=>setMiddle(e.target.value)} />

              <input type="text" placeholder='Last Name' 
              value={last} 
              onChange={(e)=>setLast(e.target.value)} />

            </div>
            
            <div className="input-box second">

              <input type="email" placeholder='Email' style={{
                width: '120%'
              }} 
              value={email} 
              onChange={(e)=>setEmail(e.target.value)} />

              <input type="date" placeholder='DOB' style={{
                width: '80%'
              }} 
              value={dob} 
              onChange={(e)=>setDob(e.target.value)} />

              <input type="text" placeholder='Preferred Name' style={{
                width: '100%'
              }} 
              value={prefer} 
              onChange={(e)=>setPrefer(e.target.value)} />

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
              onChange={(e)=>setGender(e.target.value)} />

              <input type="text" placeholder=' Marital Status' style={{
                // width: '100%'
              }} 
              value={marital} 
              onChange={(e)=>setMarital(e.target.value)} />

            </div>

            <div className="input-box fourth">

              <input type="text" placeholder='Address' style={{
                // width: '120%'
              }} 
              value={address} 
              onChange={(e)=>setAddress(e.target.value)} />

            </div>

            <div className="input-box fifth">

              <input type="email" placeholder='City' style={{
                // width: '120%'
              }} 
              value={city} 
              onChange={(e)=>setCity(e.target.value)} />

              <input type="text" placeholder='State' style={{
                // width: '80%'
              }} 
              value={state} 
              onChange={(e)=>setState(e.target.value)} />

              <input type="number" placeholder='Postal' style={{
                // width: '100%'
              }} 
              value={postal} 
              onChange={(e)=>setPostal(e.target.value)} />

            </div>

            <div className="input-box sixth">

              <input type="number" placeholder='SSN' style={{
                // width: '120%'
              }} 
              value={ssn} 
              onChange={(e)=>setSsn(e.target.value)} />

              <input type="number" placeholder='ID' style={{
                // width: '80%'
              }} 
              value={id} 
              onChange={(e)=>setId(e.target.value)} />

            </div>

            <div className="input-box seventh">

              <input type="text" placeholder='Name' style={{
                // width: '120%'
              }} 
              value={eName} 
              onChange={(e)=>setEName(e.target.value)} />

              <input type="text" placeholder='relation' style={{
                // width: '80%'
              }} 
              value={eRelation} 
              onChange={(e)=>setERelation(e.target.value)} />

              <input type="number" placeholder='Phone..' style={{
                // width: '100%'
              }} 
              value={eContact} 
              onChange={(e)=>setEContact(e.target.value)} />

            </div>

            <div className="input-box eigth" style={{
              marginTop: '10px'
            }}>

              <input type="button" value='Submit' className='btn' disabled={detailLoading} 
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
                  value={dname}
                  onChange={(e)=>setDname(e.target.value)}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit" onClick={handleDetailSubmit}>Save</Button>
              </DialogActions>
            </Dialog>

          </form>
        </div>
      </section>
    </div>
  )
}

export default CreateDetailPro
