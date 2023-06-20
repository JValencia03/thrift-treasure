import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'
import './Cart.css'

function CartItem ({ thumbnail, title, price, quantity, addToCart }) {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>

      <footer>
        <small>
          Qty: {quantity}
        </small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}

export function Cart () {
  const { cart, clearCart, addToCart } = useCart()
  const checkIdCart = useId()

  return (
    <>
      <label className='cart-button' htmlFor={checkIdCart}>
        <CartIcon />
      </label>
      <input onClick={() => console.log('Clicked')} type='checkbox' id={checkIdCart} hidden />
      <aside className='cart'>
        <ul>
          {
            cart.map(product => (
              <CartItem key={product.id} {...product} addToCart={() => addToCart(product)} />
            ))
          }
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
