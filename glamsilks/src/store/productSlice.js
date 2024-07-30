import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async()=>{
    const response = await fetch('/api/products');
    return response.json();
});

const productSlice = createSlice({
    name:"products",
    initialState:{
        items:[],
        status:'idle',},
        reducers:{},
        extraReducers:(builder)=>{
    },
});