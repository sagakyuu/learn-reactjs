import { createSlice, configureStore } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
  },
});

const loginSlice = createSlice({
  name: "login",
  initialState: { status: false },
  reducers: {
    login(state) {
      state.status = true;
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    login: loginSlice.reducer,
  },
});

store.subscribe(() => console.log("oncreate dispatch store", store.getState()));

store.dispatch(
  cartSlice.actions.addToCart({ id: 1, qty: 20 }),
  loginSlice.actions.login()
);
