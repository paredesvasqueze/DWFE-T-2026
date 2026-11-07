export default function CardProducto({
    id,category,name,stock,imageUrl
})
{
 return (
    <div className="product-card">
  <div className="product-image-container">
    <img src={imageUrl} alt={name} className="product-image" />
    <span className="product-category">{category}</span>
  </div>
  
  <div className="product-info">
    <span className="product-id">Ref: #{id}</span>
    <h3 className="product-name">{name}</h3>
    
    <div className="product-footer">
      <span className="product-stock">Stock: <strong>{stock}</strong></span>
      <button className="product-btn">Ver más</button>
    </div>
  </div>
</div>

 )
}
    