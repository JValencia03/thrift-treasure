const apiUrl = 'https://dummyjson.com/products?limit=0'

export const fetchProducts = async () => {
  try {
    const response = await fetch(apiUrl)
    const data = await response.json()

    const products = data.products

    return products?.map(product => ({
      id: product.id,
      thumbnail: product.thumbnail,
      title: product.title,
      price: product.price,
      category: product.category
    }))
  } catch (e) {
    throw new Error('Products not found')
  }
}
