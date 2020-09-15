const blockTypes = {
  TextWithTitle: {
    fields: [
      {
        name: 'title',
        type: 'string',
      },
      {
        name: 'body',
        type: 'richText',
      },
    ],
  },
  Img: {
    fields: [
      {
        name: 'src',
        type: 'string',
      },
      {
        name: 'alt',
        type: 'string',
      },
      {
        name: 'nColWidth',
        type: 'number',
      },
    ],
  },
};

export { blockTypes };
