import {
  DROP_DOWN_TOGGLE, CLOSE_ALL
} from '../actions/types';

const INITIAL_STATE = {
 account: '',
 cart: ''
 phones: [
   {
     "id": "0",
     "name": "Apple",
     "screens": []
   },
   {
     "id": "1",
     "name": "Samsung",
     "screens": []
   }
 ]
}

const DropMenu = (state=INITIAL_STATE, action) => {
  switch(action.type) {

    case DROP_DOWN_TOGGLE:
      if (action.payload.menu === "Account") {

        if (account === "") {

          state = {..state,
              account: "is-active"
            }

          return state
        }
      }

    case CLOSE_ALL:

      state = {..state,
        account: '',
        cart: ''
      }

      return state

    case PHONE_DIRECT:


    default:
      return state
  }
}
