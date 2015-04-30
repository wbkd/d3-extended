# d3-query

A d3js extension - extended with implementations of jQuery functions.

Read the blog post: [Replacing jQuery with d3](http://blog.webkid.io/replacing-jquery-with-d3)

### Installation

**npm**

**bower**

**as d3 plugin**

The dist folder contains two files which you can use as a d3-plugin in your projects:

```
dist/d3-query.js
dist/d3-query.min.js
```

```
<script src="path/to/d3.js"></script>
<script src="path/to/d3-query-plugin.js"></script>
```

### Build from source

To build the project run ```gulp build```.
This will create all needed files in the ```dist``` folder.

## API Documentation

#### [DOM Manipualtion](#dom-manipulation)

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


#### [Traversing](#traversing)

* [eq](#selectioneq)
* [first](#selectionfirst)
* [last](#selectionlast)


#### [Events](#events)

* [trigger](#selectiontrigger)


#### [Additional](#additional-functions)

* [moveToBack](#selectionmoveToBack)
* [moveToFront](#selectionmoveToFront)



## DOM Manipulation

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

```
selection.eq(index);
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


#### selection.trigger

jQuery equivalent: [$.trigger](http://api.jquery.com/trigger/)

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


----

### Additional functions
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