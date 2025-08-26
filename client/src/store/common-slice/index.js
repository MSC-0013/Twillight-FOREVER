import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:5000";

const initialState = {
  isLoading: false,
  featureImageList: [],
  error: null,
};

// Fetch all feature images
export const getFeatureImages = createAsyncThunk(
  "/common/getFeatureImages",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${SERVER_URL}/api/common/feature/get`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to fetch feature images");
    }
  }
);

// Add a new feature image
export const addFeatureImage = createAsyncThunk(
  "/common/addFeatureImage",
  async (image, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${SERVER_URL}/api/common/feature/add`, { image });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to add feature image");
    }
  }
);

const commonSlice = createSlice({
  name: "commonSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFeatureImages.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getFeatureImages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.featureImageList = action.payload.data;
      })
      .addCase(getFeatureImages.rejected, (state, action) => {
        state.isLoading = false;
        state.featureImageList = [];
        state.error = action.payload;
      })
      .addCase(addFeatureImage.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addFeatureImage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.featureImageList.push(action.payload.data);
      })
      .addCase(addFeatureImage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default commonSlice.reducer;
