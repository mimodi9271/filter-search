import { useContext, useEffect, useState } from "react";
import { productscontext, Useproducts } from "../../Provider/provider";


const Navbar = () => {
    const products = Useproducts()
    const [total , setTotal] = useState(0);

    useEffect(()=>{
        let all = 0 ;
        products.forEach(item => all = all + item.quantity)
        setTotal(all);
    } , [products])

    return ( 
        <header className="header">
            <h2>the total quantity are : {total}</h2>
        </header>
     );
}
 
export default Navbar;