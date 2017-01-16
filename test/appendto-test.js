const tape = require("tape"),
    d3 = require("../")
    jsdom = require("jsdom");


    tape('appendTo - append new node to div', test => {

      const document = jsdom.jsdom(`<body><div id='test-div'></div></body>`);
      const div = d3.select(document).select('#test-div');
      const p = d3.select(document.createElement("p"));
      p.appendTo(div);

      var content = document.documentElement.innerHTML;
      test.equal(document.documentElement.innerHTML, '<head></head><body><div id="test-div"><p></p></div></body>' )

      test.end();
    });
