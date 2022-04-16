import getAdmins from './Adminapi';

const LOAD = 'adminui/src/redux/LOAD';

const init = [];

export function load(admin) {
  return {
    type: LOAD,
    admin,
  };
}

export const displayAdmins = () => async (dispatch) => {
  const admins = await getAdmins();
  const tempArray = [];
  Object.keys(admins).forEach((id) => {
    tempArray.push({
      id: admins[id].id,
      adminname: admins[id].name,
      email: admins[id].email,
      role: admins[id].role,
    });
  });
  dispatch(load(tempArray));
};

export default function adminReducer(state = init, action) {
  switch (action.type) {
    case LOAD:
      return action.admin;
    default:
      return state;
  }
}
