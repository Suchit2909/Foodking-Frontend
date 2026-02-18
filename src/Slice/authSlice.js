import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../Utils/api";



export const loginUser = createAsyncThunk(
  'authentication/loginUser',
  async (formData, thunkAPI) => {
    const { dispatch } = thunkAPI;

    try {
      const response = await API.post("/auth/login", formData);

       return response.data;


    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Login failed');
    }
  }
);

export const registerUser = createAsyncThunk('authentication/registerUser', async(userData,{rejectWithValue})=>{
    try {
        const response = await API.post('/auth/register', userData);
        console.log('Registration API success:', response.data);  
    return response.data;
    } catch (error) {
      console.log('Registration error:', error); 
        return rejectWithValue(error.response?.data || 'Registration failed');
        
    }
});

export const verifyOtp = createAsyncThunk(
    "auth/verifyOtp",
    async ({ email, otp }, { rejectWithValue }) => {
      try {
        const response = await API.post("/auth/verify", { email, otp });
        console.log('Verify otp:', response.data);  
        return response.data;
      } catch (err) {
        console.log('Verify error:', err);
        return rejectWithValue(
  err.response?.data?.message || "OTP verification failed"
);
      }
    }
  );

  export const regenerateOtp = createAsyncThunk(
    "auth/regenerateOtp",
    async (email, { rejectWithValue }) => {
      try {
        const response = await API.post("/auth/regenerateOtp", null, {
          params: { email }
        });
        console.log('OTP regeneration successful:', response.data);
        return response.data;  // Return the success response (e.g., message)
      } catch (error) {
        console.log('OTP regeneration failed:', error);
        return rejectWithValue(error.response?.data || "Failed to regenerate OTP");
      }
    }
  );

const authSlice = createSlice({
    name:"authentication",
    initialState:{
        username :localStorage.getItem('username') || "",
        token: localStorage.getItem('token') || null,
        role:  localStorage.getItem('role') || null,
        cartId: localStorage.getItem('cartId') || null,
         userId: localStorage.getItem('userId') || null,
        loading: false,
        error: null,
        otpVerified: false,
        otpRegenerated: false,
    },
    reducers:{
        logout:(state)=>{
            localStorage.removeItem('token');
            localStorage.removeItem('role');
            localStorage.removeItem('cartId');
            localStorage.removeItem('username');
            state.token = null;
            state.role = null;
            state.username = null;
            state.email = null;
            state.error = null;
            state.cartId = null;
            state.loading = false;
            state.otpVerified = false;
            state.otpRegenerated = false; 
        }
    },
    extraReducers: (builder) =>{
        builder
        .addCase(loginUser.pending, (state) =>{
            state.loading = true;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          console.log("Login success block hit");
         const { token, username, userId, role, cart } = action.payload;
         state.loading = false;
      state.token = token;
      state.username = username;
      state.userId = userId;
      state.role = role;
      state.cartId = cart?.id || null;

       console.log("Login fulfilled payload:", action.payload);

       localStorage.setItem("token", token);
  localStorage.setItem("username", username);
  localStorage.setItem("userId", userId);
  localStorage.setItem("role", role);
  localStorage.setItem("cartId", cart?.id || "");
 
      })

          .addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Login failed';
          });
          builder
          .addCase(registerUser.pending, (state) => {
            state.loading = true;
            state.error = '';
          })
          .addCase(registerUser.fulfilled, (state,action) => {
            state.loading = false;
            state.data = action.payload;
            console.log('User registration successful:', action.payload); 
          })
          .addCase(registerUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })
          .addCase(verifyOtp.pending, (state) => {
            state.loading = true;
            state.error = "";
          })
          .addCase(verifyOtp.fulfilled, (state, action) => {
            state.loading = false;
            state.otpVerified = true;  // Set OTP verification status to true
            console.log("OTP verification successful:", action.payload);
          })
          .addCase(verifyOtp.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || "OTP verification failed";
            state.otpVerified = false;  // Set OTP verification status to false on failure
          })
          .addCase(regenerateOtp.pending, (state) => {
            state.loading = true;
            state.error = "";
            state.otpRegenerated = false; // Reset regeneration status
          })
          .addCase(regenerateOtp.fulfilled, (state, action) => {
            state.loading = false;
            state.otpRegenerated = true; // OTP successfully regenerated
            console.log("OTP regeneration successful:", action.payload);
          })
          .addCase(regenerateOtp.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || "OTP regeneration failed";
            state.otpRegenerated = false;
          });
    }
   
});

export const{logout} = authSlice.actions;
export default authSlice.reducer;