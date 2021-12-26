
export const addToCart = (product) => {
    return {
      type: "ADD",
      payload: product

    };
  };
  export const removeFromCart = (id) => {
    return {
      type: "REMOVE",
      id,
    };
  };
  export const subtractQuantity = (id,quantity) => {
    return {
      type: "SUBQUANTITY",
      payload:{
        id,
        quantity
      }
    };
  };
  export const addQuantity = (id,quantity) => {
    return {
      type: "ADDQUANTITY",
      payload:{
        id,
        quantity
      }
        
    };
  };
  export const emptyCart = () => {
    return {
      type: "EMPTY",
    };
  };