import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

  import API from "../Utils/api";


export const addProduct = createAsyncThunk('products/add' , async (product, {getState}) =>{
    const token = getState().authentication.token || localStorage.getItem('token');
    const res = await API.post(
        '/admin/product/create',
        product,{
            headers: {
        Authorization: `Bearer ${token}`,
      },
        }
    );
    return res.data;
}
    
);

export const updateProduct = createAsyncThunk(
  'products/update',
  async ({ id, data }, { getState, rejectWithValue }) => {
    try {
      const token = getState().authentication.token || localStorage.getItem('token');

      const res = await API.put(
        `/admin/product/update/${id}`,
        {
          ...data,
          categoryId: Number(data.categoryId), // ensure numeric
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Update failed");
    }
  }
);




export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { getState, rejectWithValue }) => {
    try {
      const token = getState().authentication.token || localStorage.getItem('token');

      const response = await API.get(
        "/auth/all",
        {
          headers: {
            Authorization: `Bearer ${token}`, // <-- important
          },
        }
      );

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to fetch products");
    }
  }
);


export const fetchProductById = createAsyncThunk(
    'products/fetchProductById',
    async(id, {getState, rejectWithValue} ) =>{
try{ 
   const token = getState().authentication.token || localStorage.getItem('token');
    const response = await API.get(`/auth/${id}`);
    return response.data;
}catch (error) {
    return rejectWithValue(error.response?.data?.message  || "something went wrong");
}
       
    }

);

export const deleteProduct = createAsyncThunk(
  'products/delete',
  async (productId, { getState, rejectWithValue }) => {
    try {
      const token = getState().authentication.token || localStorage.getItem('token');
      console.log("deleteProduct: productId=", productId, "token present?", !!token);

      const response = await API.delete(
        `http://localhost:8080/api/admin/product/delete/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("deleteProduct response status:", response.status, response.data);
      // If API returns success, return the id to remove from state
      return productId;
    } catch (err) {
      console.error("deleteProduct error:", err);
      const payload = err?.response?.data || { message: err.message || "Delete failed" };
      return rejectWithValue(payload);
    }
  }
);


const productSlice = createSlice({
    name : "products",
    initialState:{
        data:[],
        popularFoods: [],
        loading:false,
        error:null,
        singleProduct: null,
        singleLoading: false,
        singleError: null,
    },
    reducers:{},

    extraReducers: (builder)=>{
        builder
        .addCase(fetchProducts.pending , (state)=>{
            state.loading =true;
            state.error = null;
        })
        .addCase(fetchProducts.fulfilled ,(state,action)=>{
            state.loading=false;
            state.data = action.payload;
            state.popularFoods = action.payload.slice(0, 8);
        })
        .addCase(fetchProducts.rejected ,(state,action)=>{
            state.loading=false;
            state.error = action.error?.message || "Failed to load Products";
        });


        builder
        .addCase(fetchProductById.pending, (state)=>{
            state.singleLoading = true;
            state.singleError = null;
        })
        .addCase(fetchProductById.fulfilled, (state,action)=>{
            state.singleLoading = false;
            state.singleProduct = action.payload;
        })
        .addCase(fetchProductById.rejected ,(state,action)=>{
            state.singleLoading= false;
            state.singleError = "Failed to load Products";
        })
        .addCase(updateProduct.fulfilled, (state, action) => {
  state.loading = false;
  const index = state.data.findIndex(p => p.id === action.payload.id);
  if (index !== -1) {
    state.data[index] = action.payload;
  }
})
.addCase(updateProduct.rejected, (state, action) => {
  state.loading = false;
  state.error = action.payload || "Failed to update product";
})

   .addCase(deleteProduct.fulfilled, (state, action) => {
  const idToRemove = action.payload;
  state.data = state.data.filter(p => String(p.id) !== String(idToRemove));
  state.loading = false;
})
.addCase(deleteProduct.rejected, (state, action) => {
  state.error = action.payload || "Failed to delete product";
})
    },
});

export default productSlice.reducer;