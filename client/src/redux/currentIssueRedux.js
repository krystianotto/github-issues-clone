import axios from 'axios';

/* ACTIONS */
const reducerName = 'currentIssue';
const createActionName = (name) => `app/${reducerName}/${name}`;

const LOAD_CURRENT_ISSUE = createActionName('LOAD_CURRENT_ISSUE');
export const loadIssue = (payload) => ({ payload, type: LOAD_CURRENT_ISSUE });

/* THUNKS */

export const fetchIssueByIdFromApi = (id) => {
  return async (dispatch) => {
    let res = await axios.get(`http://localhost:8000/api/issues/${id}`);
    dispatch(loadIssue(res.data));
  };
};

/* REDUCER */
export default function reducer(state = [], action = {}) {
  const data = action.payload;
  switch (action.type) {
    case LOAD_CURRENT_ISSUE:
      return { ...state, ...data };
    default:
      return state;
  }
}