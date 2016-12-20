const tape = require("tape"),
      d3 = require("../")
      jsdom = require("jsdom")
      simulate = require("simulate");


      tape('on - do stuff on click', test => {
        var document = jsdom.jsdom('<body><div id="a"></div><div id="b"></div><div id="c"></div></body>')

        var testDiv = d3.select(document).select('body');

        testDiv.on('click', function() {
            testDiv.attr('class', 'click-class');
        })

        test.notOk(testDiv.classed('click-class'));

        var evt = document.createEvent("HTMLEvents");
          evt.initEvent("click", false, true);
          document.body.dispatchEvent(evt)

        test.ok(testDiv.classed('click-class'));

        test.end();
      });


      tape('on - do stuff on hover', test => {
        var document = jsdom.jsdom('<body><div id="a"></div><div id="b"></div><div id="c"></div></body>')

        var testDiv = d3.select(document).select('body');

        testDiv.on('hover', function() {
            testDiv.attr('class', 'click-class');
        })

        test.notOk(testDiv.classed('click-class'));

        var evt = document.createEvent("HTMLEvents");
          evt.initEvent("hover", false, true);
          document.body.dispatchEvent(evt)

        test.ok(testDiv.classed('click-class'));

        test.end();
      });
