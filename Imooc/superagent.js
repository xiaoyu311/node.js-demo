const app = require('express')();
const superagent = require('superagent');
const cheerio = require('cheerio');

app.get('/', function (req, res, next) {
  superagent.get('https://cnodejs.org/')
    .end(function (err, sres) {
      if (err) {
        return next(err)
      }
      var $ = cheerio.load(sres.text);
      var items = [];
      $('#topic_list .topic_title').each(function(idx, element) {
        var $element = $(element);
        items.push({
          title: $element.attr('title'),
          href: $element.attr('href')
        })
      });
      res.send(items)
    })
})
app.listen(3000)

//   $

// {
//   [Function: initialize]
//   fn:
//     initialize {
//       constructor: [Circular],
//       _originalRoot: {
//         type: 'root',
//         name: 'root',
//         namespace: 'http://www.w3.org/1999/xhtml',
//         attribs: {},
//         'x-attribsNamespace': {},
//         'x-attribsPrefix': {},
//         children: [Array],
//         parent: null,
//         prev: null,
//         next: null
//       }
//     },
//     load: [Function],
//     html: [Function],
//     xml: [Function],
//     text: [Function],
//     parseHTML: [Function],
//     root: [Function],
//     contains: [Function],
//     merge: [Function],
//     _root: {
//       type: 'root',
//       name: 'root',
//       namespace: 'http://www.w3.org/1999/xhtml',
//       attribs: {},
//       'x-attribsNamespace': {},
//       'x-attribsPrefix': {},
//       children: [
//         [Object]
//       ],
//       parent: null,
//       prev: null,
//       next: null
//     },
//     _options: {
//       withDomLvl1: true,
//       normalizeWhitespace: false,
//       xml: false,
//       decodeEntities: true
//     }
// }