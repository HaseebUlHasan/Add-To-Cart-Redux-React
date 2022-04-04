import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: [],
  cart: [],
  total: 0,
  qty: 0,
};

export const CartSlice = createSlice({
  name: "product",
  initialState,

  reducers: {
    addDetail: (state, action) => {
      state.item.push(action.payload);
    },

    cartDetail: (state, action) => {
      const exist = state.cart.findIndex((c) => c.id === action.payload.id);

      if (exist >= 0) {
        state.cart[exist].cartqty = state.cart[exist].cartqty + 1;
      } else {
        const cartItem = { ...action.payload, cartqty: 1 };
        state.cart.push(cartItem);
      }
    },
    subCart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cart[itemIndex].cartqty > 1) {
        state.cart[itemIndex].cartqty = state.cart[itemIndex].cartqty - 1;

      } else if (state.cart[itemIndex].cartqty === 1) {
         state.cart.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },

    getTotals(state) {
      let { total, quantity } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, cartqty } = cartItem;
          const itemTotal = price * cartqty;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartqty;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseInt(total);
      state.qty = quantity;
      state.total = total;
    },
    removeItem(state , action) {
     return {
      ...state,
     cart : state.cart.filter((r) => r.id !== action.payload.id)
     }
    },
  },
});

export const { addDetail, cartDetail, subCart , getTotals , removeItem} = CartSlice.actions;

export default CartSlice.reducer;
