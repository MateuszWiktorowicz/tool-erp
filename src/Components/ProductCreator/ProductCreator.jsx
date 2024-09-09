import React, { useState, useEffect } from "react";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";


function ProductCreator() {
    const [ products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://157.230.115.216:3333/tools')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, [products]);

    const handleAddProduct = (newProduct) => {
        setProducts(prevProducts => [...prevProducts, newProduct]);
    }

    const handleDeleteProduct = (id) => {
        fetch(`http://157.230.115.216:3333/tools/${id}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                console.log(`Successfully deleted item with id: ${id}`);
            } else {
                console.error('Failed to delete the item');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return(
        <>
        <ProductForm onAddProduct={handleAddProduct} products={products}/>
        <ProductList handleDeleteProduct={handleDeleteProduct} products={products}/>
        </>
    )
}

export default ProductCreator;