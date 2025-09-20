import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";

const savedCart = JSON.parse(localStorage.getItem("cart"));



const authHeader = () => ({
  headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
});

// cartSlice.js
export const fetchCart = createAsyncThunk(
  'cart/fetchCart',
  async (userId, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:8080/api/user/cart/create', {
        userId,
      });
      return response.data; // this will include cartId
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);




export const addCartItem = createAsyncThunk(
  "cart/addCartItem",
  async ({ cartId, productId, quantity }, { getState, rejectWithValue }) => {
    try {
      const token = getState().authentication.token;
      
      console.log("🚀 Sending to backend:", { cartId, productId, quantity });

      const response = await axios.post(
        "http://localhost:8080/api/user/cartItem/add",
        { cartId, productId, quantity },
        
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      

      return response.data;
      console.log("✅ Backend response:", response.data);
      
    } catch (err) {
       console.error("❌ Error adding to cart:", err.response?.data || err.message);
      return rejectWithValue(err.response?.data || "Failed to add item");
    }
  }
);


export const fetchCartItemsByUser = createAsyncThunk(
  "cart/fetchCartItemsByUser",
  async (userId, { getState, rejectWithValue }) => {
    try {
      const token = getState().authentication.token;
      const response = await axios.get(`http://localhost:8080/api/user/cartItems/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
     return response.data;
      console.log(response.data.cartItems); // <-- Ensure this returns the actual array
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch cart items");
    }
  }
);

export const updateCartItemQuantity = createAsyncThunk(
  'cart/updateCartItemQuantity',
  async({cartItemId, quantity})=>{
    const res= await axios.put(`http://localhost:8080/api/user/update/${cartItemId}?quantity=${quantity}` ,{}, authHeader());
    return res.data;
  }
);


export const deleteCartItem = createAsyncThunk(
  'cart/deleteCartItem',
  async(cartItemId) =>{
      await axios.delete(`http://localhost:8080/api/user/remove/${cartItemId}`, authHeader());
    return cartItemId;
  }
)

const cartSlice = createSlice({
    name: "cart",
    initialState: {
      cartId: localStorage.getItem("cartId") || null,
      items: [],
       status: 'idle',
    error: null,
    },

    reducers: {
    clearCartState: (state) => {
      state.cartId = null;
      state.items = [];
      state.status = 'idle';
      state.error = null;
    },
  },

  extraReducers : (builder) =>{
    builder
    .addCase(fetchCart.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
       .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cartId = action.payload.id; // 👈 Cart ID from backend
        state.items = action.payload.items || [];
         localStorage.setItem("cartId", action.payload.id);
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Could not load cart';
      })
    
    .addCase(addCartItem.pending , (state)=>{
      state.status = "loading";
    })
    .addCase(addCartItem.fulfilled, (state,action)=>{
      state.status ="succeeded";
      state.items.push(action.payload);
    })
    .addCase(addCartItem.rejected , (state,action) =>{
      state.status = "failed";
      state.error = action.error.message;
    })
    .addCase(fetchCartItemsByUser.pending, (state) => {
  state.status = 'loading';
})
.addCase(fetchCartItemsByUser.fulfilled, (state, action) => {
  state.status = 'succeeded';
  state.items = action.payload;
})
.addCase(fetchCartItemsByUser.rejected, (state, action) => {
  state.status = 'failed';
  state.error = action.error.message;
})
    .addCase(updateCartItemQuantity.pending , (state) =>{
      state.status= "loading";
    })
    .addCase(updateCartItemQuantity.fulfilled, (state,action) =>{
      const updateQuantity = action.payload;
      if (state.cart && state.cart.items) {
  const index = state.cart.items.findIndex(i => i.id === updateQuantity.id);
  if (index !== -1) {
    state.cart.items[index] = updateQuantity;
  }
}

      const itemsIndex = state.items.findIndex(i => i.id === updateQuantity.id);
  if (itemsIndex !== -1) {
    state.items[itemsIndex] = updateQuantity;
  }
      state.status ="succeeded";
    
    })
    .addCase(deleteCartItem.fulfilled, (state, action) => {
        const id = action.payload;
        state.items = state.items.filter(i => i.id !== id);
      });
  },

    
    
});

export const { clearCartState } = cartSlice.actions;
export default cartSlice.reducer;