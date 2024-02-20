import { useReducer } from "react"
import { cartReducer, initialState } from "./CartReducer";
import { CartContext } from "./CartContext";


export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}