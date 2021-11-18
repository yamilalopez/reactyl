import { useState, createContext, useContext } from 'react'

export const CartContext = createContext ([]);

export const useCartContext = () => useContext (CartContext);

const CartContextProvider = ({children}) =>{

    const [cart, setCart] = useState([]);

    const addItem = (item , qty) =>{
        if(cart.some(el => el.id === item.id)){
            
            let index = cart.findIndex(el => el.id === item.id);
            let product = cart[index];
            product.qty = product.qty + qty;

            const newCart = [...cart];
            newCart.splice( index, 1, product );

            setCart([ ...newCart ]);
            console.log(cart);

        }else{
            let product = {...item, qty};
            setCart([...cart, product ]);
        }
    }

    return(
        <CartContext.Provider value={{
            cart,
            addItem,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider