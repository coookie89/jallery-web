import apiClient from './apiClient';
import { Booking } from '../../types/booking.types';

export const bookingService = {
  // Create a booking
  createBooking: async (bookingData: Omit<Booking, 'id'>): Promise<Booking> => {
    const response = await apiClient.post('/bookings', bookingData);
    return response.data;
  },

  // Get user's bookings
  getUserBookings: async (userId: string): Promise<Booking[]> => {
    const response = await apiClient.get(`/bookings/user/${userId}`);
    return response.data;
  },

  // Get booking by ID
  getBookingById: async (id: string): Promise<Booking> => {
    const response = await apiClient.get(`/bookings/${id}`);
    return response.data;
  },

  // Cancel booking
  cancelBooking: async (id: string): Promise<void> => {
    await apiClient.patch(`/bookings/${id}/cancel`);
  },
};
