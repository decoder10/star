export const portsOut = {
  position: {
    name: 'right',
  },
  attrs: {
    portBody: {
      magnet: true,
      r: 10,
      fill: '#E6A502',
      stroke: '#023047',
    },
    label: {
      fill: 'white',
    },
  },
  label: {
    position: {
      name: 'right',
    },
    markup: [
      {
        tagName: 'text',
        selector: 'label',
        className: 'label-text',
      },
    ],
  },
  markup: [
    {
      tagName: 'circle',
      selector: 'portBody',
    },
  ],
};
