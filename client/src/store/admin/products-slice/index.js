import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:5000";

const initialState = {
  isLoading: false,
  productList: [],
  error: null,
};

export const addNewProduct = createAsyncThunk(
  "/products/addnewproduct",
  async (formData, { rejectWithValue }) => {
    try {
      const result = await axios.post(`${SERVER_URL}/api/admin/products/add`, formData, {
        headers: { "Content-Type": "application/json" },
      });
      return result.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to add product");
    }
  }
);

export const fetchAllProducts = createAsyncThunk(
  "/products/fetchAllProducts",
  async (_, { rejectWithValue }) => {
    try {
      const result = await axios.get(`${SERVER_URL}/api/admin/products/get`);
      return result.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to fetch products");
    }
  }
);

export const editProduct = createAsyncThunk(
  "/products/editProduct",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const result = await axios.put(`${SERVER_URL}/api/admin/products/edit/${id}`, formData, {
        headers: { "Content-Type": "application/json" },
      });
      return result.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to edit product");
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "/products/deleteProduct",
  async (id, { rejectWithValue }) => {
    try {
      const result = await axios.delete(`${SERVER_URL}/api/admin/products/delete/${id}`);
      return result.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to delete product");
    }
  }
);

const AdminProductsSlice = createSlice({
  name: "adminProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productList = action.payload.data;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.productList = [];
      });
  },
});

export default AdminProductsSlice.reducer;
