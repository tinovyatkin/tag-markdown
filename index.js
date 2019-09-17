'use strict';

const markdownIt = require('markdown-it');
const abbr = require('markdown-it-abbr');
const emoji = require('markdown-it-emoji');
const sub = require('markdown-it-sub');
const sup = require('markdown-it-sup');
const {
  TemplateTag,
  stripIndentTransformer,
  trimResultTransformer,
} = require('common-tags');

const LINEFEED = '\n';

module.exports =
  /**
   * @param {import('markdown-it').Options} [markdownOptions]
   * @returns {import('common-tags').TemplateTag}
   */
  (markdownOptions = { typographer: true }) => {
    const md = markdownIt(markdownOptions)
      .use(emoji)
      .use(sup)
      .use(sub)
      .use(abbr);

    return new TemplateTag([
      stripIndentTransformer('all'),
      trimResultTransformer(),
      {
        onEndResult(res) {
          if (res.includes(LINEFEED)) return md.render(res);
          return md.renderInline(res);
        },
      },
    ]);
  };
