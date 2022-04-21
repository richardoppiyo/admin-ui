import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './admin.css';
import { RiDeleteBin7Line } from 'react-icons/ri';
import { FiEdit } from 'react-icons/fi';
import { displayAdmins } from './redux/Admin';

const Admin = () => {
  const admins = useSelector((state) => state.admin);
  const [adminer, setAdmin] = useState('');
  // const [editing, setEditing] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (admins.length === 0) {
      dispatch(displayAdmins(admins));
    }
  }, []);

  // const handleEditing = (id) => {
  //   console.log(id);
  //   setEditing(true);
  // };

  // const viewMode = {};
  // const editMode = {};

  // if (editing) {
  //   viewMode.display = 'none';
  // } else {
  //   editMode.display = 'none';
  // }

  // eslint-disable-next-line max-len
  const filtered = admins.filter((item) => Object.keys(item).some((key) => item[key].toLowerCase().includes(adminer.toLowerCase())));

  return (
    <>
      <div className="outerbox">

        <h1> I am available</h1>
        <input
          className="inputbox"
          type="text"
          id="lname"
          name="lname"
          placeholder="Enter here"
          value={adminer}
          onChange={(e) => { setAdmin(e.target.value); }}
        />
        <div className="innerbox">
          <input type="checkbox" />
          <p>Name</p>
          <p>Email</p>
          <p>Role</p>
          <p>Actions</p>
        </div>
        {
            !filtered.length ? (
              <div className="heading">No valid entry</div>
            ) : (
              filtered.map((admin) => (
                <div key={admin.id} className="infodiv">
                  {/* <tr className="infodiv">
                    <input type="checkbox" />
                    <td>{admin.adminname}</td>
                    <td>{admin.email}</td>
                    <td>{admin.role}</td>
                  </tr> */}
                  <input type="checkbox" />
                  <p>{admin.adminname}</p>
                  <p>{admin.email}</p>
                  <p>{admin.role}</p>
                  <div className="mybuttons">
                    <button type="button">
                      <Link to={`/Edit/${admin.id}`} style={{ color: '#fff' }}>
                        <FiEdit />
                      </Link>
                      {/* <FiEdit value={admin.id} onClick={handleEditing} /> */}
                    </button>
                    <button type="button">
                      <RiDeleteBin7Line />
                    </button>
                  </div>
                </div>

              ))
            )
    }
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
