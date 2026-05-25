function ProductCard({product}) {
    return (
        <article className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="product-card-content">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <span>${product.price}</span>
        
            </div>
        </article>
    )
    
}

export default ProductCard;