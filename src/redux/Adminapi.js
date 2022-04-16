const getAdmins = async () => {
  const res = await fetch('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json');
  const data = await res.json();
  return data;
};

export default getAdmins;
