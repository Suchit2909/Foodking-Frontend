import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

  import API from "../Utils/api";

const authHeader = () => ({
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
});

// -------------------- THUNKS --------------------

export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (userId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().authentication.token;

      if (!token) {
        throw new Error("No auth token found");
      }

      const response = await API.post(
        "/user/cart/create",
        { userId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || error.message
      );
    }
  }
);

export const addCartItem = createAsyncThunk(
  "cart/addCartItem",
  async ({ cartId, productId, quantity }, { getState, rejectWithValue }) => {
    try {
      const token = getState().authentication.token;

      const response = await API.post(
        "/user/cartItem/add",
        { cartId, productId, quantity },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to add item");
    }
  }
);

export const fetchCartItemsByUser = createAsyncThunk(
  "cart/fetchCartItemsByUser",
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const token = state.authentication.token;
      const userId = state.authentication.userId;

      if (!token || !userId) {
        return rejectWithValue("User not logged in");
      }

      const response = await API.get(
        `/user/cartItems/${userId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch cart items");
    }
  }
);

export const updateCartItemQuantity = createAsyncThunk(
  "cart/updateCartItemQuantity",
  async ({ cartItemId, quantity }) => {
    const res = await API.put(
      `/user/update/${cartItemId}?quantity=${quantity}`,
      {},
      authHeader()
    );
    return res.data;
  }
);

export const deleteCartItem = createAsyncThunk(
  "cart/deleteCartItem",
  async (cartItemId) => {
    await API.delete(
      `/user/remove/${cartItemId}`,
      authHeader()
    );
    return cartItemId;
  }
);

// -------------------- SLICE --------------------

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartId: localStorage.getItem("cartId") || null,
    items: [],
    status: "idle",
    error: null,
  },

  reducers: {
    clearCart: (state) => {
      state.cartId = null;
      state.items = [];
      state.status = "idle";
      state.error = null;
      localStorage.removeItem("cartId");
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.status = "idle";
        state.cartId = action.payload.id;
        state.items = action.payload.items || [];
        localStorage.setItem("cartId", action.payload.id);
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      .addCase(addCartItem.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })

      .addCase(fetchCartItemsByUser.fulfilled, (state, action) => {
        state.items = action.payload;
      })

      .addCase(updateCartItemQuantity.fulfilled, (state, action) => {
        const idx = state.items.findIndex(i => i.id === action.payload.id);
        if (idx !== -1) state.items[idx] = action.payload;
      })

      .addCase(deleteCartItem.fulfilled, (state, action) => {
        state.items = state.items.filter(i => i.id !== action.payload);
      });
  },
});

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;
