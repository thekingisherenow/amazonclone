import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items : [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state,action) => {
     
    },
    removeFromBasket: (state,action) => {
     
    }
    
  },
})

// Action creators are generated for each case reducer function
export const { addToBasket,removeFromBasket } = basketSlice.actions
//This is how we pull information from the global store Slice.
export const selectItems = (state) => state.basket.items; 

export default basketSlice.reducer