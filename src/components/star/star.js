import { shapes } from '@clientio/rappid';

import { portsIn } from 'models/in-model';
import { portsOut } from 'models/out-model';

export class StarShape extends shapes.basic.Path {
  portDefinitions = [
    {
      group: 'in',
      attrs: { label: { text: 'in' } },
    },
    {
      group: 'in',
      attrs: { label: { text: 'in' } },
    },
    {
      group: 'in',
      attrs: { label: { text: 'in' } },
    },
    {
      group: 'out',
      attrs: { label: { text: 'out' } },
    },
    {
      group: 'out',
      attrs: { label: { text: 'out' } },
    },
    {
      group: 'out',
      attrs: { label: { text: 'out' } },
    },
  ];

  constructor(position) {
    super({
      position,
      size: { width: 100, height: 100 },
      attrs: {
        path: {
          d: 'M55.818,21.578c-0.118-0.362-0.431-0.626-0.808-0.681L36.92,18.268L28.83,1.876c-0.168-0.342-0.516-0.558-0.896-0.558s-0.729,0.216-0.896,0.558l-8.091,16.393l-18.09,2.629c-0.377,0.055-0.689,0.318-0.808,0.681c-0.117,0.361-0.02,0.759,0.253,1.024l13.091,12.76l-3.091,18.018c-0.064,0.375,0.09,0.754,0.397,0.978c0.309,0.226,0.718,0.255,1.053,0.076l16.182-8.506l16.18,8.506c0.146,0.077,0.307,0.115,0.466,0.115c0.207,0,0.413-0.064,0.588-0.191c0.308-0.224,0.462-0.603,0.397-0.978l-3.09-18.017l13.091-12.761C55.838,22.336,55.936,21.939,55.818,21.578z',
          fill: 'orange',
        },
      },
      ports: {
        groups: {
          in: portsIn,
          out: portsOut,
        },
      },
    });

    this.addPorts(this.portDefinitions);
  }
}