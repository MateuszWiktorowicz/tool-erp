import React, { useState } from "react";


function ProductForm() {
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

    return(
        <section className="my-5 mx-2">
    <form>
        <div className="row g-3">
            <div className="col">
                <input type="text" className="form-control" value={code} onChange={handleCodeChange} name="code" placeholder="Code" aria-label="Code" />
            </div>
            <div className="col">
                <input type="text" className="form-control" value={name} onChange={handleNameChange} name="name" placeholder="Name" aria-label="Name" autoComplete="name" />
            </div>
            <div className="col">
                <input type="number" step="0.01" min="0.1" className="form-control" value={cuttingDiameter} onChange={handleCuttingDiameter} name="cuttingDiameter" placeholder="Cutting Diameter" aria-label="Cutting Diameter" />
            </div>
            <div className="col">
                <input type="number" step="1" min="1" className="form-control" value={connectionDiameter} onChange={handleConnectionDiameterChange} name="connectionDiameter" placeholder="Connection Diameter" aria-label="Connection Diameter" />
            </div>
            <div className="col">
                <input type="number" step="1" min="1" className="form-control" value={cuttingLength} onChange={handleCuttingLengthChange} name="cuttingLength" placeholder="Cutting Length" aria-label="Cutiing Length" />
            </div>
            <div className="col">
                <input type="number" step="1" min="20" className="form-control" value={totalLength} onChange={handleTotalLengthChange} name="totalLength" placeholder="Total Length" aria-label="Total Length" />
            </div>
            <div className="col">
                <input type="number" step="1" min="1" className="form-control" value={flutes} onChange={handleFlutesChange} name="flutes" placeholder="Flutes" aria-label="Flutes" />
            </div>
            <div className="col">
                <input type="number" step="0.01" min="0" className="form-control" value={chamfer} onChange={handleChamferChange} name="chamfer" placeholder="Chamfer" aria-label="Chamfer" />
            </div>
            <div className="d-flex col-12 justify-content-center">
                <button type="submit" className="btn btn-success">Add tool</button>
            </div>
        </div>
    </form>
    </section>
    )
}

export default ProductForm;