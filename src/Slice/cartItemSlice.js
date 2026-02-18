  import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
  import axios from "axios";




export const getGuestCart = () => JSON.parse(localStorage.getItem('cartitems')) || [];

export const saveGuestCart = (items) => localStorage.setItem('cartitems', JSON.stringify(items));





 export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async ({ cartId, productId, quantity }, { getState, rejectWithValue }) => {
    const { isGuest } = getState().cart;
    const token = getState().authentication.token;

    if (isGuest) {
      console.log("Adding to guest cart...");
      let guestItems = getGuestCart();
      console.log("Existing guest items:", guestItems);
      const existingIndex = guestItems.findIndex(
        (i) => i.productId === productId
      );
      if (existingIndex !== -1) {
        guestItems[existingIndex].quantity += quantity;
      } else {
        try{
          const productRes = await axios.get(`  localhost:8080/auth/food/${productId}`);
    const product = productRes.data;

    guestItems.push({
      productId,
      quantity,
      id: productId,
      product, // save full product info inside item
    });
  } catch (error) {
    console.error("Failed to fetch product data for guest cart:", error);
    return rejectWithValue("Failed to fetch product data");
  }
      }
      console.log("Updated guest items:", guestItems);
      saveGuestCart(guestItems);
      return guestItems;
    } else {
      try {
        const response = await axios.post(
          "http://localhost:8080/auth/user/cartItem/add",
          {
            cartId,
            productId,
            quantity,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        return {
          addedItem: response.data,
          cartId,
        };
      } catch (error) {
        return rejectWithValue(error.response?.data || "Add to cart failed");
      }
    }
  }
);

 export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (_, { getState }) => {
    const state = getState();
    const { isGuest, cartId } = state.cart;
    const { token } = state.authentication;

    console.log("💡 [getCartItems] Triggered with:", {
      isGuest,
      cartId,
      token,
    });

    if (isGuest) {
      return getGuestCart();
    }

    if (!cartId) {
      throw new Error("Cart ID is missing for logged-in user.");
    }

    const response = await axios.get(
      `http://localhost:8080/auth/user/cartItem/items/${cartId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return {
      items: response.data,
      cartId,
    };
  }
);


  export const updateCartItem = createAsyncThunk(
    "cart/updateCartItem",
    async ({ productId,id, quantity }, { getState, rejectWithValue }) => {
      const state = getState();
    
      
      const { isGuest } = getState().cart;
      const { token } = getState().authentication;

      if (isGuest) {
        console.log("Updating guest cart item", productId, quantity);
        let guestItems = getGuestCart();
        guestItems = guestItems.map((item) =>
          item.productId === productId ? { ...item, quantity } : item
        );
        saveGuestCart(guestItems);
        console.log("Updating guest cart item", productId, quantity);
        
        return guestItems ;
      } else {
         if (!id) return rejectWithValue("Cart item ID is missing.");
        const res = await axios.put(
          `http://localhost:8080/auth/user/cartItem/update/${id}`,
          { quantity },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        console.log("Guest thunk running for",  quantity);
        return{
          updatedItem: res.data,
          id: getState().cart.cartId,
          isGuest: false,
        } ;
      }
    }
  );

  export const clearCartItems = createAsyncThunk(
    "cart/clearCartItems",
    async (cartItemId, { getState, rejectWithValue }) => {
      const { isGuest } = getState().cart;
      const { token } = getState().authentication;

      if (isGuest) {
        let guestItems = getGuestCart();
        guestItems = guestItems.filter((item) => item.id !== cartItemId);
        saveGuestCart(guestItems);
        return guestItems;
      } else {
        try {
          const response = await axios.delete(
            `http://localhost:8080/auth/user/cartItem/remove/${cartItemId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          return {removedId: cartItemId, cartId: getState().cart.cartId};
        } catch (error) {
          return rejectWithValue(error.response?.data || "Failed to clear cart");
        }
      }
    }
  );
  const token = localStorage.getItem("token");

  const initialState = {
    cartId: localStorage.getItem("cartId") || null,
    items: token ? [] : getGuestCart(),
    status: "idle",
     loading: false,
    error: null,
    isGuest: !token,
    totalPrice: 0,
  };

  

  const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
      setGuestMode: (state, action) => {
        state.isGuest = action.payload;
        if (action.payload) {
          state.items = getGuestCart();
        }else {
        state.items = [];
      }
      },
      
      clearCart: (state) => {
        state.items = [];
        state.cartId = null;
  state.loading = false;
  state.error = null;
        
       

      },
      setCartId: (state, action) => {
        state.cartId = action.payload;
          localStorage.setItem("cartId", action.payload);
   
      },
     
    },
    extraReducers: (builder) => {
      builder
      .addCase(getCartItems.pending, (state) => {
      state.loading = true;
    })

        .addCase(getCartItems.fulfilled, (state, action) => {
          if (state.isGuest) {
            state.items = action.payload || [];
            state.loading = false;
          } else {
            state.items = action.payload.items || [];
            state.cartId = action.payload.cartId;
            state.totalPrice = action.payload.totalPrice || 0;
            console.log(action.payload.totalPrice); 
            state.loading = false;
          }
  
        })
         .addCase(getCartItems.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.error = action.error.message;
    })

        // When adding an item to the cart, check if it exists already
        .addCase(addToCart.fulfilled, (state, action) => {
          if (state.isGuest) {
              state.items = action.payload;
          } else {
            const {addedItem , cartId} = action.payload;
            
            const existing = state.items?.find(item => item.product.id === addedItem.product.id);

    if (existing) {
      existing.quantity += addedItem.quantity;
    } else {
      state.items?.push(addedItem);
    }

    state.cartId = cartId;
          }
        })

      
        .addCase(updateCartItem.fulfilled, (state, action) => {
          if (state.isGuest) {
            state.items = action.payload;

          } else {
            const  { updatedItem } = action.payload;
            state.items = state.items.map(item =>
              item.product.id === updatedItem.product.id ? updatedItem : item
            );
          }
        })
        .addCase(updateCartItem.rejected, (state, action) => {
  console.log("Update cart item rejected:", action.payload || action.error);
})
        .addCase(clearCartItems.pending, (state) => {
          state.status = "loading";
          state.error = null;
        })
        .addCase(clearCartItems.fulfilled, (state, action) => {
         
          if (state.isGuest) {
           state.items = action.payload;
          } else {
           
            const removedId = action.payload.removedId;

    state.items = state.items.filter(item => item.id !== removedId);
          }
        
         
        })
        .addCase(clearCartItems.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.payload || "Failed to delete item";
        });
    },
  });

  export const {setGuestMode, setCartId,  clearCart } = cartSlice.actions;

  export default cartSlice.reducer;
