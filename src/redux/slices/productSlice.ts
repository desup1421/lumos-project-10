import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategories = createAsyncThunk(
    "products/fetchCategories",
    async(_, { rejectWithValue }) => {
        try {
            const response = await axios.get("https://furniture-api-lumoshive-academy.vercel.app/api/category");
            return response.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

interface Product {
    id: number;
    title: string;
    image: string;
    price: number;
    price_after_discount: number;
}
interface Category {
    title: string;
    image: string;
}
interface InitialState {
    products: Product[];
    categories: Category[];
    loading: boolean;
    error: string | null;
}
const initialState: InitialState = {
    products: [],
    categories: [],
    loading: false,
    error: null,
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.loading = false;
            state.categories = action.payload.category;
        });
        builder.addCase(fetchCategories.rejected, (state) => {
            state.loading = false;
            state.error = "Error fetching categories";
        });
    }
})

export default productSlice.reducer;