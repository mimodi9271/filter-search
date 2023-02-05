import React, { useContext, useReducer, useState } from "react";
import Allproducts from "../db/Allproducts";
import _ from "lodash";

const productscontext = React.createContext();
const productscontextdispatcher = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "remove": {
      const filterproducts = state.filter((item) => item.id !== action.id);
      return filterproducts;
    }
    case "increment": {
      const index = state.findIndex((item) => item.id == action.id);
      const selecteditem = { ...state[index] };
      selecteditem.quantity++;
      const allpro = [...state];
      allpro[index] = selecteditem;
      return allpro;
    }
    case "decrement": {
      const index = state.findIndex((item) => item.id == action.id);
      const selecteditem = { ...state[index] };
      if (selecteditem.quantity == 1) {
        const filterproducts = state.filter((item) => item.id !== action.id);
        return filterproducts;
      } else {
        selecteditem.quantity--;
        const allpro = [...state];
        allpro[index] = selecteditem;
        return allpro;
      }
    }
    case "edit": {
      const index = state.findIndex((item) => item.id == action.id);
      const selecteditem = { ...state[index] };
      selecteditem.title = action.event.target.value;
      const allpro = [...state];
      allpro[index] = selecteditem;
      return allpro;
    }
    case "filter": {
      // console.log(action.event.target.value)
      if (action.selectedoption.value == "") {
        return Allproducts;
      } else {
        const allpro = Allproducts.filter((pro) =>
          pro.availablesize.includes(action.selectedoption.value)
        );
        return allpro;
      }
    }
    case "sort": {
      const product = [...state];
      if (action.selectedoption.value == "highest") {
        return _.orderBy(product, "price", "desc");
      }else{
        return _.orderBy(product, "price", "asc");
      }
    }
    case "search": {
      if(action.event.target.value == ""){
        return state;
      }else{
        const searchselected = state.filter(item => item.title.toLowerCase().includes(action.event.target.value.toLowerCase()));
        return searchselected
      }
    }
    default:
      return state;
  }
};

const Provider = ({ children }) => {
  //   const [products, setProducts] = useState(Allproducts);
  const [products, dispatch] = useReducer(reducer, Allproducts);

  return (
    <productscontext.Provider value={products}>
      <productscontextdispatcher.Provider value={dispatch}>
        {children}
      </productscontextdispatcher.Provider>
    </productscontext.Provider>
  );
};

export default Provider;

export const Useproducts = () => useContext(productscontext);

export const UseproductsAction = () => useContext(productscontextdispatcher);

// export const UseproductsAction = () => {
//   const setProducts = useContext(productscontextdispatcher);
//   const products = Useproducts();

//   const removeHandler = (id) => {
//     const filterproducts = products.filter((item) => item.id !== id);
//     setProducts(filterproducts);
//   };

//   const decrementHandler = (id) => {
//     const index = products.findIndex((item) => item.id == id);
//     const selecteditem = { ...products[index] };
//     if (selecteditem.quantity == 1) {
//       removeHandler(id);
//     } else {
//       selecteditem.quantity--;
//       const allpro = [...products];
//       allpro[index] = selecteditem;
//       setProducts(allpro);
//     }
//   };

//   const incrementHandler = (id) => {
//     const index = products.findIndex((item) => item.id == id);
//     const selecteditem = { ...products[index] };
//     selecteditem.quantity++;
//     const allpro = [...products];
//     allpro[index] = selecteditem;
//     setProducts(allpro);
//   };

//   const editHandler = (id , e)=>{
//     const index = products.findIndex((item) => item.id == id);
//     const selecteditem = { ...products[index] };
//     selecteditem.title = e.target.value;
//     const allpro = [...products];
//     allpro[index] = selecteditem;
//     setProducts(allpro);
//   }

//   return { removeHandler, decrementHandler, incrementHandler , editHandler };
// };
