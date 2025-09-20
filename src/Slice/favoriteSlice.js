import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      if (!state.favorites.find((item) => item.id === action.payload.id)) {
        state.favorites.push(action.payload);
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      }
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    loadFavoritesFromStorage: (state) => {
      state.favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    },
  },
});

export const { addFavorite, removeFavorite, loadFavoritesFromStorage } =
  favoriteSlice.actions;
export default favoriteSlice.reducer;
