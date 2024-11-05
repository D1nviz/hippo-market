import { useMutation, UseMutationResult } from '@tanstack/react-query';

import { authServices } from '@/api/auth';
import { AuthCredentials, AuthResponse } from '@/types/Auth';

export const useSignUp = (): UseMutationResult<
  AuthResponse,
  Error,
  AuthCredentials
> => {
  return useMutation<AuthResponse, Error, AuthCredentials>({
    mutationFn: (credentials) => authServices.signUp(credentials),
    onSuccess: (data) => {
      localStorage.setItem('token', data.token);
    },
  });
};
