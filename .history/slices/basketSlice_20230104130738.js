import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items : [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state,action) => {
     state.items = [...state.items,action.payload]
    },
    removeFromBasket: (state,action) => {
     //yo list bata./ state.items bata action.paylaod hataunu paryo.
     const index = state.items.findIndex((item) => item.id === action.payload.id);
     let newBasket = [...state.items]
     if (index>=0){
      newBasket.splice(index,1)
     }
     else {
      console.warn(`Can't remove product (id: ${action.payload.id} as it isnot in the checkout list)`)
     }
     state.items = newBasket
    }
    
  },
})

// Action creators are generated for each case reducer function
export const { addToBasket,removeFromBasket } = basketSlice.actions
//This is how we pull information from the global store Slice.
export const selectItems = (state) => state.basket.items; 

export default basketSlice.reducer