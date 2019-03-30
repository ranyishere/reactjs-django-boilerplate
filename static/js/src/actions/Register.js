import {
  NEXT_REG_SEQUENCE
} from './types';

let currentNode = 0
function nxtRgSeq(){
  return {
    type: NEXT_REG_SEQUENCE,
    node: currentNode+1
  }
}

function prevRgSeq(){
  return {
    type: PREV_REG_SEQUENCE,
    node: currentNode-1
  }
}

export {nxtRgSeq, prevRgSeq};
