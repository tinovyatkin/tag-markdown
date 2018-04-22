'use strict';

const emoji = require('markdown-it-emoji');
const markdownIt = require('markdown-it');
const {
  TemplateTag,
  stripIndentTransformer,
  trimResultTransformer,
} = require('common-tags');

const LINEFEED = '\n';

module.exports = (markdownOptions = { typographer: true }) => {
  const md = markdownIt(markdownOptions).use(emoji);
  const compileMD = {
    onEndResult(res) {
      if (res.includes(LINEFEED)) return md.render(res);
      return md.renderInline(res);
    },
  };
  return new TemplateTag([
    stripIndentTransformer('all'),
    trimResultTransformer(),
    compileMD,
  ]);
};
