import React, { useEffect, useState } from 'react'
import './CreateDetail.css'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fab, TextField } from '@mui/material'
import { Link } from 'react-router-dom'
import AutoModeIcon from '@mui/icons-material/AutoMode';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { createDetail } from '../../../../Actions/DetailAction';

const CreateDetail = () => {

  const dispatch = useDispatch();
  const alert = useAlert();

  const [dname, setDname] = useState("");
  const [first, setFirst] = useState("");
  const [middle, setMiddle] = useState("");
  const [last, setLast] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postal, setPostal] = useState("");
  const [ssn, setSsn] = useState("");
  const [id, setId] = useState("");

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
    await dispatch(createDetail(dname, first, middle, last, dob, gender, address, city, state, postal, ssn, id));
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
    <div className='detail'>
      <section>
        <div className="detailok">
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

                <input type="text" placeholder='Gender' style={{
                    // width: '80%'
                }} 
                value={gender} 
                onChange={(e)=>setGender(e.target.value)}/>

                <input type="date" placeholder='DOB' style={{
                    width: '80%'
                }} 
                value={dob} 
                onChange={(e)=>setDob(e.target.value)}/>

            </div>

            <div className="input-box third">

              <input type="text" placeholder='Address' style={{
                // width: '120%'
              }} 
              value={address} 
              onChange={(e)=>setAddress(e.target.value)} />

            </div>

            <div className="input-box fourth">

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
              onChange={(e)=>setId(e.target.value)}/>

            </div>

            <div className="input-box seventh" style={{
              marginTop: '10px'
            }}>

              <input type="button" value='Submit' className='btn' 
              disabled={detailLoading} 
              onClick={handleClickOpen} style={{
                width: '15%'
              }} />

            </div>

            <div className="group" style={{
            //   marginTop: '10px'
            }}>
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
    </div>
  )
}

export default CreateDetail
