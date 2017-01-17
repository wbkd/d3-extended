const tape = require("tape"),
      d3 = require("../")
      jsdom = require("jsdom");


      tape('trigger - do stuff on trigger', test => {
        var document = jsdom.jsdom('<body><div id="a"></div><div id="b"></div><div id="c"></div></body>');
        window = document.defaultView;

        var a = d3.select(document).select('#a');

        var count = 0;

        a.on('click', function(d){
          console.log("hey");
          simulateClick(a);
        })

        function simulateClick(elm) {
          var evt = document.createEvent("MouseEvents");
          evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);;
          elm.node().dispatchEvent(evt);
        }


        //simulateClick(a);

        //why so often?!?!?
        //a.trigger('click');

        test.end();
      });
