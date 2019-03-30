import {
  DROP_DOWN_TOGGLE
} from './types';

import store from '../store';

function toggleMenu(menu) {
  return {
    type: DROP_DOWN_TOGGLE,
    payload: {menu}
  }
}

export { toggleMenu }
