var querystring = require('querystring');
querystring.stringify({ name: 'yu', course: ['jade', 'node'], from: '' });
//输出 'name=yu&course=jade&course=node&from='


querystring.stringify({ name: 'yu', course: ['jade', 'node'], from: '' });
//输出  'name=yu,course=jade,course=node,from='


querystring.stringify({ name: 'yu', course: ['jade', 'node'], from: '' }, ',',
  ':');
//输出 'name:yu,course:jade,course:node,from:'


querystring.parse('name=yu&course=jade&course=node&from=');
//输出 { name: 'yu', course: [ 'jade', 'node' ], from: '' }


querystring.parse('name:yu,course:jade,course:node,from:', ',');
//输出 { 'name:yu': '', 'course:jade': '', 'course:node': '', 'from:': '' };


querystring.parse('name:yu,course:jade,course:node,from:', ',', ':');
//输出 { name: 'yu', course: [ 'jade', 'node' ], from: '' };
