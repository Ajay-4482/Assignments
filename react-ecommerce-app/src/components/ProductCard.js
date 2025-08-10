import { useState } from "react";

const ProductCard = ({product, addToCart}) => {
    const [quantity, setQuantity] = useState(1);

    return (
        
        <div className="product-card">
            
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <div className="tag-price">
                <span className="tag">{product.category}</span>
                <p className="price">₹{product.price.toFixed(2)}</p>
            </div>
            <div className="qty">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <button onClick={() => addToCart(product, quantity)} className="add-btn">🛒 Add to Cart</button>
        </div>
    );
}

export default ProductCard;