
var route = function (handle, pathname, res, postData) {
  if (typeof handle[pathname] === 'function') {
    handle[pathname](res, postData);
  } else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write('404 Not Found');
    res.end();
  }
}

exports.route = route;