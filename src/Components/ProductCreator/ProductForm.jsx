import React, { useState } from "react";


function ProductForm({ onAddProduct, products }) {
    const [ code, setCode ] = useState("");
    const [ name, setName ] = useState("");
    const [ cuttingDiameter, setCuttingDiameter ] = useState("");
    const [ connectionDiameter, setConnectionDiameter ] = useState("");
    const [ cuttingLength, setCuttingLength ] = useState("");
    const [ totalLength, setTotalLength ] = useState("");
    const [ flutes, setFlutes ] = useState("");
    const [ chamfer, setChamfer ] = useState("");

    function handleCodeChange(event) {
        setCode(event.target.value);
    }

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleCuttingDiameter(event) {
        setCuttingDiameter(event.target.value);
    }

    function handleConnectionDiameterChange(event) {
        setConnectionDiameter(event.target.value);
    }

    function handleCuttingLengthChange(event) {
        setCuttingLength(event.target.value);
    }

    function handleTotalLengthChange(event) {
        setTotalLength(event.target.value);
    }

    function handleFlutesChange(event) {
        setFlutes(event.target.value);
    }

    function handleChamferChange(event) {
        setChamfer(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const id = parseInt(products[products.length -1].id) + 1;
        console.log(products);

        const newProduct = {
            id,
            code,
            name,
            cuttingDiameter,
            connectionDiameter,
            cuttingLength,
            totalLength,
            flutes,
            chamfer,
        };

        fetch('http://localhost:3333/tools', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProduct),
        })
            .then(response => response.json())
            .then(data => {
                onAddProduct(data); 
                setCode('');
                setName('');
                setCuttingDiameter('');
                setConnectionDiameter('');
                setCuttingLength('');
                setTotalLength('');
                setFlutes('');
                setChamfer('');
            })
            .catch(error => console.error('Error adding product:', error));

    };

    return(
        <section className="my-5 mx-2">
    <form>
        <div className="row g-3">
            <div className="col">
                <input type="text" className="form-control" value={code} onChange={handleCodeChange} name="code" placeholder="Code" aria-label="Code" required/>
            </div>
            <div className="col">
                <input type="text" className="form-control" value={name} onChange={handleNameChange} name="name" placeholder="Name" aria-label="Name" autoComplete="name" required />
            </div>
            <div className="col">
                <input type="number" step="0.01" min="0.1" className="form-control" value={cuttingDiameter} onChange={handleCuttingDiameter} name="cuttingDiameter" placeholder="Cutting Diameter" aria-label="Cutting Diameter" required />
            </div>
            <div className="col">
                <input type="number" step="1" min="1" className="form-control" value={connectionDiameter} onChange={handleConnectionDiameterChange} name="connectionDiameter" placeholder="Connection Diameter" aria-label="Connection Diameter" required />
            </div>
            <div className="col">
                <input type="number" step="1" min="1" className="form-control" value={cuttingLength} onChange={handleCuttingLengthChange} name="cuttingLength" placeholder="Cutting Length" aria-label="Cutiing Length" required />
            </div>
            <div className="col">
                <input type="number" step="1" min="20" className="form-control" value={totalLength} onChange={handleTotalLengthChange} name="totalLength" placeholder="Total Length" aria-label="Total Length" required />
            </div>
            <div className="col">
                <input type="number" step="1" min="1" className="form-control" value={flutes} onChange={handleFlutesChange} name="flutes" placeholder="Flutes" aria-label="Flutes" required />
            </div>
            <div className="col">
                <input type="number" step="0.01" min="0" className="form-control" value={chamfer} onChange={handleChamferChange} name="chamfer" placeholder="Chamfer" aria-label="Chamfer" required />
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