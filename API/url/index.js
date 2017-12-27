var url = require('url');
url.parse('http://nodejs.cn/api/url.html?tab=1&size=10#url_class_url');
//输出
// {
//   protocol: 'http:',
//   slashes: true,
//   auth: null,
//   host: 'nodejs.cn',
//   port: null,
//   hostname: 'nodejs.cn',
//   hash: '#url_class_url',
//   search: '?tab=1&size=10',

//   query: 'tab=1&size=10',  当parse方法第二个参数传入true的时候 这里发生改变了  query:{ tab:'1',size:'10'},

//   pathname: '/api/url.html',
//   path: '/api/url.html?tab=1&size=10',
//   href: 'http://nodejs.cn/api/url.html?tab=1&size=10#url_class_url'
// }

url.parse('//nodejs.cn/api/url.html?tab=1&size=10#url_class_url', true, true);
//像这种没有协议的url 只有传入第三个参数才能正确解析  host
// {
//   protocol: null,
//   slashes: true,
//   auth: null,
//   host: 'nodejs.cn',  //要不然这里回事null
//   port: null,
//   hostname: 'nodejs.cn',
//   hash: '#url_class_url',
//   search: '?tab=1&size=10',
//   query: {
//     tab: '1',
//     size: '10'
//   },
//   pathname: '/api/url.html',
//   path: '/api/url.html?tab=1&size=10',
//   href: '//nodejs.cn/api/url.html?tab=1&size=10#url_class_url'
// }

url.format({
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'nodejs.cn',
  port: null,
  hostname: 'nodejs.cn',
  hash: '#url_class_url',
  search: '?tab=1&size=10',

  query: 'tab=1&size=10', // 当parse方法第二个参数传入true的时候 这里发生改变了  query:{ tab:'1',size:'10'},

  pathname: '/api/url.html',
  path: '/api/url.html?tab=1&size=10',
  href: 'http://nodejs.cn/api/url.html?tab=1&size=10#url_class_url'
})  // 输出   'http://nodejs.cn/api/url.html?tab=1&size=10#url_class_url'

url.resolve('http://xiaoyu.com', 'tab') //=> 输出 'http://xiaoyu.com/tab'
 

