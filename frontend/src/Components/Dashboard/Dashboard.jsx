import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import logobg2 from "../LandingPage/Assets/logobg2.png"
import LogoutIcon from '@mui/icons-material/Logout';
import { ButtonBase } from '@mui/material';
import CreateDetailPro from './Content/CreateDetail/CreateDetailPro';
import CreateFormPro from './Content/CreateForm/CreateFormPro';
import CreateForm from './Content/CreateForm/CreateForm';
import CreateDetail from './Content/CreateDetail/CreateDetail';
import { Link } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser, logoutUser } from '../../Actions/UserAction'
import EditNoteIcon from '@mui/icons-material/EditNote';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import FormSaved from './Content/Saved/FormSaved';
import DetailSaved from './Content/Saved/DetailSaved';


const Dashboard = () => {

    const [createForm, setCreateForm] = useState(false)
    const [createDetail, setCreateDetail] = useState(false)
    const [viewForm, setViewForm] = useState(false)
    const [viewDetail, setViewDetail] = useState(false)

    const {user, loading, error} = useSelector(state => state.user)

    const createFormHandler = () => {
        setCreateForm(true);
        setCreateDetail(false);
        setViewForm(false);
        setViewDetail(false);
    }

    const createDetailHandler = () => {
        setCreateForm(false);
        setCreateDetail(true);
        setViewForm(false);
        setViewDetail(false)
    }

    const viewFormHandler = () => {
        setCreateForm(false);
        setCreateDetail(false);
        setViewForm(true);
        setViewDetail(false)
    }

    const viewDetailHandler = () => {
        setCreateForm(false);
        setCreateDetail(false);
        setViewForm(false);
        setViewDetail(true)
    }

    const createFormStyle = {
        background: createForm && 'rgba(255, 255, 255, 0.3)',
        borderRight: createForm && '4px solid rgb(52, 174, 235)',
        borderRadius: createForm && '4px'
    };

    const createDetailStyle = {
        background: createDetail && 'rgba(255, 255, 255, 0.3)',
        borderRight: createDetail && '4px solid rgb(52, 174, 235)',
        borderRadius: createDetail && '4px'
    };

    const viewFormStyle = {
        background: viewForm && 'rgba(255, 255, 255, 0.3)',
        borderRight: viewForm && '4px solid rgb(52, 174, 235)',
        borderRadius: viewForm && '4px'
    };

    const viewDetailStyle = {
        background: viewDetail && 'rgba(255, 255, 255, 0.3)',
        borderRight: viewDetail && '4px solid rgb(52, 174, 235)',
        borderRadius: viewDetail && '4px'
    };

    const dispatch = useDispatch();
    const alert = useAlert();

    const logoutHandler = async() => {
        // dispatch(logoutUser());
        // await alert.success("Logged out successfully")
        window.open('http://localhost:80/auth/logout', "self")
    }

    useEffect(() => {
        dispatch(loadUser());
    }, [dispatch]);

    useEffect(()=>{
        if(error){
            alert.error(error);
            dispatch({type: "clearErrors"})
        }
    }, [alert, error, dispatch])


  return (
    <div className='contain'>
        <div className="sideBar" style={{
            width: '0%'
        }}>
            <div className='bodyn'>
                <aside className="sidebar" style={{
                        borderRight: '2px solid black'
                }}>
                    <ButtonBase>
                        <Link to={'/'}>
                            <div className="logo" >
                                <img src={logobg2} alt="logo" />
                            </div>
                        </Link>
                    </ButtonBase>
                    <ul className="links" >
                        <h4>Main Menu</h4>
                        <li onClick={createFormHandler} 
                        style={createFormStyle} >
                        <span 
                        className="material-symbols-outlined"><EditNoteIcon style={{
                                color: 'black'
                            }}/></span>
                        <a href="#" >Create Form</a>
                        </li>
                        <li onClick={createDetailHandler} 
                        style={createDetailStyle} >
                        <span 
                        className="material-symbols-outlined"><BorderColorOutlinedIcon style={{
                                color: 'black'
                            }}/></span>
                        <a href="#" >Create Detail</a>
                        </li>
                        
                        <hr/>
                        <h4>Advanced</h4>

                        <li onClick={viewFormHandler} 
                        style={viewFormStyle} >
                        <span className="material-symbols-outlined">
                            <ClassOutlinedIcon style={{
                                color: 'black'
                            }}/>
                        </span>
                        <a href="#">View Forms</a>
                        </li>

                        <li onClick={viewDetailHandler} style={viewDetailStyle} >
                        <span className="material-symbols-outlined">
                            <CollectionsBookmarkIcon style={{
                                color: 'black'
                            }}/>
                        </span>
                        <a href="#">View Detail </a>
                        </li>
                        
                        <hr/>
                        <h4>Account</h4>
                       
                        <li className="logout-link">
                        <span className="material-symbols-outlined">
                            <LogoutIcon style={{
                                color: 'black'
                            }}/>
                        </span>
                        <Link to={'/'} onClick={logoutHandler}> Logout</Link>
                        {/* <a href="#">Logout</a> */}
                        </li>
                    </ul>
                </aside>
            </div>

            

        </div>

        {
            createForm ? ( user.isPro ? <CreateFormPro /> : <CreateForm />) : null
        }

        {
            createDetail ? ( user.isPro ? <CreateDetailPro /> : <CreateDetail />) : null
        }

        {
            viewForm ? ( <FormSaved /> ) : null
        }

        {
            viewDetail ? ( <DetailSaved /> ) : null
        }

    </div>
  )
}

export default Dashboard
