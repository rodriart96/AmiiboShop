const initialState = {
    products: [],
    cart: [],
  currentItem: null,

  };
  const ShoppinReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD":
        return {
          ...state,
          products: [...state.products, action.payload]
      };
      case "REMOVE":
        return {
          ...state,
          products: state.products.filter(product => product.id !== action.id ),
        };
      case "ADDQUANTITY":
        return {
          ...state,
          product: state.products.map( (item) =>
            item.id == action.payload.id
              ? { quantity: item.quantity++ }
              : item
          ),
        };
      case "SUBQUANTITY":
        return {
          ...state,
          product: state.products.map( (item) =>
            item.id == action.payload.id
              ? { quantity: item.quantity-- }
              : item
          ),
        };
      case 'EMPTY':
        return{
          products:[]
        }
      default:
        return state;
    }
  };
  export default ShoppinReducer;