import { select } from 'd3-selection';

function eq(findI, findJ) {
  return select(this['_groups'][0][findI]);
}

export default eq
