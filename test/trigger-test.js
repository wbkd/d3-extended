const tape = require("tape"),
      d3 = require("../")
      jsdom = require("jsdom")
      simulate = require("simulate");


      tape('trigger - do stuff on trigger', test => {
        var document = jsdom.jsdom('<body><div id="a" onclick="clickFunction()"></div><div id="b"></div><div id="c"></div></body>')

        var testDiv = d3.select(document).select('#b');


        var count = 0;

        test.ok(count == 0);

        d3.select(document).select('#a').on('click', function() {
          console.log(count);
            count++;
        })

        testDiv.on('click', function() {
            console.log(count);
            d3.select(document).select('#a').trigger( 'click' );
        })



        var evt = document.createEvent("HTMLEvents");
          evt.initEvent('click', false, true);
          document.getElementById("b").dispatchEvent(evt)

        test.ok(count == 1);

        test.end();
      });

      function clickFunction() {

      }
