import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';

import { schema } from './schema';


function ProductForm({ onAddProduct, products }) {

    const { 
        register, 
        handleSubmit,
        formState: {errors},
        reset,
        setError
    } = useForm({ 
            mode: "all",
            resolver: zodResolver(schema) 
        });


        const onSubmit = async (data) => {
            const lastProduct = Array.isArray(products) && products.length > 0 
        ? products[products.length - 1]
        : { id: '0' }; 

  
    const newId = String(parseInt(lastProduct.id, 10) + 1);
        
            const newProduct = {
                id: newId,
                code: data.code,
                name: data.name,
                cuttingDiameter: parseFloat(data.cuttingDiameter),
                connectionDiameter: parseFloat(data.connectionDiameter),
                cuttingLength: parseFloat(data.cuttingLength),
                totalLength: parseFloat(data.totalLength),
                flutes: parseInt(data.flutes, 10),
                chamfer: parseFloat(data.chamfer),
            };
        
            try {
                const response = await fetch('http://localhost:3333/tools', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newProduct),
                });
        
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
        
                const responseData = await response.json();
                onAddProduct(responseData);
                
                reset(); 
        
            } catch (error) {
                console.error('Error adding product:', error);
            }
        };

    return(
        <section className="my-5 mx-2">
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <h1>Tool creator form</h1>
            <div className="p-3 d-flex justify-content-center"><img src="../public/tool-image.JPG" alt="tool-image"/></div>
            
        </div>
        <div className="row g-3">
            <div className="col-6">
                <input {...register("code")} type="text" className="form-control" name="code" placeholder="Code" aria-label="Code" />
                {errors.code && (<div style={{ color: 'red' }}>{errors.code.message}</div>)}
            </div>
            <div className="col-6">
                <input {...register("name")} type="text" className="form-control"  name="name" placeholder="Name" aria-label="Name" autoComplete="name" />
                {errors.name && (<div style={{ color: 'red' }}>{errors.name.message}</div>)}
            </div>
            <div className="col-6">
                <input {...register("cuttingDiameter")} type="number" step="0.01" min="0.1" className="form-control" name="cuttingDiameter" placeholder="Cutting Diameter" aria-label="Cutting Diameter" />
                {errors.cuttingDiameter && (<div style={{ color: 'red' }}>{errors.cuttingDiameter.message}</div>)}
            </div>
            <div className="col-6">
                <input {...register("connectionDiameter")} type="number" step="1" min="1" className="form-control" name="connectionDiameter" placeholder="Connection Diameter" aria-label="Connection Diameter" />
                {errors.connectionDiameter && (<div style={{ color: 'red' }}>{errors.connectionDiameter.message}</div>)}
            </div>
            <div className="col-6">
                <input {...register("cuttingLength")} type="number" step="1" min="1" className="form-control" name="cuttingLength" placeholder="Cutting Length" aria-label="Cutiing Length" />
                {errors.cuttingLength && (<div style={{ color: 'red' }}>{errors.cuttingLength.message}</div>)}
            </div>
            <div className="col-6">
                <input {...register("totalLength")} type="number" step="1"  className="form-control" name="totalLength" placeholder="Total Length" aria-label="Total Length" />
                {errors.totalLength && (<div style={{ color: 'red' }}>{errors.totalLength.message}</div>)}
            </div>
            <div className="col-6">
                <input {...register("flutes")} type="number" step="1" min="1" className="form-control" name="flutes" placeholder="Flutes" aria-label="Flutes" />
                {errors.flutes && (<div style={{ color: 'red' }}>{errors.flutes.message}</div>)}
            </div>
            <div className="col-6">
                <input {...register("chamfer")} type="number" step="0.01" min="0" className="form-control" name="chamfer" placeholder="Chamfer" aria-label="Chamfer" />
                {errors.chamfer && (<div style={{ color: 'red' }}>{errors.chamfer.message}</div>)}
            </div>
            <div className="d-flex col-12 justify-content-center">
                <button type="submit" onClick={handleSubmit} className="btn btn-success">Add tool</button>
            </div>
        </div>
    </form>
    </section>
    )
}

export default ProductForm;