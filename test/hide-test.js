const tape = require("tape"),
      d3 = require("../")
      jsdom = require("jsdom");


      tape('hide - hide element', test => {
        var document = jsdom.jsdom('<body><div class="test-class"></div></body>')
        var testDiv = d3.select(document).select('div').hide();

        test.equal(testDiv.node().style.display, 'none');
        test.end();
      });
