const tape = require("tape"),
      d3 = require("../")
      jsdom = require("jsdom");


    tape('before - add p node before div', test => {
      const document = jsdom.jsdom(`<body><div></div></body>`);
      d3.select(document).select('div').before('p');
      test.equal(document.documentElement.innerHTML, '<head></head><body><p></p><div></div></body>' )
      test.end();
    });
