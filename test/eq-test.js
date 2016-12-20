const tape = require("tape"),
      d3 = require("../")
      jsdom = require("jsdom");


      tape('eq - get first element of a selection', test => {
        var document = jsdom.jsdom('<body><div id="a"></div><div id="b"></div><div id="c"></div></body>')

        var firstElement = d3.select(document).selectAll('div').eq(0);

        test.equal(firstElement.attr('id'), 'a');
        test.end();
      });

      tape('eq - get second element of a selection', test => {
        var document = jsdom.jsdom('<body><div id="a"></div><div id="b"></div><div id="c"></div></body>')

        var firstElement = d3.select(document).selectAll('div').eq(1);

        test.equal(firstElement.attr('id'), 'b');
        test.end();
      });
