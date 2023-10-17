import React, { useEffect, useState } from 'react'
import './EditDetail.css'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fab, Slide, TextField } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import AutoModeIcon from '@mui/icons-material/AutoMode';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateDetailForm, viewDetailForm } from '../../../../../Actions/DetailAction';
import { useAlert } from 'react-alert';
import Loader from '../../../../Loader/Loader';


const EditDetail = () => {

  const dispatch = useDispatch();
  const params = useParams();
  const alert = useAlert();

  const { detail, loading } = useSelector(state => state.detail)

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(viewDetailForm(params.id));
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

  const { message } = useSelector(state => state.updateDetail)

  const [dname, setDname] = useState(detail ? detail.detail_name : '');
  const [first, setFirst] = useState(detail ? detail.first_name : '');
  const [middle, setMiddle] = useState(detail ? detail.middle_name : '');
  const [last, setLast] = useState(detail ? detail.last_name : '');
  const [dob, setDob] = useState(detail ? formatDate(detail.dob) : '');
  const [gender, setGender] = useState(detail ? detail.gender : '');
  const [address, setAddress] = useState(detail ? detail.address : '');
  const [city, setCity] = useState(detail ? detail.city : '');
  const [state, setState] = useState(detail ? detail.state : '');
  const [postal, setPostal] = useState(detail ? detail.postal : '');
  const [ssn, setSsn] = useState(detail ? detail.ssn : '');
  const [nid, setNid] = useState(detail ? detail.id : '');

  const handleDetailSubmit = async(e) => {
    e.preventDefault();
    setOpen(false);
    await dispatch(UpdateDetailForm(params.id, dname, first, middle, last, dob, gender, address, city, state, postal, ssn, nid));
  }

  useEffect(() => {
    dispatch(viewDetailForm(params.id));
  }, [dispatch, params.id]);

  useEffect(() => {
    if(message){
        alert.success(message);
        dispatch({type: "clearMessage"})
    }
  }, [alert, message, dispatch]);

  return (
    loading ? <Loader /> : (
    <div className='editdetail'>
      <section>
        <div className="editdetailok">
          <h2>Edit Detail Form</h2>
          <form action="">
            <div className="input-box first">

              <div className="input-box-elem three" >
                <h6>First Name</h6>
                <input type="text" 
                value={first} 
                onChange={(e) => setFirst(e.target.value)} />
              </div>

              <div className="input-box-elem three" >
                <h6>Middle Name</h6>
                <input type="text" 
                value={middle} 
                onChange={(e) => setMiddle(e.target.value)}  />
              </div>

              <div className="input-box-elem three" >
                <h6>Last Name</h6>
                <input type="text" 
                value={last} 
                onChange={(e) => setLast(e.target.value)}  />
              </div>
            </div>
            
            <div className="input-box second">

              <div className="input-box-elem two">
                <h6>Gender</h6>
                <input type="text" 
                value={gender} 
                onChange={(e) => setGender(e.target.value)} />
              </div>

              <div className="input-box-elem two">
                <h6>DOB</h6>
                <input type="date" 
                value={dob} 
                onChange={(e) => setDob(e.target.value)} />
              </div>

            </div>

            <div className="input-box third">
              <div className="input-box-elem one">
                <h6>Address</h6>
                <input type="text" 
                value={address} 
                onChange={(e) => setAddress(e.target.value)} />  
              </div>
            </div>

            <div className="input-box fourth">

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

            <div className="input-box sixth">

              <div className="input-box-elem two">
                <h6>SSN</h6>
                <input type="number" 
                value={ssn} 
                onChange={(e) => setSsn(e.target.value)} /> 
              </div>

              <div className="input-box-elem two">
                <h6>ID</h6>
                <input type="number" 
                value={nid} 
                onChange={(e) => setNid(e.target.value)} />  
              </div>

            </div>

            <div className="input-box seventh" style={{
              marginTop: '10px'
            }}>
              <input type="button" value="Save" className='btn' onClick={handleClickOpen} style={{
                width: '10%'
              }} />
            </div>

            <div className="group" style={{
            //   marginTop: '10px'
            }}>
              <a href="../pricing">Need More Inputs? Try Pro</a>
            </div>

          </form>
        </div>
        <Link to='../pricing'>
            <Fab size="medium" 
            color="primary"
            aria-label="add" sx={{
                bottom: '-280px',
                left: "20px"
            }}>
                <AutoModeIcon />
            </Fab>
        </Link>
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
            value={dname}
            onChange={(e)=>setDname(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={handleDetailSubmit}>Save</Button>
        </DialogActions>
      </Dialog>

    </div>
    )
  )
}

export default EditDetail
