  import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
 
  import API from "../Utils/api";

  export const addAddress = createAsyncThunk(
    'address/addAddress',
    async (addressData, { rejectWithValue, getState }) => {
      try {
        const token = getState().authentication.token;
        
        const response = await API.post(
          '/user/address/add',
          addressData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data || err.message);
      }
    }
  );


  export const getAddress = createAsyncThunk('address/getAddress',
      async(_, {getState}) =>{
        const token = getState().authentication.token;
      const response = await API.get("/user/address/list", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    }
  );

  export const deleteAddress = createAsyncThunk('address/deleteAddress',
      async(addressId,{getState})=>{
          const token = getState().authentication.token;
      await API.delete(`/user/address/delete/${addressId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return addressId; // return deleted ID for removal from state
    }
  );

  const addressSlice = createSlice({
    name: 'address',
    initialState: {
      addresses: [],
      loading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(addAddress.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(addAddress.fulfilled, (state, action) => {
          state.loading = false;
          state.addresses.push(action.payload);
        })
        .addCase(addAddress.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
        .addCase(getAddress.pending, (state) => {
          state.loading = true;
        })
        .addCase(getAddress.fulfilled, (state, action) => {
          state.loading = false;
          state.addresses = action.payload;
        })
        .addCase(getAddress.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
        .addCase(deleteAddress.pending, (state) => {
          state.loading = true;
        })
        .addCase(deleteAddress.fulfilled, (state, action) => {
          state.loading = false;
          state.addresses = state.addresses.filter(addr => addr.id !== action.payload);
        })
        .addCase(deleteAddress.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });

  export default addressSlice.reducer;
      

