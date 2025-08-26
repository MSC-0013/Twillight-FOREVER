import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_SERVER_URL;

const initialState = {
  isLoading: false,
  orderId: null,
  orderList: [],
  orderDetails: null,
};

export const createNewOrder = createAsyncThunk(
  "/order/createNewOrder",
  async (orderData) => {
    const response = await axios.post(`${BASE_URL}/api/shop/order/create`, orderData);
    return response.data;
  }
);

export const getAllOrdersByUserId = createAsyncThunk(
  "/order/getAllOrdersByUserId",
  async (userId) => {
    const response = await axios.get(`${BASE_URL}/api/shop/order/list/${userId}`);
    return response.data;
  }
);

export const getOrderDetails = createAsyncThunk(
  "/order/getOrderDetails",
  async (id) => {
    const response = await axios.get(`${BASE_URL}/api/shop/order/details/${id}`);
    return response.data;
  }
);

const shoppingOrderSlice = createSlice({
  name: "shoppingOrderSlice",
  initialState,
  reducers: {
    resetOrderDetails: (state) => { state.orderDetails = null; },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createNewOrder.pending, (state) => { state.isLoading = true; })
      .addCase(createNewOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orderId = action.payload._id;
        sessionStorage.setItem("currentOrderId", JSON.stringify(action.payload._id));
      })
      .addCase(createNewOrder.rejected, (state) => { state.isLoading = false; state.orderId = null; })
      .addCase(getAllOrdersByUserId.pending, (state) => { state.isLoading = true; })
      .addCase(getAllOrdersByUserId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orderList = action.payload.data;
      })
      .addCase(getAllOrdersByUserId.rejected, (state) => { state.isLoading = false; state.orderList = []; })
      .addCase(getOrderDetails.pending, (state) => { state.isLoading = true; })
      .addCase(getOrderDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orderDetails = action.payload.data;
      })
      .addCase(getOrderDetails.rejected, (state) => { state.isLoading = false; state.orderDetails = null; });
  },
});

export const { resetOrderDetails } = shoppingOrderSlice.actions;

export default shoppingOrderSlice.reducer;
