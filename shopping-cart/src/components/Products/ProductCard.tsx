import React from 'react';
import type { Product } from '../../app/productsApi';
import styles from './Products.module.css';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className={styles.productCard}>
            <div>
              <img src={product.thumbnail} alt={product.title} className={styles.thumbnail} />   
            </div>
            <div>
                <h5 className={styles.title}>{product.title}</h5>
                <a href="#" className={styles.category}>{product.category}</a>
                <div className={styles.priceContainer}>
                    <h5 className={styles.price}>${product.price}</h5>
                    <h5 className={styles.discount}>${product.discountPercentage}</h5>
                </div>
            </div> 
        </div>
    );
};

export default ProductCard;