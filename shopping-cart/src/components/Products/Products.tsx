import { useState } from 'react';
import { useGetProductsQuery } from '../../app/productsApi';
import ProductCard from './ProductCard';
import styles from './Products.module.css';

const Products = () => {
    const { data, isLoading, isError } = useGetProductsQuery();
    const products = data?.products ?? [];
    const [visibleCount, setVisibleCount] = useState<number>(10);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 5);
    };

    if (isLoading) return <p className={styles.text}>Loading products...</p>
    if (isError) return <p className={styles.text}>Error loading products.</p>

    return (
        <>
            <div className={styles.container}>
                <div className={styles.description}>
                    <h4>Featured Products</h4>
                    <h3>BESTSELLER PRODUCTS</h3>
                    <p>Problems trying to resolve the conflict between </p>
                </div>
                <div className={styles.productContainer}>
                    {products.slice(0, visibleCount).map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {visibleCount < products.length && (
                    <div>
                        <button onClick={handleLoadMore} className={styles.button}>LOAD MORE PRODUCTS</button>
                    </div>
                )}
            </div>
        </>
    );
};

export default Products;