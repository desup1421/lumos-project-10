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

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async(page: number, { rejectWithValue }) => {
        try {
            const response = await axios.get(`https://furniture-api-lumoshive-academy.vercel.app/api/products?page=${page}&limit=8`);
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
    price_after_discount: number | null;
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
    productPage: number;
    totalProductPages: number;
}
const initialState: InitialState = {
    products: [],
    categories: [],
    loading: false,
    error: null,
    productPage: 1,
    totalProductPages: 1,
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // CATEGORIES
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

        // PRODUCTS
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload.products;
            state.productPage = action.payload.page;
            state.totalProductPages = action.payload.totalPages;
        });
        builder.addCase(fetchProducts.rejected, (state) => {
            state.loading = false;
            state.error = "Error fetching products";
        });
    }

})

export default productSlice.reducer;