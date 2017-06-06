import * as type from '../constants';

export default function user(state = {}, action) {
  switch (action.type) {
    case type.SET_MEMBERSHIP:
      const value = action.payload.value
      return {
        ...state,
        member: value
      }


    default:
      return state;
  }
}
