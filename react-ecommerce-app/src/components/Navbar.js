import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


export default function Navbar({ openCart, cartItemCount }) {
  return (
    <nav className="navbar">
      <h1>ShopCart</h1>
      <ul className='nav-list'>
        <li>Home</li>
        <li>Products</li>
        <li>Categories</li>
      </ul>
      <div className="cart-icon-container">
        <button onClick={openCart} className='cart-btn'>
          <FontAwesomeIcon icon={faShoppingCart} />
          {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
        </button>
      </div>
    </nav>
  );
}

