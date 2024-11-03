import './styles.scss';

import { IoMdCheckmark } from 'react-icons/io';
import { IoShieldOutline } from 'react-icons/io5';
import { Link, useParams } from 'react-router-dom';

import { Button } from '@/components/button/Button';
import ProductReel, { mockProducts } from '@/features/product-reel/ProductReel';
import MaxWidthWrapper from '@/layouts/max-width-wrapper/MaxWidthWrapper';
import { formatPrice } from '@/utils/utils';

const breadCrumbs = [
  { id: 1, name: 'Home', href: '/' },
  { id: 2, name: 'Products', href: '/products' },
];

const Page = () => {
  const { productId } = useParams();

  const product = mockProducts.find((product) => product.id === productId);

  if (!product) {
    return <MaxWidthWrapper>Product not found</MaxWidthWrapper>;
  }
  return (
    <MaxWidthWrapper className="product-page">
      <div className="product-page__content">
        <div className="product-page__product">
          <div className="product-page__breadcrumbs">
            {breadCrumbs.map((breadcrumb, i) => (
              <li
                key={breadcrumb.href}
                className="product-page__breadcrumbs-item"
              >
                <div className="product-page__breadcrumbs-item">
                  <Link
                    to={breadcrumb.href}
                    className="product-page__breadcrumbs-item-link"
                  >
                    {breadcrumb.name}
                  </Link>
                  {i !== breadCrumbs.length - 1 ? (
                    <span className="product-page__breadcrumbs-item-separator">
                      {' '}
                      /
                    </span>
                  ) : null}
                </div>
              </li>
            ))}
          </div>
          <h1 className="product-page__product-title">{product.name}</h1>
          <div className="product-page__product-details">
            <p className="product-page__product-price">
              {formatPrice(product.price)}
            </p>
            |
            <p className="product-page__product-category">{product.category}</p>
          </div>
          <p className="product-page__product-description">
            {product.description}
          </p>
          <span className="product-page__product-guarantee">
            <IoMdCheckmark color="#22C55E" size={24} />
            Eligible for instant delivery
          </span>
          <Button className="product-page__product-button">Add to cart</Button>
          <p className="product-page__product-return">
            <IoShieldOutline />
            30 Day Return Guarantee
          </p>
        </div>

        <img
          className="product-page__product-img"
          src={product.img}
          alt={product.name}
        />
      </div>

      <ProductReel
        href="/products"
        query={{ category: product?.category, limit: 4 }}
        title={`Similar ${product?.category}`}
        subtitle={`Browse similar high-quality ${product?.category} just like '${product?.name}'`}
      />
    </MaxWidthWrapper>
  );
};

export default Page;
