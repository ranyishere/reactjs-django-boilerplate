import {
  NEXT_REG_SEQUENCE
} from '../actions/types';

const INITIAL_STATE = {
  "activeNode": 0,
}

const Register = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case NEXT_REG_SEQUENCE:

      const newActiveNode = state.activeNode + 1


      return {
          ...state,
          activeNode: newActiveNode
        }

    default:
      return state
  }
}

export default Register;
