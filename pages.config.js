const pages = {
  index: {
    entry: 'src/pages/index/main.js',
    template: 'public/index.html',
    filename: 'index.html',
    title: '首页',
    chunks: ['chunk-vendors', 'chunk-common', 'index']
  },
  foo: {
    entry: 'src/pages/foo/main.js',
    template: 'public/foo/index.html',
    filename: 'foo/index.html',
    title: 'Foo',
    chunks: ['chunk-vendors', 'chunk-common', 'foo']
  },
  bar: {
    entry: 'src/pages/bar/main.js',
    template: 'public/bar/index.html',
    filename: 'bar/index.html',
    title: 'Bar',
    chunks: ['chunk-vendors', 'chunk-common', 'bar']
  },
  'user': {
    entry: 'src/pages/user/main.js',
    template: 'public/user/index.html',
    filename: 'user/index.html',
    title: '个人中心',
    chunks: ['chunk-vendors', 'chunk-common', 'user']
  },
  about: 'src/pages/about/main.js'
}

module.exports = pages
