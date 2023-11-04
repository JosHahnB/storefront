import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const url = import.meta.env.VITE_API_URL;


export const getCategories = createAsyncThunk('GET/categories', async () => {
  //  make an async request
  const response = await fetch(`${url}/categories`);
  const json = await response.json();
  return json.results;
})

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categories: [],
    selectedCategory: ''
  },
  reducers: {
    //name of action to dispatch, state, action
    setCategory: (state, action) => {
      state.selectedCategory = action.payload
    },

  },
  extraReducers: (builder) => {
    //fulfilled = knows its going to get back a promise
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    })
  }

});

export default categorySlice