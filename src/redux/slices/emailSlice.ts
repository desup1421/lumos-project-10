import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const subsribeEmail = createAsyncThunk("email/subscribe", 
    async (email: string, { rejectWithValue }) => {
  try {
    const response = await axios.post(
      "https://furniture-api-lumoshive-academy.vercel.app/api/subscribe",
      { email }
    );
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error?.response?.data);
  }
});

interface EmailState {
  message: string;
  loading: boolean;
  error: string | null;
}
const initialState: EmailState = {
  message: "",
  loading: false,
  error: null,
};

const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(subsribeEmail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(subsribeEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase(subsribeEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default emailSlice.reducer;