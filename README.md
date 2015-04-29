# d3-query

A d3js extension - extended with implementations of jQuery functions.

Read the blog post: [Replacing jQuery with d3](http://blog.webkid.io/replacing-jquery-with-d3)

### Installation

**with npm**

```
$npm install --save d3-query
```

```
var d3 = require('d3-query');
```

**with bower**

```
bower install --save d3-query
```

```
<script src="bower_components/d3-query/dist/d3-query.js"></script>
```

**as d3 plugin**

```
<script src="path/to/d3.js"></script>
<script src="path/to/d3-query-plugin.js"></script>
```

### Build from source

To build the project run ```gulp build```.
This will create all needed files in the ```dist``` folder.

### API

**selection.trigger**

jQuery equivalent: [$.trigger](http://api.jquery.com/trigger/)

Triggers custom events on a selection.

```
selection.trigger(eventName [,data])
```

Example:

```
d3.select(document).on('dataChange', function(data) {
  console.log(data);
});

d3.select(document).trigger('dataChange', {newData: 'HelloWorld!'});
```

**selection.after**

jQuery equivalent: [$.after](http://api.jquery.com/after/)

Insert new elements after each element in the current selection. Returns the newly created elements as a d3 selection.

```
selection.after(tagName)
```

Example:

```
d3.selectAll('li')
  .after('li')
  .text('Item')
  //do something else with the inserted elements...
```

**selection.before**

**selection.after**

**selection.clear**

**selection.appendTo**

**selection.length**

**selection.toggleClass**

**selection.addClass**

**selection.removeClass**

**selection.eq**

----

##### Additional functions (not related to jQuery)

**selection.moveToBack**

**selection.moveToFront**

