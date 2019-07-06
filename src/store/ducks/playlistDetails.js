/**
 * Types
 */
export const Types = {
  GET_REQUEST: "playlistDetails/GET_REQUEST",
  GET_SUCCESS: "playlistDetails/GET_SUCCESS"
};

/**
 * Reducers
 */
const DEFAULT_STATE = {
  loading: false,
  data: {}
};

export default function playlistDetails(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    default:
      return state;
  }
}

/**
 * Actions
 */
export const Creators = {
  getPlayListDetailsRequest: id => ({
    type: Types.GET_REQUEST,
    payload: { id }
  }),

  getPlayListDetailsSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data }
  })
};
