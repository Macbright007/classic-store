import React, { createContext, useEffect, useState } from "react";
import Axios from "axios"

export const API_url = "https://fakestoreapi.com/products";
const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
    const[products, setProducts] = useState([])


    const fetchProducts = async () => {
        try {
            const result = await Axios.get(API_url);
            setProducts(result.data)
            console.log(result.data)
        }
        catch (error) {
            throw error
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])


  return <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>
};

export default ProductContext;
