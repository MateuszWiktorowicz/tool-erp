import React, { useState, useEffect } from "react";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";


function ProductCreator() {
    const [ products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3333/tools')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const handleAddProduct = (newProduct) => {
        setProducts(prevProducts => [...prevProducts, newProduct]);
    }

    return(
        <>
        <ProductForm onAddProduct={handleAddProduct} products={products}/>
        <ProductList products={products}/>
        </>
    )
}

export default ProductCreator;