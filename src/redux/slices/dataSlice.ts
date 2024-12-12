import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const response = await axios.get(
    "https://furniture-api-lumoshive-academy.vercel.app/api/data"
  );
  return response.data;
});

interface Data {
  experience: string;
  country: string;
  sold: string;
  variant: string;
}

interface DataState {
  data: Data;
  loading: boolean;
  error: string | null;
}

const initialState: DataState = {
  data: {experience: "", country: "", sold: "", variant: ""},
  loading: false,
  error: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "An error occurred";
    });
  },
});

export default dataSlice.reducer;
