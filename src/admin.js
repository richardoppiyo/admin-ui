import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './admin.css';
import { displayAdmins } from './redux/Admin';

const Admin = () => {
  const admins = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  console.log(admins);
  useEffect(() => {
    if (admins.length === 0) {
      console.log('following');
      console.log(admins);
      console.log('folloewd');
      dispatch(displayAdmins(admins));
    }
  }, []);

  return (
    <>
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

        {
        admins.map((admin) => (
          <div key={admin.id} className="infodiv">
            <input type="checkbox" />
            <p>{admin.adminname}</p>
            <p>{admin.email}</p>
            <p>{admin.role}</p>
            <div className="mybuttons">
              <p>Actions</p>
              <button type="button">C</button>
            </div>
          </div>

        ))
    }
        {/* <div className="infodiv">
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
      </div> */}
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
    </>
  );
};

export default Admin;
