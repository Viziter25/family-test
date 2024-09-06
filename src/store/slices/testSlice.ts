import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [] as Array<{ id: number; color: string }>,
};

export const testSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem: (state) => {
      const newItem = {
        id: Date.now(),
        color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      };
      state.items.unshift(newItem);
    },
    removeItem: (state) => {
      state.items.pop();
    },
  },
});

export const { addItem, removeItem } = testSlice.actions;
