import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './admin.css';
import { displayAdmins } from './redux/Admin';

const Admin = () => {
  const admins = useSelector((state) => state.admin);
  const [adminer, setAdmin] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (admins.length === 0) {
      dispatch(displayAdmins(admins));
    }
  }, []);

  //   const filtered = admins.filter((item) => item.adminname).includes(adminer).toLowerCase();

  const filtered = admins.filter((item) => (item.adminname.toLowerCase()
  || item.email.toLowerCase() || item.role.toLowerCase())
    .includes(adminer.toLowerCase()));

  console.log(filtered);
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

// !filtered.length ? (
//   <div className="heading">Enter a valid country!</div>
// ) : (
//   filtered.map((country) => (
//     <div key="{country.id}" className="innerdiv">
//       <div className="insidediv">
//         <Link to={`/Details/${country.country}`} style={{ color: '#fff' }}>
//           <BsArrowRightCircle />
//         </Link>
//       </div>
//       <img className="flag" src={`${country.flag}`} alt="hello" />
//       <div className="detailer">
//         <p className="contryname">{country.country}</p>
//         <p className="contrycases">
//           Cases:
//           {' '}
//           {country.cases}
//         </p>
//       </div>
//     </div>
//   ))
// );
