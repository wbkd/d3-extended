import { select } from 'd3-selection';

function first() {
  return select(this['_groups'][0][0]);
}

export default first
