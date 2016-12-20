const tape = require("tape"),
    d3 = require("../")
    jsdom = require("jsdom");


    tape('appendTo - append p node to div', test => {

      const document = jsdom.jsdom(`<body><div id='test-div'></div><p id='test-p'></p></body>`);
      const div = d3.select(document).select('#test-div');
      d3.select(document).select('#test-p').appendTo(div);

      var content = document.documentElement.innerHTML;
      console.log(content);
      test.equal(document.documentElement.innerHTML, '<head></head><body><div id="test-div"><p id="test-p"></p></div></body>' )

      test.end();
    });
