import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTestimonials = createAsyncThunk(
  "testimonials/fetchTestimonials",
  async (page: number) => {
    const response = await axios.get(
      `https://furniture-api-lumoshive-academy.vercel.app/api/testimonials?page=${page}&limit=1`
    );
    return response.data;
  }
);

interface Testimonial {
  id: number;
  name: string;
  message: string;
  title: string;
  image: string;
}
interface TestimonialState {
  testimonials: Testimonial;
  loading: boolean;
  error: string | null;
  testimonialPage: number;
  totalTestimonialPages: number;
}
const initialState: TestimonialState = {
  testimonials: {id: 0, name: "", message: "", title: "", image: ""},
  loading: false,
  error: null,
  testimonialPage: 1,
  totalTestimonialPages: 1,
};

const testimonialSlice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTestimonials.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTestimonials.fulfilled, (state, action) => {
        state.loading = false;
        state.testimonials = action.payload.testimonials[0];
        state.testimonialPage = action.payload.page;
        state.totalTestimonialPages = action.payload.totalPages;
      })
      .addCase(fetchTestimonials.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default testimonialSlice.reducer;
