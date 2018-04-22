'use strict';

const abbr = require('markdown-it-abbr');
const emoji = require('markdown-it-emoji');
const markdownIt = require('markdown-it');
const sub = require('markdown-it-sub');
const sup = require('markdown-it-sup');
const {
  TemplateTag,
  stripIndentTransformer,
  trimResultTransformer,
} = require('common-tags');

const LINEFEED = '\n';

module.exports = (markdownOptions = { typographer: true }) => {
  const md = markdownIt(markdownOptions)
    .use(emoji)
    .use(sup)
    .use(sub)
    .use(abbr);
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
