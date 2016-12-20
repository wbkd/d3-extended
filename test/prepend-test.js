const tape = require("tape"),
      d3 = require("../")
      jsdom = require("jsdom");


      tape('prepend - prepend p node inside div', test => {
        var document = jsdom.jsdom('<body><div><span></span></div></body>')
        var testDiv = d3.select(document).select('div');
        testDiv.prepend('p');
        console.log(document.documentElement.innerHTML);
        test.equal(document.documentElement.innerHTML, '<head></head><body><div><p></p><span></span></div></body>' )
        test.end();
      });
