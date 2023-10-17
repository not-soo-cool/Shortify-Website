import React, { useEffect, useState } from 'react'
import './CreateForm.css'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fab, TextField } from '@mui/material'
import { Link } from 'react-router-dom'
import AutoModeIcon from '@mui/icons-material/AutoMode';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { loadUser } from '../../../../Actions/UserAction';
import { createForm } from '../../../../Actions/FormAction';

const CreateForm = () => {

  const dispatch = useDispatch();
  const alert = useAlert();

  const [fname, setFname] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
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

  // const submitHandler = async(e) => {
  //   e.preventDefault();
  //   await dispatch(createForm(first, last, email, password, username, dob, gender, address, city, state, postal));
  //   // dispatch(loadUser());
  // }

  const handleFormSubmit = async(e) => {
    e.preventDefault();
    setOpen(false);
    await dispatch(createForm(fname, first, last, email, password, username, dob, gender, address, city, state, postal));
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
    <div className='form'>
      <section>
        <div className="formok">
          <form action="" 
          // onSubmit={submitHandler} 
          >
          <h2>Standard Form</h2>
            <div className="input-box first">

              <input type="text" 
              value={first} 
              placeholder='First Name' 
              onChange={(e)=>setFirst(e.target.value)} />

              <input type="text" 
              value={last} 
              placeholder='Last Name' 
              onChange={(e)=>setLast(e.target.value)} />

            </div>

            <div className="input-box second">

              <input type="email" placeholder='Email' 
              value={email} 
              style={{
                  width: '120%'
                }} 
                onChange={(e)=>setEmail(e.target.value)}
                />

              <input type="password" 
              value={password} 
              placeholder='Password' style={{
                    width: '80%'
                }} 
                onChange={(e)=>setPassword(e.target.value)}/>

            </div>
            
            <div className="input-box third">

                <input type="text" 
                value={username} placeholder='Username' 
                onChange={(e)=>setUsername(e.target.value)} />

                <input type="text" 
                value={gender} 
                placeholder='Gender' style={{
                    // width: '80%'
                }} 
                onChange={(e)=>setGender(e.target.value)}/>

                <input type="date" 
                value={dob} 
                placeholder='DOB' style={{
                    // width: '80%'
                }} 
                onChange={(e)=>setDob(e.target.value)}/>

            </div>

            <div className="input-box fourth">

              <input type="text" 
              value={address} 
              placeholder='Address' 
              onChange={(e)=>setAddress(e.target.value)} />

            </div>

            <div className="input-box fifth">

              <input type="text" 
              value={city} 
              placeholder='City' 
              onChange={(e)=>setCity(e.target.value)}/>

              <input type="text" 
              value={state} 
              placeholder='State' 
              onChange={(e)=>setState(e.target.value)} />

              <input type="number" 
              value={postal} 
              placeholder='Postal' 
              onChange={(e)=>setPostal(e.target.value)}/>

            </div>

            <div className="input-box sixth" style={{
              marginTop: '10px'
            }}>
              <input type="button" 
              value='Submit' 
              disabled={formloading} onClick={handleClickOpen} id='btn' style={{
                width: '15%'
              }}/>
            </div>

            <div className="group">
              <a href="../pricing">Need More Inputs? Try Pro</a>
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
        <Link to='../pricing'>
            <Fab size="medium" 
            color="primary"
            aria-label="add" sx={{
                // bottom: '-280px',
                bottom: '10px',
                left: "1300px"
            }}>
                <AutoModeIcon />
            </Fab>
        </Link>
      </section>
    </div>
  )
}

export default CreateForm
