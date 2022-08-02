import { createSlice } from '@reduxjs/toolkit';

import { RootState } from 'configs/store';

export interface WorkFlowState {
  workflow: Array<string>;
}

const initialState: WorkFlowState = {
  workflow: [],
};

export const workflowSlice = createSlice({
  name: 'workflowStore',
  initialState,
  reducers: {
    workflowAction: (state, action) => {
      state.workflow = action.payload;
    },
  },
});

export const { workflowAction } = workflowSlice.actions;

export const getWorkflow = (state: RootState) => state.workflowStore;

export default workflowSlice.reducer;
