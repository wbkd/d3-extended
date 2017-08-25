import { select } from 'd3-selection';

function last() {
  const size = this['_groups'][0].length-1;
  return select(this['_groups'][0][size]);
}

export default last;
