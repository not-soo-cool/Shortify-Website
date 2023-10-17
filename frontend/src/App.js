import './App.css';
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { loadUser } from './Actions/UserAction';
import Landing from './Components/Landing/Landing';
import Home from './Components/Landing/Home/Home';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard'
import ViewProForm from './Components/Dashboard/Content/View/ViewForm/ViewProForm';
import ViewProDetail from './Components/Dashboard/Content/View/ViewDetail/ViewProDetail';
import FormSaved from './Components/Dashboard/Content/Saved/FormSaved';
import DetailSaved from './Components/Dashboard/Content/Saved/DetailSaved';
import ViewDetail from './Components/Dashboard/Content/View/ViewDetail/ViewDetail';
import ViewForm from './Components/Dashboard/Content/View/ViewForm/ViewForm';
import EditDetail from './Components/Dashboard/Content/Edit/EditDetail/EditDetail';
import EditDetailPro from './Components/Dashboard/Content/Edit/EditDetail/EditDetailPro';
import EditForm from './Components/Dashboard/Content/Edit/EditForm/EditForm';
import EditFormPro from './Components/Dashboard/Content/Edit/EditForm/EditFormPro';
import { useAlert } from 'react-alert';
import CreateForm from './Components/Dashboard/Content/CreateForm/CreateForm';
import CreateFormPro from './Components/Dashboard/Content/CreateForm/CreateFormPro';
import Register from './Components/Register/Register';


function App() {

  const dispatch = useDispatch();

  const {isAuthenticated} = useSelector(state => state.user)

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>

      <Routes>


        {/* <Route path='/pricing' element= {isAuthenticated ? <Pricing /> : <LoginSide />} /> */}

        <Route path='/' element= { <Landing /> } />

        <Route path='/home' element= { <Home /> } />

        <Route path='/login' element= { <Login /> } />

        <Route path='/signup' element= { <Register /> } />

        {/* <Route path='/dashboard' element= { isAuthenticated ? <Dashboard /> : <Login /> } /> */}

        <Route path='/dashboard' element= { <Dashboard /> } />

        {/* <Route path='/savedetail' element= { <DetailSaved /> } /> */}

        <Route path='/detailform/:id' element= { <ViewDetail /> } />

        <Route path='/prodetailform/:id' element= { <ViewProDetail /> } />

        <Route path='/editdetailform/:id' element= { <EditDetail /> } />

        <Route path='/editprodetailform/:id' element= { <EditDetailPro /> } />

        {/* <Route path='/savedforms' element= { <FormSaved /> } /> */}

        <Route path='/form/:id' element= { <ViewForm /> } />

        <Route path='/proform/:id' element= { <ViewProForm />  } />

        <Route path='/editform/:id' element= { <EditForm /> } />

        <Route path='/editproform/:id' element= { <EditFormPro /> } />

        <Route path='/createform' element= { <CreateForm /> } />

        <Route path='/createformpro' element= { <CreateFormPro /> } />


      </Routes>
    </Router>

  );
}

export default App;
