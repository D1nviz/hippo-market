import './styles.scss';

import { IoMdCheckmark } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { LuLoader2 } from 'react-icons/lu';

import { Button } from '@/components/button/Button';
import MaxWidthWrapper from '@/layouts/max-width-wrapper/MaxWidthWrapper';
import { useCart } from '@/store/cart';
import { formatPrice } from '@/utils/utils';

export default function CartPage() {
  const { items, removeItem } = useCart();
  const isLoading = false;

  const totalPrice = items.reduce((acc, item) => acc + item.product.price, 0);
  const fee = 2.99;

  return (
    <MaxWidthWrapper>
      <h1 className="cart-page__title"> Shopping Cart</h1>
      <div className="cart-page__content">
        <div className="cart-page__list">
          {items.map((item) => (
            <div className="cart-page__item" key={item.product.id}>
              <img
                src={item.product.img}
                alt={item.product.name}
                className="cart-page__item-image"
              />
              <div className="cart-page__item-details">
                <h2 className="cart-page__item-title">{item.product.name}</h2>
                <p className="cart-page__item-category">
                  {item.product.category}
                </p>
                <p className="cart-page__item-price">
                  {formatPrice(item.product.price)}
                </p>
                <p className="cart-page__item-guarantee">
                  <IoMdCheckmark color="#22C55E" size={24} />
                  Eligible for instant delivery
                </p>
              </div>
              <IoClose
                className="cart-page__item-remove"
                onClick={() => removeItem(item.product.id)}
              />
            </div>
          ))}
        </div>
        <section className="cart-page__order-summary">
          <h2 className="cart-page__order-summary-title">Order summary</h2>

          <div className="cart-page__order-summary-details">
            <div className="cart-page__order-summary-row">
              <p className="cart-page__order-summary-row-label">Subtotal</p>
              <p className="cart-page__order-summary-row-value">
                {formatPrice(totalPrice)}
              </p>
            </div>

            <div className="cart-page__order-summary-row cart-page__order-summary-row-fee">
              <div className="cart-page__order-summary-row-label">
                Flat Transaction Fee
              </div>
              <div className="cart-page__order-summary-row-value">
                {formatPrice(fee)}
              </div>
            </div>

            <div className="cart-page__order-summary-row cart-page__order-summary-row-fee">
              <div className="cart-page__order-summary-row-total">
                Order Total
              </div>
              <div className="cart-page__order-summary-row-total">
                {formatPrice(totalPrice + fee)}{' '}
              </div>
            </div>
          </div>

          <div className="cart-page__order-summary-button">
            <Button
              disabled={items.length === 0 || isLoading}
              className="cart-page__order-summary-button"
            >
              {isLoading ? (
                <LuLoader2 className="cart-page__order-summary-button-loading" />
              ) : null}
              Checkout
            </Button>
          </div>
        </section>
      </div>
    </MaxWidthWrapper>
  );
}
