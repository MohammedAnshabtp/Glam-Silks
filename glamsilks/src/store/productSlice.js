import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async()=>{
    const response = await fetch('/api/products');
    if(!response.ok){
        throw new Error('Something went wrong!');
    }
    const data = await response.json();
    return data;
});

const productSlice = createSlice({
    name:"products",
    initialState:{
        items:[],
        status:'idle',},
        reducers:{},
        extraReducers:(builder)=>{
            builder
            .addCase(fetchProducts.pending,(state)=>{
                state.status = 'loading';
            }
            )
            .addCase(fetchProducts.fulfilled,(state,action)=>{
                state.status = 'succeeded';
                state.items = action.payload;
            });
    },
});

export default productSlice.reducer;