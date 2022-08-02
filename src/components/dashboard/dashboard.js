import { dia, shapes } from '@clientio/rappid';

import { StarShape } from 'components/star/star';

export class Dashboard {
  constructor(graph, commandManager) {
    this.graph = graph;
    this.commandManager = commandManager;
    this.positionIncrement = 0;
  }

  create() {
    const paper = new dia.Paper({
      el: document.getElementById('dashboard'),
      frozen: true,
      model: this.graph,
      height: 'calc(100vh - 64px)',
      width: '100vw',
      gridSize: 10,
      drawGrid: true,
      background: {
        color: 'rgba(18, 18, 18, 0.7)',
      },
      markAvailable: true,
      linkPinning: false,
      cellViewNamespace: shapes,
      defaultLink: () =>
        new shapes.standard.Link({
          attrs: {
            wrapper: {
              cursor: 'default',
            },
          },
        }),
      defaultConnectionPoint: { name: 'boundary' },
      validateConnection(cellViewS, magnetS, cellViewT, magnetT) {
        if (cellViewS === cellViewT) return false;

        return magnetT && magnetT.getAttribute('port-group') === 'in';
      },
      validateMagnet(cellView, magnet) {
        return magnet.getAttribute('magnet') !== 'passive';
      },
    });

    paper.unfreeze();
  }

  add() {
    const star = new StarShape({ x: 150 + this.positionIncrement, y: 100 });

    this.graph.addCell(star);

    this.positionIncrement += 20;
  }

  undo() {
    this.commandManager.undo();
  }

  redo() {
    this.commandManager.redo();
  }
}
