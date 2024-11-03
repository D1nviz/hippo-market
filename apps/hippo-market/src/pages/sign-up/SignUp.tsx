import './styles.scss';

import { zodResolver } from '@hookform/resolvers/zod';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import { FaArrowRight } from 'react-icons/fa6';
import { LuLoader2 } from 'react-icons/lu';
import { Link } from 'react-router-dom';

import { Button } from '@/components/button/Button';
import { Input } from '@/components/input/Input';
import Label from '@/components/label/Label';
import Logo from '@/components/logo/Logo';
import { useSignUp } from '@/hooks/useSignUp';
import {
  AuthCredentialsValiador,
  TAuthCredentialsValiador,
} from '@/utils/validators/account-credentials-validator';

export default function SignUpage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthCredentialsValiador>({
    resolver: zodResolver(AuthCredentialsValiador),
  });
  const { mutate: signUp, error, isPending } = useSignUp();

  const onSubmit = ({ email, password }: TAuthCredentialsValiador) => {
    signUp({
      email,
      password,
    });
  };

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="sign-up__form-group">
              <div className="sign-up__form-group">
                <Label htmlFor="email" className="sign-up__form-group-label">
                  Email
                </Label>
                <Input
                  {...register('email')}
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
                  {...register('password')}
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
              <Button type="submit" disabled={isPending}>
                {isPending && <LuLoader2 className="loader" />}
                Sign up
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
