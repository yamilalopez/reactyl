import { useState , createContext, useContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)

function CartContextProvider({children}){
    const [cartList , setCartList] = useState([])

    const agregarItem= (item) => {
        setCartList ([...cartList , item])
    }

function vaciarCart() {
    setCartList([])
}

    return(
        <CartContext.Provider value= {{
            cartList ,
            agregarItem ,
            vaciarCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider