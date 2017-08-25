# [d3.js Extended](http://wbkd.github.io/d3-extended/)

This module is **compatible with d3 v4**. If you are looking for the v3 version you can find it on the [v3 branch](https://github.com/wbkd/d3-extended/tree/v3).

This module extends [d3-selection](https://github.com/d3/d3-selection) with helpful functions which are similar to the jQuery API.

If you want to get to know more about this project, feel free to read the blog post: [Replacing jQuery with d3](http://blog.webkid.io/replacing-jquery-with-d3).


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


## API Documentation

#### [DOM Manipulation](#dom-manipulation-1)

* [prepend](#selectionprepend)
* [after](#selectionafter)
* [before](#selectionbefore)
* [clear](#selectionclear)
* [appendTo](#selectionappendTo)
* [toggleClass](#selectiontoggleClass)
* [addClass](#selectionaddClass)
* [removeClass](#selectionremoveClass)
* [hasClass](#selectionhasClass)
* [css](#selectioncss)
* [show](#selectionshow)
* [hide](#selectionhide)
* [toggle](#selectiontoggle)


#### [Traversing](#traversing-1)

* [eq](#selectioneq)
* [first](#selectionfirst)
* [last](#selectionlast)

#### [Events](#events-1)

* [on](#selectionon)

#### [Additional](#additional-functions)

* [moveToBack](#selectionmoveToBack)
* [moveToFront](#selectionmoveToFront)


## DOM Manipulation

#### selection.prepend

jQuery equivalent: [$.prepend](http://api.jquery.com/prepend/)

Inserts elements as first child of the current selection. Returns the new elements as a D3 selection.

```javascript
selection.prepend(tagName);
```

Example:

```javascript
d3.selectAll('li')
  .prepend('a')
  .text('Some Link')
  //do somethin else with the link
```

#### selection.after

jQuery equivalent: [$.after](http://api.jquery.com/after/)

Inserts new elements after each element in the current selection. Returns the newly created elements as a d3 selection.

```javascript
selection.after(tagName);
```

Example:

```javascript
d3.selectAll('li')
  .after('li')
  .text('Item');
  //do something else with the inserted elements...
```

#### selection.before

jQuery equivalent: [$.before](http://api.jquery.com/before/)

Inserts new elements before each element in the current selection. Returns the newly created elements as a d3 selection.

```javascript
selection.before(tagName);
```

Example:

```javascript
d3.selectAll('li')
  .before('li')
  .text('Item');
  //do something else with the inserted elements...
```


#### selection.clear

jQuery equivalent: [$.empty](http://api.jquery.com/empty/)

Removes all children of the current selection. Returns the current selection.
We are using another name for this function as in jQuery, because d3 already has an empty function.

```javascript
selection.clear();
```

Example:

```javascript
d3.selectAll('ul')
  .clear();
  // ul element has no children anymore
```


#### selection.appendTo

jQuery equivalent: [$.appendTo](http://api.jquery.com/appendto/)

Appends elements of the current selection to the target element. Returns the target selection.

```javascript
selection.appendTo(tagName);
```

Example:

```javascript
d3.selectAll('.foo').appendTo('.target');
```


#### selection.addClass

jQuery equivalent: [$.addClass](http://api.jquery.com/addclass/)

Adds class to elements in the current selection. Returns current selection.

```javascript
selection.addClass(className);
```

Example:

```javascript
d3.selectAll('ul').addClass('active');
d3.selectAll('ul').addClass('class-a class-b'); //will add two classes
```

#### selection.removeClass

jQuery equivalent: [$.removeClass](http://api.jquery.com/removeclass/)

Removes class from elements in the current selection. Returns current selection.

```
selection.removeClass(className);
```

Example:

```javascript
d3.selectAll('ul').removeClass('active');
d3.selectAll('ul').removeClass('class-a class-b'); //will remove two classes
```


#### selection.toggleClass

jQuery equivalent: [$.toggleClass](http://api.jquery.com/toggleclass/)

Adds or removes class from elements in the current selection. Returns current selection.

```javascript
selection.toggleClass(className);
```

Example:

```javascript
d3.selectAll('ul').toggleClass('active');
d3.selectAll('ul').toggleClass('class-a class-b'); //toggle multiple classes
```


#### selection.hasClass

jQuery equivalent: [$.hasClass](http://api.jquery.com/hasclass/)

Checks if current selection has the passed class. Returns true or false.

```javascript
selection.hasClass(className);
```

Example:

```javascript
d3.selectAll('ul').hasClass('active');
```


#### selection.css

jQuery equivalent: [$.css](http://api.jquery.com/css/)

Applies style to elements in the current selection. Returns the selection.
Works in the same way like the D3 style function we only changed the name here.

```javascript
selection.css(name, value);
selection.css(object);
```

Example:

```javascript
d3.selectAll('.foo').css('display', 'block');

// or

d3.selectAll('.foo').css({
  display : 'none',
  background: 'red'
});
```

#### selection.show

jQuery equivalent: [$.show](http://api.jquery.com/show/)

Diplays the current selection. Returns the selection.

```javascript
selection.show();
```

Example:

```javascript
d3.selectAll('.foo').show();
```

#### selection.hide

jQuery equivalent: [$.hide](http://api.jquery.com/hide/)

Hides the current selection. Returns the selection.

```javascript
selection.hide();
```

Example:

```javascript
d3.selectAll('.foo').hide();
```

#### selection.toggle

jQuery equivalent: [$.toggle](http://api.jquery.com/toggle/)

Diplays or hides the current selection. Returns the selection.

```javascript
selection.toggle();
```

Example:

```javascript
d3.selectAll('.foo').toggle();
```


## Traversing

#### selection.eq

jQuery equivalent: [$.eq](http://api.jquery.com/eq/)

Reduces current selection to the element with the passed index. Returns element.
If you have a nested group, you can also specify the group index, to select a certain group.

```javascript
selection.eq(index[, groupIndex]);
```

Example:

```javascript
d3.selectAll('li').eq('0');
// returns first li element
```


#### selection.first

jQuery equivalent: [$.first](http://api.jquery.com/first/)

Reduces the current selection to the first element. Then returns the reduced selection.

```javascript
selection.first();
```

Example:

```javascript
d3.selectAll('ul').first();
```


#### selection.last

jQuery equivalent: [$.last](http://api.jquery.com/last/)

Reduces the current selection to the last element. Then returns the reduced selection.

```javascript
selection.last();
```

Example:

```javascript
d3.selectAll('ul').last();
```

## Events


#### selection.on

jQuery equivalent: [$.on](http://api.jquery.com/on/)

Works like the normal `on` function but now you can pass multiple event types like you know it from jquery.
We took this function from the awesome [d3-jetpack](https://github.com/gka/d3-jetpack)

```javascript
selection.on(types [, listener[, capture]])
```

Example:

```javascript
d3.select('li').on('click mouseenter mouseleave', function(d, i) {
  // do something
});

```

## Additional Functions
These functions are not related to jQuery but they are little helper function we often use in our applications.

#### selection.moveToBack

Displays SVG element above the other ones.

```javascript
selection.moveToBack();
```

Example:

```javascript
d3.select('svg circle').moveToBack();
```

#### selection.moveToFront

Displays SVG element below the other ones.

```javascript
selection.moveToFront();
```

Example:

```javascript
d3.select('svg rect').moveToFront();
```


----

## Contributors

* [moklick](http://www.twitter.com/moklick)
* [chrtze](http://www.twitter.com/chrtze)
* [tine](https://twitter.com/errorroutine)
* [mgold](http://github.com/mgold)
