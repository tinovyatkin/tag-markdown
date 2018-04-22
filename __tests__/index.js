'use strict';

const md = require('../')();

describe('Markdown tag', () => {
  test('single line should have no wrapper', () => {
    expect(
      md`
This is test _markdown_ string :tada:
      `,
    ).toMatchSnapshot();
  });

  test('multiple lines must be wrapped in <p>', () => {
    expect(md`
      # This is header

      This is firs (C) _paragraph_

      This is second :phone: paragraph
    `).toMatchSnapshot();
  });
});
