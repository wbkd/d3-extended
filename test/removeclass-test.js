const tape = require("tape"),
      d3 = require("../")
      jsdom = require("jsdom");


      tape('removeclass - removes a class', test => {
        var document = jsdom.jsdom('<body><div class="test-class"></div></body>')
        var testDiv = d3.select(document).select('div');
        test.ok(testDiv.classed('test-class'));

        testDiv.removeClass('test-class');

        test.notOk(testDiv.classed('test-class'));
        test.end();
      });

      tape('removeclass - remove multiple classes', test => {
        var document = jsdom.jsdom('<body><div class="test-class test-class-2"></div></body>')
        var testDiv = d3.select(document).select('div');
        test.ok(testDiv.classed('test-class'));
        test.ok(testDiv.classed('test-class-2'));

        testDiv.removeClass('test-class test-class-2');

        test.notOk(testDiv.classed('test-class'));
        test.notOk(testDiv.classed('test-class-2'));
        test.end();
      });
