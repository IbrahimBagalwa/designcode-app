import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MenuState {
  operation: string;
}
const initialState: MenuState = {
  operation: "",
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    openMenu: (state, action: PayloadAction<string>) => {
      state.operation = action.payload;
    },
    closeMenu: (state, action: PayloadAction<string>) => {
      state.operation = action.payload;
    },
  },
});
export const { openMenu, closeMenu } = menuSlice.actions;
export default menuSlice.reducer;
