import { createContext , useState } from "react";

export const ProductContext = createContext({})

export const ProductProvider = (props) =>{
    let [productsGlobal, setProductsGlobal] = useState();


    const productStore = {productsGlobal, setProductsGlobal}
    return(
        <ProductContext.Provider value={productStore}>
            {props.children}
        </ProductContext.Provider>
    )
}