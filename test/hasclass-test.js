const tape = require("tape"),
      d3 = require("../")
      jsdom = require("jsdom");


      tape('hasclass - element has certain class', test => {
        var document = jsdom.jsdom('<body><div class="test-class"></div></body>')
        var testDiv = d3.select(document).select('div');

        test.ok(testDiv.hasClass('test-class'));
        test.end();
      });
