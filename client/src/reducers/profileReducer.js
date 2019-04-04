import {
  GET_PROFILE,
  GET_PROFILE_LAODING,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE
} from "../actions/types";

const initialSate = {
  profile: null,
  profiles: null, // It would be array,Multiple profiles inside.
  loading: false
};

export default function(state = initialSate, action) {
  switch (action.type) {
    case PROFILE_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        laoding: false
      };
    case CLEAR_CURRENT_PROFILE:
      return {
        ...state,
        profile: null
      };
    default:
      return state;
  }
}
