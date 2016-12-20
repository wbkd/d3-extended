const tape = require("tape"),
      d3 = require("../")
      jsdom = require("jsdom");


      tape('hide - hide element', test => {
        var document = jsdom.jsdom('<body><div id="a"></div><div id="b"></div><div id="c"></div></body>')
        var last = d3.select(document).selectAll('div').last();

        test.equal(last.attr('id'), 'c');
        test.end();
      });
