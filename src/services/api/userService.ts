import apiClient from './apiClient';
import { User } from '../../types/user.types';

export const userService = {
  // Get user profile
  getUserProfile: async (userId: string): Promise<User> => {
    const response = await apiClient.get(`/users/${userId}`);
    return response.data;
  },

  // Update user profile
  updateUserProfile: async (userId: string, userData: Partial<User>): Promise<User> => {
    const response = await apiClient.patch(`/users/${userId}`, userData);
    return response.data;
  },
};

export const authService = {
  // Login
  login: async (email: string, password: string): Promise<{ user: User; token: string }> => {
    const response = await apiClient.post('/auth/login', { email, password });
    return response.data;
  },

  // Register
  register: async (userData: { email: string; password: string; name: string }): Promise<{ user: User; token: string }> => {
    const response = await apiClient.post('/auth/register', userData);
    return response.data;
  },

  // Logout
  logout: async (): Promise<void> => {
    await apiClient.post('/auth/logout');
    localStorage.removeItem('authToken');
  },
};
