import './styles.scss';

import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Skeleton from '@/components/skeleton/Skeleton';
import { Product } from '@/types/Product';
import { formatPrice } from '@/utils/utils';

type ProductListingProps = {
  product: Product | null;
  index: number;
};

export default function ProductList({ product, index }: ProductListingProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 75);

    return () => clearTimeout(timer);
  }, [index]);

  if (!product || !isVisible) return <ProductPlaceholder />;

  if (isVisible && product) {
    return (
      <Link
        className={classNames('product-list__link', {
          'product-list__link--visible': isVisible,
        })}
        to={`/products/${product.id}`}
      >
        <div className="product-list__content">
          <img
            className="product-list__content-image"
            src={product.img}
            alt={product.name}
          />
          <h3 className="product-list__content-name">{product.name}</h3>
          <p className="product-list__content-category"> {product.category}</p>
          <p className="product-list__content-price">
            {formatPrice(product.price)}
          </p>
        </div>
      </Link>
    );
  }

  return <div />;
}

const ProductPlaceholder = () => {
  return (
    <div className="product-list__placeholder">
      <Skeleton className="product-list__placeholder-image" />
      <Skeleton className="product-list__placeholder-skeleton" />
      <Skeleton className="product-list__placeholder-skeleton product-list__placeholder-skeleton--small" />
      <Skeleton className="product-list__placeholder-skeleton product-list__placeholder-skeleton--tiny" />
    </div>
  );
};
