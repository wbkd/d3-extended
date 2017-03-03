const tape = require("tape"),
      d3 = require("../")
      jsdom = require("jsdom");


      tape('show - show element', test => {
        const document = jsdom.jsdom('<body><div style="display:none"></div></body>')

        const testDiv = d3.select(document).select('div')
        test.equal(testDiv.node().style.display, 'none');

        testDiv.show();

        test.equal(testDiv.node().style.display, 'block');
        test.end();
      });
