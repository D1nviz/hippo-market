import './styles.scss';

import classNames from 'classnames';
import { FaArrowRight } from 'react-icons/fa6';
import { LuLoader2 } from 'react-icons/lu';
import { Link } from 'react-router-dom';

import { Button } from '@/components/button/Button';
import { Input } from '@/components/input/Input';
import Label from '@/components/label/Label';
import Logo from '@/components/logo/Logo';

export default function SignInPage() {
  const errors = {
    email: { message: '' },
    password: { message: '' },
  };

  const isLoading = false;

  return (
    <div className="sign-in__container">
      <div className="sign-in__content">
        <div className="sign-in__header">
          <Logo />
          <h1 className="sign-in__header-title">Sign in to your account</h1>
          <Link to="/sign-up">
            <Button variant="link">
              Don&apos;t have an account? Register!
              <FaArrowRight />
            </Button>
          </Link>
        </div>
        <div className="sign-in__form">
          <form onSubmit={() => console.log('submit')}>
            <div className="sign-in__form-group">
              <div className="sign-in__form-group">
                <Label htmlFor="email" className="sign-in__form-group-label">
                  Email
                </Label>
                <Input
                  className={classNames('sign-in__form-group-input', {
                    'sign-in__form-group-input--error': errors.email,
                  })}
                  placeholder="you@example.com"
                />
                {errors?.email && (
                  <p className="sign-in__form-group-error">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="sign-in__form-group">
                <Label htmlFor="password" className="sign-in__form-group-label">
                  Password
                </Label>
                <Input
                  type="password"
                  className={classNames('sign-in__form-group-input', {
                    'sign-in__form-group-input--error': errors.password,
                  })}
                  placeholder="Password"
                />
                {errors?.password && (
                  <p className="sign-in__form-group-error">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <Button type="submit" disabled={isLoading}>
                {isLoading && <LuLoader2 className="loader" />}
                Sign in
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
