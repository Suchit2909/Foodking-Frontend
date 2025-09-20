import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async () => {
        const response = await axios.get('http://localhost:8080/api/auth/category');
        return response.data;
    }
);

export const fetchcategoriesById = createAsyncThunk(
    'categories/fetchcategoriesById', 
    async(categoryId, {rejectWithValue}) =>{
        try {
            const response = await axios.get(`http://localhost:8080/api/auth/categories/${categoryId}`);
            console.log(response.data);
        return response.data;
        
            
        } catch (error) {
            return rejectWithValue(error.response?.data || "something went wrong");
            
        }
        
    }
);

const categorySlice = createSlice({
    name: 'categories',
    initialState: {
        data:[],
        loading: false,
        error: null,
        categoriesId: null,
        categoryLoding: false,
        categoryError:null ,
    },
    reducers: {},

    extraReducers: (builder) =>{
        builder
        .addCase(fetchCategories.pending , (state)=>{
            state.loading = true;
        state.error = null;
        })
        .addCase(fetchCategories.fulfilled ,(state,action) =>{
            state.loading = false;
        state.data = action.payload;
        })
        .addCase(fetchCategories.rejected, (state, action) => {
            state.loading = false;
            state.error = 'Failed to load categories';
          });
          
          builder
          .addCase(fetchcategoriesById.pending ,(state)=>{
            state. categoryLoding= true;
            state.categoryError= null;
          })
          .addCase(fetchcategoriesById.fulfilled ,(state,action) =>{
            state. categoryLoding = false;
        state.categoriesId = action.payload;
        })
        .addCase(fetchcategoriesById.rejected, (state, action) => {
            state. categoryLoding = false;
            state.categoryError = action.payload;
          });
    },
});

export default categorySlice.reducer;