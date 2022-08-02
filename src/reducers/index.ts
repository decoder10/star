import { combineReducers } from 'redux';

import workflowStore from 'reducers/workflow-reducer';

const appReducer = combineReducers({
  workflowStore,
});

export default appReducer;
