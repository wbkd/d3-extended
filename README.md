# [d3 Extended](http://wbkd.github.io/d3-extended/)

d3 Extended is **compatible with d3 v4**. If you are looking for the v3 compatible module you can find it on the [v3 branch](https://github.com/wbkd/d3-extended/tree/v3).

This module extends [d3-selection](https://github.com/d3/d3-selection) with helpful functions which are similar to the jQuery API. If you want to get to know more about this project, feel free to read the blog post: [Replacing jQuery with d3](http://blog.webkid.io/replacing-jquery-with-d3).


### Installation

**npm**

```shell
npm install --save d3-extended
```

**git clone**

```shell
git clone https://github.com/wbkd/d3-extended.git
```


### Usage

**ES6 modules**

```javascript
import * as d3Selection from 'd3-selection';
import 'd3-extended'; // d3Selection is now extended
```

**CommonJS**

```javascript
const d3Selection = require('d3-selection');
require('d3-extended'); // d3Selection is now extended
```

**Oldschool**

You can use the compressed or uncompressed version.
To use the plugin, include it after d3-selection in your HTML:

```markup
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3-selection/1.1.0/d3-selection.min.js"></script>
<script src="path/to/d3-extended.js"></script>
<script>
  // d3 is now extended
</script>
```


### Build

To build d3-extended run ```npm run build```.
This will create d3-extended.js and a minified version in the build folder.

### Test

To run tests use ```npm test```. Note: The tests require that you have [phantomjs](http://phantomjs.org/) installed globally. If you see errors, try ```npm install -g phantomjs``` before running the tests.

