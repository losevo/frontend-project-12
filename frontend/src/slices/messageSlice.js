/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  channels: [],
  messages: [],
  currentChannelId: 1,
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    newMessage: (state) => console.log(state),
    initialData: (state, action) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { newMessage, initialData } = messageSlice.actions;

export default messageSlice.reducer;
