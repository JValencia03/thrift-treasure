import { Products } from './components/Products'
import { Header } from './components/Header'
import { useFilters } from './hooks/useFilter'
import { Cart } from './components/Cart'
import { CartProvider } from './context/cart.jsx'
import { useProducts } from './hooks/useProducts'

function App () {
  const { products, loading } = useProducts()
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
      <Cart />
      <Header />
      <Products products={filteredProducts} loading={loading} />
    </CartProvider>
  )
}

export default App
