import { configureStore, createSlice } from '@reduxjs/toolkit'

let quantity = createSlice({
  name: 'quantity',
  initialState: 1,
  reducers: {
    increase(state){
      return state = state + 1;
    },
    decrease(state){
      if(state <= 1){
        return state = 1;
      } else{
        return state = state -1;
      }
    }
  }
}
)
export let { increase, decrease} = quantity.actions;

let cart = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addCart(state, actions){
      return state.push(actions.payload);
    },
    removeCartItem(state, action){
      return state.slice(action.payload, 1);
    }
  }
})
export let { addCart, removeCartItem } = cart.actions;

export default configureStore({
  reducer: {
    quantity : quantity.reducer,
    cart : cart.reducer
  }
}) 