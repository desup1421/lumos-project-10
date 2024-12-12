import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NavbarState {
  isTransparent: boolean;
}
const initialState: NavbarState = {
  isTransparent: true,
};
const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setNAvbarTransparency: (state,action: PayloadAction<boolean>) => {
      state.isTransparent = action.payload;
    },
  },
});

export const { setNAvbarTransparency } = navbarSlice.actions;
export default navbarSlice.reducer;