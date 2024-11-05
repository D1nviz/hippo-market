import './styles.scss';

import { Button } from '@/components/button/Button';
import ProductReel from '@/features/product-reel/ProductReel';
import MaxWidthWrapper from '@/layouts/max-width-wrapper/MaxWidthWrapper';

export default function Home() {
  const apiUrl = import.meta.env.VITE_API_URL;

  console.log('API URL:', apiUrl);

  return (
    <MaxWidthWrapper>
      <div className="home">
        <h1 className="home__title">
          Your marketplace for high-quality
          <span className="home__title--highlight"> digital assets</span>
        </h1>
        <p className="home__description">
          Welcome to Digital Marketplace. Every asset on our platform is
          verified by our team to ensure our highest quality standards.
        </p>
        <div className="home__actions">
          <Button>Browse Trending</Button>
          <Button variant="outline">Our quality promise &rarr;</Button>
        </div>
      </div>
      <ProductReel
        query={{ sort: 'desc', limit: 4 }}
        title="Brand new"
        href="#"
      />
    </MaxWidthWrapper>
  );
}
