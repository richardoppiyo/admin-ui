import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Edit = () => {
  const admins = useSelector((state) => state.admin);
  const myid = useParams();

  const filtered = admins.filter((item) => item.id === myid.id);

  //   const currentContact = admins.find(
  //     (admin) => admin.id === parseInt(id, 10),
  //   );
  console.log({ myid });
  console.log({ filtered });
  return (
    <>
      <h1>Hello</h1>
      <p>{filtered.id}</p>
    </>
  );
};

export default Edit;
