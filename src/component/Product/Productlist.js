// import { useContext } from "react";
// import { productscontext, productscontextdispatcher } from "../../Provider/provider";
import { Useproducts, UseproductsAction } from "../../Provider/provider";

const Productlist = () => {
  const products = Useproducts();
  // const {removeHandler , decrementHandler , incrementHandler ,editHandler} = UseproductsAction();

  const dispatch = UseproductsAction();

  // const renderproduct = () => {
  //     return (
  //     products.map(pro => {
  //         return(
  //             // <div className="detail" key={pro.id}>
  //             //     <span>name: {pro.title}</span>
  //             //     <span>price: {pro.price} $</span>

  //             //     <input type="text" value={pro.title} onChange={(e)=>editHandler(pro.id , e)}/>

  //             //     <button onClick={() => incrementHandler(pro.id)}>inc</button>
  //             //     <span>{pro.quantity}</span>
  //             //     <button onClick={()=> decrementHandler(pro.id)}>dec</button>

  //             //     <button onClick={() => removeHandler(pro.id)}>delete</button>
  //             // </div>
  //             <div className="detail" key={pro.id}>
  //             <span>name: {pro.title}</span>
  //             <span>price: {pro.price} $</span>

  //             <input type="text" value={pro.title} onChange={(e)=>dispatch({type : "edit" , id : pro.id , event : e})}/>

  //             <button onClick={() => dispatch({type : "increment" , id : pro.id})}>inc</button>
  //             <span>{pro.quantity}</span>
  //             <button onClick={()=> dispatch({type : "decrement" , id : pro.id})}>dec</button>

  //             <button onClick={() => dispatch({type : "remove" , id : pro.id})}>delete</button>
  //         </div>
  //         )
  //     })
  // )}

  return (
    <div className="products">
      {/* {!products.length ? <p>there is no product for show</p> : renderproduct()} */}

      {!products.length ? (
        <p>there is nofor show ...</p>
      ) : (
        products.map((pro) => {
          return (
            <div className="detail" key={pro.id}>
              <span className="span">name: {pro.title}</span>
              <span>price: {pro.price} $</span>

              {/* <input
                type="text"
                value={pro.title}
                onChange={(e) =>
                  dispatch({ type: "edit", id: pro.id, event: e })
                }
              /> */}

              <button
                onClick={() => dispatch({ type: "increment", id: pro.id })}
              >
                inc
              </button>
              <span>{pro.quantity}</span>
              <button
                onClick={() => dispatch({ type: "decrement", id: pro.id })}
              >
                dec
              </button>

              <button onClick={() => dispatch({ type: "remove", id: pro.id })}>
                delete
              </button>
            </div>
          );
        })
      )}

    </div>
  );
};

export default Productlist;
