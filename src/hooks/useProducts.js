import { useState, useEffect } from 'react'
import { fetchProducts } from '../services/fetchProducts'
export function useProducts () {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const getProducts = async () => {
    try {
      const newProducts = await fetchProducts()
      setProducts(newProducts)
    } catch {
      throw new Error('No products available')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return { products, loading }
}
