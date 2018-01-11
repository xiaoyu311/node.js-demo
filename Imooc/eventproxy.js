var superagent = require('superagent');
var url = require('url');
var cheerio = require('cheerio');
var eventproxy = require('eventproxy');
var eq = new eventproxy();

const cnodeUrl = 'https://cnodejs.org/';
superagent.get(cnodeUrl)
  .end(function (err, sres) {
    if (err) {
      throw new Error('请求失败');
    }
    var topicsUrl = [];
    var cheerio = require('cheerio');
    var $ = cheerio.load(sres.text);
    $('#topic_list .topic_title').each(function (idx, element) {
      var $element = $(element);
      var href = url.resolve(cnodeUrl, $element.attr('href'));
      topicsUrl.push(href);
    });
    // console.log(topicsUrl)
    eq.after('topic_html', 3, function (topics) {
      console.log(topics)
      var topicUrl = topics[0];
      var topicHtml = topics[1];
      var $ = cheerio.load(topicHtml);
      return ({
        title: $('.topic_full_title').text().trim(),
        href: topicUrl,
        comment1: $('.reply_content').eq(0).text().trim(),
      });
    });
    topicsUrl.forEach(function(topicUrl) {
      superagent.get(topicUrl)
        .end(function (err, res) {
          eq.emit('topic_html', [topicUrl, res.text])
        })
    });
  })
  

