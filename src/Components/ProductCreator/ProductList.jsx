
function ProductList({ products }) {
    return(
        <section className="my-5 mx-2">
        <table className="table table-info table-striped text-center">
  <thead>
    <tr>
    <th scope="col">#</th>
      <th scope="col">Code</th>
      <th scope="col">Name</th>
      <th scope="col">Cutting Diameter</th>
      <th scope="col">Connection Diameter</th>
      <th scope="col">Cutting Length</th>
      <th scope="col">Total Length</th>
      <th scope="col">Flutes</th>
      <th scope="col">Chamfer</th>
    </tr>
  </thead>
  <tbody>
    
        {products.map((tool, index) => <tr key={index}><th scope="row">{index + 1}</th><td>{tool.code}</td><td>{tool.name}</td><td>{tool.cuttingDiameter}</td><td>{tool.connectionDiameter}</td><td>{tool.cuttingLength}</td><td>{tool.totalLength}</td><td>{tool.flutes}</td><td>{tool.chamfer}</td></tr>)}
    
  </tbody>
</table>
        </section>
    )
}

export default ProductList;