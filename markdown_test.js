var MarkdownIt = require('markdown-it');
var md = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: true
});

var result = md.render('# Markdown-it rulezz!\nhello world\n## second header\nhello world');

console.log(result);