import React from 'react';
import './admin.css';

const Admin = () => (
  <div className="outerbox">

    <h1> I am available</h1>
    <input className="inputbox" type="text" id="lname" name="lname" placeholder="Enter here" />
    <div className="innerbox">
      <input type="checkbox" />
      <p>Name</p>
      <p>Email</p>
      <p>Role</p>
      <p>Actions</p>
    </div>
    <div className="infodiv">
      <input type="checkbox" />
      <p>Name</p>
      <p>Email</p>
      <p>Role</p>
      <div className="mybuttons">
        <p>Actions</p>
        <button type="button">C</button>
      </div>
    </div>
    <div className="infodiv">
      <input type="checkbox" />
      <p>Name</p>
      <p>Email</p>
      <p>Role</p>
      <div className="mybuttons">
        <p>Actions</p>
        <button type="button">C</button>
      </div>
    </div>
    <div className="infodiv">
      <input type="checkbox" />
      <p>Name</p>
      <p>Email</p>
      <p>Role</p>
      <div className="mybuttons">
        <p>Actions</p>
        <button type="button">C</button>
      </div>
    </div>
    <div className="footer">
      <button type="button">DA</button>
      <div className="inerfooter">
        <button type="button">I</button>
        <button type="button">J</button>
        <button type="button">K</button>
        <button type="button">L</button>
      </div>
    </div>
  </div>
);

export default Admin;
