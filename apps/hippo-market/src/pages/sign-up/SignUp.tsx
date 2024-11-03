import './styles.scss';

import classNames from 'classnames';
import { FaArrowRight } from 'react-icons/fa6';
import { LuLoader2 } from 'react-icons/lu';
import { Link } from 'react-router-dom';

import { Button } from '@/components/button/Button';
import { Input } from '@/components/input/Input';
import Label from '@/components/label/Label';
import Logo from '@/components/logo/Logo';

export default function SignUpage() {
  const errors = {
    email: { message: '' },
    password: { message: '' },
  };

  const isLoading = false;

  return (
    <div className="sign-up__container">
      <div className="sign-up__content">
        <div className="sign-up__header">
          <Logo />
          <h1 className="sign-up__header-title">Sign up to your account</h1>
          <Link to="/sign-in">
            <Button variant="link">
              Already have an account? Sign in!
              <FaArrowRight />
            </Button>
          </Link>
        </div>
        <div className="sign-up__form">
          <form onSubmit={() => console.log('submit')}>
            <div className="sign-up__form-group">
              <div className="sign-up__form-group">
                <Label htmlFor="email" className="sign-up__form-group-label">
                  Email
                </Label>
                <Input
                  className={classNames('sign-up__form-group-upput', {
                    'sign-up__form-group-upput--error': errors.email,
                  })}
                  placeholder="you@example.com"
                />
                {errors?.email && (
                  <p className="sign-up__form-group-error">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="sign-up__form-group">
                <Label htmlFor="password" className="sign-up__form-group-label">
                  Password
                </Label>
                <Input
                  type="password"
                  className={classNames('sign-up__form-group-upput', {
                    'sign-up__form-group-upput--error': errors.password,
                  })}
                  placeholder="Password"
                />
                {errors?.password && (
                  <p className="sign-up__form-group-error">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <Button type="submit" disabled={isLoading}>
                {isLoading && <LuLoader2 className="loader" />}
                Sign up
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
