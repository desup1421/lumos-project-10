import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Header from "../../types/Header";

export const fetchHeader = createAsyncThunk("header/fetchHeader", async () : Promise<Header> => {
  const response = await fetch("https://furniture-api-lumoshive-academy.vercel.app/api/header");
  const data = await response.json();
  return data;
});

interface InitialState {
  header: Header;
  loading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  header: {title: "", description: "", banner: ""},
  loading: false,
  error: null,
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchHeader.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchHeader.fulfilled, (state, action) => {
      state.loading = false;
      state.header = action.payload;
    });
    builder.addCase(fetchHeader.rejected, (state) => {
      state.loading = false;
      state.error = "Error fetching header";
    });
  },
});

export default headerSlice.reducer;
