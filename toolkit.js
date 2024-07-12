import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const addToCart = createAction("ADD_TO_CART");
const login = createAction("CREATE_SESSION");

const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

const loginReducer = createReducer([], (builder) => {
  builder.addCase(login, (state, action) => {
    state.push(action.payload);
  });
});

const store = configureStore({
  reducer: {
    cart: cartReducer,
    login: loginReducer,
  },
});

console.log("oncreate store", store.getState());

const action = addToCart({ id: 1, qty: 10 });
const login1 = login({ token: "asdasdasdu389r23njnjkslkd" });
store.subscribe(() => console.log("oncreate dispatch store", store.getState()));
store.dispatch(action);
store.dispatch(login1);
