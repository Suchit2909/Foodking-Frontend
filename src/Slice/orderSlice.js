import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const placeOrder = createAsyncThunk('order/placeOrder',async({orderRequest,cartUserId},{thunkAPI,getState})=>{
    try{
        const token = getState().authentication.token;
        const response = await axios.post(`http://localhost:8080/auth/user/order/place?cartUserId=${cartUserId}`,
        orderRequest,
    {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
           return response.data;
    }catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data || err.message);
        
    }
});

export const fetchOrdersByUserId = createAsyncThunk(
  "orders/fetchByUserId",
  async (userId, { getState, rejectWithValue }) => {
    try {
      const token = getState().authentication.token;
      const response = await axios.get(
        `http://localhost:8080/auth/user/order/user/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data; // should be a List<Order>
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch orders.");
    }
  }
);

// 2️⃣ Fetch Single Order by Order ID
export const fetchLatestOrderByUserId = createAsyncThunk(
  "orders/fetchLatest",
  async (_, { getState, rejectWithValue }) => {
    try {
      const token = getState().authentication.token;
      const response = await axios.get(
        `http://localhost:8080/auth/user/order/latest`, // No userId passed
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch latest order.");
    }
  }
);



const orderSlice = createSlice({
  name: 'order',
  initialState: {
  loading: false,
  orders: [],
  selectedOrder: null,  
  latestOrder: null,    
  successMessage: null,
  error: null,
},
  reducers: {
    clearOrderStatus: (state) => {
  state.successMessage = null;
  state.error = null;
  state.latestOrder = null; //
}
  },
  extraReducers: (builder) => {
    builder
      .addCase(placeOrder.pending, (state) => {
        state.loading = true;
        state.successMessage = null;
        state.error = null;
      })
      .addCase(placeOrder.fulfilled, (state, action) => {
  state.loading = false;
  state.successMessage = "Order placed successfully!";
  state.latestOrder = action.payload; 
})
      .addCase(placeOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchOrdersByUserId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrdersByUserId.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
         
      })
      .addCase(fetchOrdersByUserId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
       .addCase(fetchLatestOrderByUserId.pending, (state) => {
  state.loading = true;
  state.error = null;
})
.addCase(fetchLatestOrderByUserId.fulfilled, (state, action) => {
  state.loading = false;
  state.latestOrder = action.payload;
})
.addCase(fetchLatestOrderByUserId.rejected, (state, action) => {
  state.loading = false;
  state.error = action.payload;
});
  },
});

export const { clearOrderStatus } = orderSlice.actions;
export default orderSlice.reducer;