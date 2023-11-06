import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/ProductList.css';
import { Product } from '../interfaces/Product'

function ProductList() {
    const [data, setData] = useState<{ products: Product[] }>({ products: [] });
    const [search, setSearch] = useState<string>('');
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/products');
                setData(response.data);
                setProducts(response.data.products);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleDelete = (productId: number) => {
        const updatedProducts = products.filter((product) => product.id !== productId);
        setProducts(updatedProducts);
    };

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="productList">
            <h1 className="title">Product List</h1>
            <input
                type="text"
                placeholder="Search products"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="searchInput"
            />
            <ul>
                {filteredProducts.map((product) => (
                    <li key={product.id} className="productListItem">
                        <Link to={`/product/${product.id}`} className="productLink">
                            <span className="productName">{product.title}</span>
                        </Link>
                        <button
                            className="deleteButton"
                            onClick={() => handleDelete(product.id)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;
