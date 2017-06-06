/* eslint-disable import/prefer-default-export */

import * as type from '../constants';

export function setMember(value = {}) {
  return {
    type: type.SET_MEMBERSHIP,
    payload: {
      value
    },
  };
}
