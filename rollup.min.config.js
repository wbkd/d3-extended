import babel from 'rollup-plugin-babel';
import butternut from 'rollup-plugin-butternut';

export default {
  entry: 'index.js',
  dest: './build/d3-extended.min.js',
  format: 'iife',
  sourceMap: false,
  globals: {
    'd3-selection': 'd3'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    butternut()
  ]
};
