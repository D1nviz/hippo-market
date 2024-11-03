import { axiosClient } from '@/config/axiosClient';
import { AuthCredentials, AuthResponse } from '@/types/Auth';

export const authServices = {
  signIn: async (credentials: AuthCredentials) => {
    const response = await axiosClient.post<AuthResponse>(
      '/sign-in',
      credentials
    );
    return response.data;
  },
  signUp: async (credentials: AuthCredentials) => {
    const response = await axiosClient.post<AuthResponse>(
      '/sign-up',
      credentials
    );
    return response.data;
  },
};
