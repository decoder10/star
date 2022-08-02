export const portsIn = {
  position: {
    name: 'left',
  },
  attrs: {
    portBody: {
      magnet: 'passive',
      r: 10,
      fill: '#023047',
      stroke: '#023047',
    },
    label: {
      fill: 'white',
    },
  },
  label: {
    position: {
      name: 'left',
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
