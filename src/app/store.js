import { configureStore } from '@reduxjs/toolkit';
import cartReducer , {getTotals} from '../features/counter/ProductSlice'
export const store = configureStore({
  reducer: {
    product: cartReducer,
  },
});

