import babel from 'rollup-plugin-babel';
import butternut from 'rollup-plugin-butternut';
import multidest from 'rollup-plugin-multi-dest';

export default {
  entry: 'index.js',
  dest: 'build/d3-extended.js',
  format: 'umd',
  sourceMap: true,
  globals: {
    'd3-selection': 'd3'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
};
