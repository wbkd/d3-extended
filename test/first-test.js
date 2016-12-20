const tape = require("tape"),
      d3 = require("../")
      jsdom = require("jsdom");


      tape('first - get first element of a selection', test => {
        var document = jsdom.jsdom('<body><div id="a"></div><div id="b"></div><div id="c"></div></body>')

        var first = d3.select(document).selectAll('div').first();

        test.equal(first.attr('id'), 'a');
        test.end();
      });
