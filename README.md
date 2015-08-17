# [d3.js Extended](http://wbkd.github.io/d3-extended/)

Extends [D3](http://www.d3js.org) with helpful functions which are similar to the jQuery API.

If you want to get to know more about this project, feel free to read the blog post: [Replacing jQuery with d3](http://blog.webkid.io/replacing-jquery-with-d3).


### Installation

**npm**

```
npm install --save d3-extended
```


**bower**

```
bower install --save d3-extended
```


**git clone**

```
git clone https://github.com/wbkd/d3-extended.git
```


### Usage

**CommonJS**


```
var d3 = require('d3'); //require d3 normally
require('d3-extended')(d3); //extend d3 with the functions
```


**AMD**

d3 has to defined in the require-config or the file must be in the same folder as d3-extended.js.

```
requirejs(['d3-extended'], function(d3) {
  // variable d3 is now extended
});
```


**Oldschool**

You can use the compressed or uncompressed version. 
To use the plugin, include it after d3 in your HTML:

```
<script src="path/to/d3.js"></script>
<script src="path/to/d3-extended.js"></script>
<script>
  // variable d3 is now extended
</script>
```


### Build

To build d3-extended run ```gulp```.
This will create d3-extended.js and a minified version in the root folder.

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
* [trigger](#selectiontrigger)


#### [Additional](#additional-functions)

* [moveToBack](#selectionmoveToBack)
* [moveToFront](#selectionmoveToFront)


## DOM Manipulation

#### selection.prepend

jQuery equivalent: [$.prepend](http://api.jquery.com/prepend/)

Inserts elements as first child of the current selection. Returns the new elements as a D3 selection.

```
selection.prepend(tagName);
```

Example:

```
d3.selectAll('li')
  .prepend('a')
  .text('Some Link')
  //do somethin else with the link
```

#### selection.after

jQuery equivalent: [$.after](http://api.jquery.com/after/)

Inserts new elements after each element in the current selection. Returns the newly created elements as a d3 selection.

```
selection.after(tagName);
```

Example:

```
d3.selectAll('li')
  .after('li')
  .text('Item');
  //do something else with the inserted elements...
```

#### selection.before

jQuery equivalent: [$.before](http://api.jquery.com/before/)

Inserts new elements before each element in the current selection. Returns the newly created elements as a d3 selection.

```
selection.before(tagName);
```

Example:

```
d3.selectAll('li')
  .before('li')
  .text('Item');
  //do something else with the inserted elements...
```


#### selection.clear

jQuery equivalent: [$.empty](http://api.jquery.com/empty/)

Removes all children of the current selection. Returns the current selection.
We are using another name for this function as in jQuery, because d3 already has an empty function.

```
selection.clear();
```

Example:

```
d3.selectAll('ul')
  .clear();
  // ul element has no children anymore
```


#### selection.appendTo

jQuery equivalent: [$.appendTo](http://api.jquery.com/appendto/)

Appends elements of the current selection to the target element. Returns the target selection.

```
selection.appendTo(tagName);
```

Example:

```
d3.selectAll('.foo').appendTo('.target');  
```


#### selection.addClass

jQuery equivalent: [$.addClass](http://api.jquery.com/addclass/)

Adds class to elements in the current selection. Returns current selection.

```
selection.addClass(className);
```

Example:

```
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

```
d3.selectAll('ul').removeClass('active');
d3.selectAll('ul').removeClass('class-a class-b'); //will remove two classes
```


#### selection.toggleClass

jQuery equivalent: [$.toggleClass](http://api.jquery.com/toggleclass/)

Adds or removes class from elements in the current selection. Returns current selection.

```
selection.toggleClass(className);
```

Example:

```
d3.selectAll('ul').toggleClass('active');
d3.selectAll('ul').toggleClass('class-a class-b'); //toggle multiple classes  
```


#### selection.hasClass

jQuery equivalent: [$.hasClass](http://api.jquery.com/hasclass/)

Checks if current selection has the passed class. Returns true or false.

```
selection.hasClass(className);
```

Example:

```
d3.selectAll('ul').hasClass('active'); 
```


#### selection.css

jQuery equivalent: [$.css](http://api.jquery.com/css/)

Applies style to elements in the current selection. Returns the selection.
Works in the same way like the D3 style function we only changed the name here.

```
selection.css(name, value);
selection.css(object);
```

Example:

```
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

```
selection.show();
```

Example:

```
d3.selectAll('.foo').show(); 
```

#### selection.hide

jQuery equivalent: [$.hide](http://api.jquery.com/hide/)

Hides the current selection. Returns the selection. 

```
selection.hide();
```

Example:

```
d3.selectAll('.foo').hide(); 
```

#### selection.toggle

jQuery equivalent: [$.toggle](http://api.jquery.com/toggle/)

Diplays or hides the current selection. Returns the selection. 

```
selection.toggle();
```

Example:

```
d3.selectAll('.foo').toggle(); 
```


## Traversing

#### selection.eq

jQuery equivalent: [$.eq](http://api.jquery.com/eq/)

Reduces current selection to the element with the passed index. Returns element.
If you have a nested group, you can also specify the group index, to select a certain group.

```
selection.eq(index[, groupIndex]);
```

Example:

```
d3.selectAll('li').eq('0'); 
// returns first li element
```


#### selection.first

jQuery equivalent: [$.first](http://api.jquery.com/first/)

Reduces the current selection to the first element. Then returns the reduced selection.

```
selection.first();
```

Example:

```
d3.selectAll('ul').first(); 
```


#### selection.last

jQuery equivalent: [$.last](http://api.jquery.com/last/)

Reduces the current selection to the last element. Then returns the reduced selection.

```
selection.last();
```

Example:

```
d3.selectAll('ul').last(); 
```

## Events


#### selection.on

jQuery equivalent: [$.on](http://api.jquery.com/on/)

Works like the normal `on` function but now you can pass multiple event types like you know it from jquery.
We took this function from the awesome [d3-jetpack](https://github.com/gka/d3-jetpack)

```
selection.on(types [, listener[, capture]])
```

Example:

```
d3.select('li').on('click mouseenter mouseleave', function(d, i) {
  // do something
});

```


#### selection.trigger

jQuery equivalent: [$.trigger](http://api.jquery.com/trigger/)

Note: Currently in development, see issues.
Triggers custom events on a selection.

```
selection.trigger(eventName [,data]);
```

Example:

```
d3.select(document).on('dataChange', function(data) {
  console.log(data);
});

d3.select(document).trigger('dataChange', {newData: 'HelloWorld!'});
```



## Additional Functions
These functions are not related to jQuery but they are little helper function we often use in our applications.

#### selection.moveToBack

Displays SVG element above the other ones.

```
selection.moveToBack();
```

Example:

```
d3.select('svg circle').moveToBack();
```

#### selection.moveToFront

Displays SVG element below the other ones.

```
selection.moveToFront();
```

Example:

```
d3.select('svg rect').moveToFront();
```


----

## Contributors

* [moklick](http://www.twitter.com/moklick)
* [chrtze](http://www.twitter.com/chrtze)
* [mgold](http://github.com/mgold)
