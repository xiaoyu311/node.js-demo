var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var app = express();

app.set('views', './views/pages');
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'bower_components')))
app.listen(port);
console.log('Imooc started on port' + port);


//首页 返回数据
app.get('/', function (req, res) {
  res.render('index', {
    title: 'Imooc 首页',
    movies: [
      {
        title: '机械特警',
        _id: 1,
        poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
      }
    ]
  })
})

/**
 * 详情页返回数据
 */
app.get('/movie/:id', function (req, res) {
  res.render('detail', {
    title: '详情页',
    movie: {
      doctor: '和撒',
      country: '美国',
      title: '机械特警',
      year: 234,
      flash: 'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
      poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
      summery: '我发受到收到士大夫首付士大夫士大夫士大夫士大夫说的发送电风扇地方是'
    }
  })
})

/**
 * admin返回数据
 */
app.get('/admin/movie', function (req, res) {
  res.render('admin', {
    title: '后台管理',
    movie: {
      title: '',
      doctor: '',
      country: '',
      year: '',
      poster: '',
      flash: '',
      summary: '',
      language: ''
    }
  })
})

/**
 * 列表页
 */
app.get('/admin/list', function (req, res) {
  res.render('list', {
    title: 'Imooc 列表页',
    movies: [
      {
        title: '机械特警',
        _id: 1,
        doctor: 'sdf',
        country: '美国',
        year: 234,
        poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
        language: '英语',
        flash: 'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
        summary: '十分士大夫苟富贵干活是是是二哥塞格帅哥瑟告诉发'
      }
    ]
  })
})