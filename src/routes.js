import React from 'react';
import { Route, IndexRoute,Link } from 'react-router';
import App from './containers/App';
import NotFoundPage from './containers/NotFoundPage.js';
import LoginPage from './containers/LoginPage';
import FormPage from './containers/FormPage';
import TableLapangan from './containers/TableLapangan';
import TablePage from './containers/TablePage';
import  TableUser from './containers/TableUser';
import DataProfil from './containers/DataProfil';
import AddBooking from './containers/AddBooking'
import Booking from './containers/BookingLapangan';
import Dashboard from './containers/DashboardPage';
import Register from './containers/RegisterPage';
import Logout from './containers/Logout';
import SewaLapangan from './containers/SewaLapangan';
import AddMember from './containers/AddMember';
import AddLapangan from './containers/AddLapangan'
import { Redirect } from "react-router-dom";<Redirect to="/login" />



export default (
  <Route>
    <Route path="login" component={LoginPage}/>
    <Route path="register" component={Register}/>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard}/>
      <Route path="dashboard" component={Dashboard}/>
      <Route path="lapangan" component={TableLapangan}/>
      <Route path="add_lapangan" component={AddLapangan}/>
      <Route path="form" component={FormPage}/>
      <Route path="profil" component={DataProfil}/>
      <Route path="user" component={TableUser}/>
      <Route path="table" component={TablePage}/>
      <Route path="booking_lapangan" component={SewaLapangan}/>
      <Route path="add_member" component={AddMember}/>
      <Route path="booking" component={Booking} />
      <Route path="logout" component={Logout}/>
      <Route path="add_booking" component={AddBooking}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Route>
);
