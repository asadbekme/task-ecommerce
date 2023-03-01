import {
  createSlice
} from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
  totalAmount: 0,
  totalQuantity: 0
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const newProduct = action.payload;
      const existingProduct = state.cartProducts.find((product) => product.id === newProduct.id);
      state.totalQuantity += 1;
      if (!existingProduct) {
        state.cartProducts.push({
          id: newProduct.id,
          productName: newProduct.productName,
          imgUrl: newProduct.imgUrl,
          price: newProduct.price,
          quantity: 1,
          totalPrice: newProduct.price
        });
      } else {
        existingProduct.quantity += 1;
        existingProduct.totalPrice = Number(existingProduct.totalPrice) + Number(newProduct.price);
      }

      state.totalAmount = state.cartProducts.reduce((total, product) => total + Number(product.price) * Number(product.quantity), 0);
      console.log(state.totalQuantity);
      console.log(state.totalAmount);
      console.log(newProduct);
    },

    deleteProduct: (state, action) => {
      const id = action.payload;
      const existingProduct = state.cartProducts.find((product) => product.id === id);
      if (existingProduct) {
        state.cartProducts = state.cartProducts.filter((product) => product.id !== id);
        state.totalQuantity = state.totalQuantity - existingProduct.quantity;
      }

      state.totalAmount = state.cartProducts.reduce((total, product) => total + Number(product.price) * Number(product.quantity), 0);
    }
  }
});

export const {
  addProduct,
  deleteProduct
} = cartSlice.actions;
export default cartSlice.reducer;