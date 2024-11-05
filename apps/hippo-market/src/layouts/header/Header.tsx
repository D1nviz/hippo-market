import './styles.scss';

import { FaCartShopping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

import Logo from '@/components/logo/Logo';
import { useCart } from '@/store/cart';

import MaxWidthWrapper from '../max-width-wrapper/MaxWidthWrapper';

export default function Header() {
  const { items } = useCart();
  const itemCount = items.length;

  return (
    <header className="header">
      <MaxWidthWrapper className="header__wrapper">
        <div className="header__content">
          <Link to="/" className="header__logo">
            <Logo />
          </Link>
          <Link to="/cart" className="header__cart">
            <FaCartShopping aria-hidden="true" className="header__cart-icon" />
            <span className="header__cart-count">{itemCount}</span>
          </Link>
        </div>
      </MaxWidthWrapper>
    </header>
  );
}
