import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const subscribeEmail = createAsyncThunk(
  "email/subscribe",
  async (email: string, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://furniture-api-lumoshive-academy.vercel.app/api/subscribe",
        { email }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        // Tangani error dari Axios
        return rejectWithValue(
          error.response?.data.error || "Unexpected Axios error"
        );
      }
      // Tangani error lainnya
      return rejectWithValue("An unexpected error occurred");
      // return rejectWithValue(error?.response?.data);
    }
  }
);

interface EmailState {
  message: string;
  loading: boolean;
  success: boolean;
  error: string | null;
}
const initialState: EmailState = {
  message: "",
  loading: false,
  success: false,
  error: null,
};

const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(subscribeEmail.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(subscribeEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.message = action.payload;
      })
      .addCase(subscribeEmail.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error.message
          ? "This is not a valid email."
          : null;
      });
  },
});

export default emailSlice.reducer;