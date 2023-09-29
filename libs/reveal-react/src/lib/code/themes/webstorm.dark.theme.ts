import { PrismTheme } from '@code-surfer/themes/dist/utils';
import { makeTheme } from './makeTheme';

export const darkPrismTheme: PrismTheme = {
  plain: {
    color: '#bcbec4',
    backgroundColor: '#2b2d30',
  },
  styles: [
    {
      types: ['changed'],
      style: {
        color: 'rgb(162, 191, 252)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['deleted'],
      style: {
        color: 'rgba(239, 83, 80, 0.56)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['inserted', 'attr-name'],
      style: {
        color: '#857042',
        fontStyle: 'italic',
      },
    },
    {
      types: ['comment'],
      style: {
        color: '#7a7e85',
        fontStyle: 'italic',
      },
    },
    {
      types: ['string', 'url'],
      style: {
        color: '#6aab73',
      },
    },
    {
      types: ['punctuation', 'operator', 'entity'],
      style: {
        color: '#bcbec4',
      },
    },
    {
      types: ['number'],
      style: {
        color: '#2aacb8',
      },
    },
    {
      types: ['selector', 'doctype'],
      style: {
        color: 'rgb(199, 146, 234)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['class-name', 'builtin'],
      style: {
        color: '#c77dbb',
      },
    },
    {
      types: ['tag', 'keyword', 'property'],
      style: {
        color: '#cf8e6d',
      },
    },
    {
      types: ['boolean'],
      style: {
        color: 'rgb(255, 88, 116)',
      },
    },
    {
      types: ['function', 'symbol', 'function-variable'],
      style: {
        color: '#56a8f5',
      },
    },
    {
      types: ['namespace'],
      style: {
        color: 'rgb(178, 204, 214)',
      },
    },
  ],
};

export const wsDarkTheme = makeTheme(darkPrismTheme);
