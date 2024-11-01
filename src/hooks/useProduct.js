import { useEffect, useState } from "react";
import axios from "axios";

export function useProduct(search = null) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios
      .get("http://localhost:3000/data/products.json")
      .then((res) => {
        let filteredProducts = res.data.products;
        if (search?.tag) {
          filteredProducts = filteredProducts.filter(
            (product) => product.tag === search.tag
          );
        }
        if (search?.id)
          filteredProducts = filteredProducts.filter(
            (product) => product.id === search.id
          );
        setProducts(filteredProducts);
        setLoading(false);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [search?.id, search?.tag]);

  return { products, error, loading };
}
