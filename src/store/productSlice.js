import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = import.meta.env.VITE_API_URL;

// this sets up a sunction that will rune async and return something
export const getProducts = createAsyncThunk('GET/products', async () => {
  //  make an async request
  const response = await fetch(`${url}/products`);
  console.log(response);
  const json = await response.json();
  console.log(json);
  return json.results;
})

export const updateProduct = createAsyncThunk(
  "PUT/product/:id",
  async ({ product, amount }) => {
    const updatedProduct = { ...product, inStock: product.inStock + amount };

    const response = await fetch(`${url}/products/${product._id}`, {
      method: "PUT",
      body: JSON.stringify(updatedProduct),
      headers: { "Content-Type": "application/json" },
    });

    const json = await response.json();
    return json;
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState: {
    productData: [],
    selectedProduct: undefined,

  },
  reducers: {
    //name of action to dispatch, state, action
    showProduct: (state, action) => {
      //when action occurs we do:
      state.selectedProduct = action.payload;
    },
    setCategory: (state, action) => {
      state.selectedCategory = action.payload
    },
  },
  // acts like a switch case and listens for that anync function to be run
  extraReducers: (builder) => {
    //fulfilled = knows its going to get back a promise
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.productData = action.payload;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const updatedProduct = action.payload;
        const index = state.products.findIndex(
          (p) => p._id === updatedProduct._id
        )
        state.productData[index] = updatedProduct
      })
  }
});

export default productSlice;