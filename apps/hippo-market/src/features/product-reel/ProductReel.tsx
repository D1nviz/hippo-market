import './styles.scss';

import { Link } from 'react-router-dom';

import { Product } from '@/types/Product';
import { TQueryValidator } from '@/utils/validators/query-validator';

import ProductList from '../products-list/ProductList';

type ProductReelProps = {
  title: string;
  subtitle?: string;
  href?: string;
  query: TQueryValidator;
};

const FALLBACK_LIMIT = 4;
export const mockProducts: Product[] = [
  {
    id: '1',
    img: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_1280.jpg',
    name: 'Product 1',
    category: 'Category 1',
    price: 19.99,
    description: 'Description 1',
  },
  {
    id: '2',
    img: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_1280.jpg',
    name: 'Product 2',
    category: 'Category 2',
    price: 29.99,
    description: 'Description 1',
  },
  {
    id: '3',
    img: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_1280.jpg',
    name: 'Product 3',
    category: 'Category 3',
    price: 39.99,
    description: 'Description 1',
  },
  {
    id: '4',
    img: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_1280.jpg',
    name: 'Product 4',
    category: 'Category 4',
    price: 49.99,
    description: `Download Free Icons and Stickers for your projects. Resources made by
and for designers. PNG, SVG, EPS, PSD and CSS formats.`,
  },
  {
    id: '5',
    img: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_1280.jpg',
    name: 'Product 5',
    category: 'Category 5',
    price: 59.99,
    description: 'Description 1',
  },
];

export default function ProductReel({
  title,
  subtitle,
  href,
  query,
}: ProductReelProps) {
  const isLoading = true;
  const products = mockProducts;
  let map: (Product | null)[] = [];

  if (products && products.length) {
    map = products.slice(0, query.limit ?? FALLBACK_LIMIT);
  } else if (isLoading) {
    map = new Array<null>(query.limit ?? FALLBACK_LIMIT).fill(null);
  }

  return (
    <section className="product-reel">
      <div className="product-reel__header">
        <div className="product-reel__header-title">
          {title ? (
            <h1 className="product-reel__header-title-main">{title}</h1>
          ) : null}
          {subtitle ? (
            <p className="product-reel__header-title-subtitle">{subtitle}</p>
          ) : null}
        </div>
        {href ? (
          <Link to={href} className="product-reel__header-link">
            Shop the collection
            <span aria-hidden="true">&rarr;</span>
          </Link>
        ) : null}
      </div>
      <div className="product-reel__content">
        <div className="product-reel__content-grid">
          {map.map((product, index) => (
            <ProductList key={product?.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
