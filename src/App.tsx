import React, { useCallback, useEffect, useMemo } from 'react';

import { dia, shapes } from '@clientio/rappid';
import AddIcon from '@mui/icons-material/Add';
import RedoIcon from '@mui/icons-material/Redo';
import UndoIcon from '@mui/icons-material/Undo';
import { Toolbar, AppBar, Button, Stack } from '@mui/material';

import { Dashboard } from 'components/dashboard/dashboard';
import { useAppDispatch } from 'configs/hooks';

import 'styles/app.scss';

function App() {
  const dispatch = useAppDispatch();

  const graph = useMemo(() => new dia.Graph({}, { cellNamespace: shapes }), []);
  const commandManager = useMemo(() => new dia.CommandManager({ graph }), [graph]);
  const dashboard = useMemo(() => new Dashboard(graph, commandManager), [commandManager, graph]);

  const handleAdd = useCallback(() => dashboard.add(), [dashboard]);
  const handleUndo = useCallback(() => dashboard.undo(), [dashboard]);
  const handleRedo = useCallback(() => dashboard.redo(), [dashboard]);

  useEffect(() => {
    dashboard.create();
  }, [dispatch, dashboard]);

  return (
    <div className="app">
      <AppBar position="static" color="primary">
        <Toolbar>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={handleAdd} startIcon={<AddIcon />} color="success">
              ADD
            </Button>
            <Button
              variant="contained"
              onClick={handleUndo}
              startIcon={<UndoIcon />}
              color="warning"
            >
              UNDO
            </Button>
            <Button
              variant="contained"
              onClick={handleRedo}
              startIcon={<RedoIcon />}
              color="warning"
            >
              REDO
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      <div id="dashboard" />
    </div>
  );
}

export default App;
