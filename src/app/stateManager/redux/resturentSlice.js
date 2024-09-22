// features/restaurants/restaurantSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRestaurants = createAsyncThunk(
  'restaurants/fetchRestaurants',
  async ({ page = 1, limit = 5 }) => {
    const response = await axios.get(`http://localhost:5001/restaurants?_page=${page}&_limit=${limit}`);
    console.log(response.data);
    return response.data;
  }
);

const restaurantSlice = createSlice({
  name: 'restaurants',
  initialState: {
    loading: false,
    restaurants: [],
    error: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurants.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.loading = false;
        state.restaurants = action.payload;
        state.error = '';
      })
      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.loading = false;
        state.restaurants = [];
        state.error = action.error.message;
      });
  },
});

export default restaurantSlice.reducer;
