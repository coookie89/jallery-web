import apiClient from './apiClient';
import { Listing } from '../../types/listing.types';
import { SearchFilters } from '../../types/search.types';

export const listingService = {
  // Get all listings
  getListings: async (): Promise<Listing[]> => {
    const response = await apiClient.get('/listings');
    return response.data;
  },

  // Get listing by ID
  getListingById: async (id: string): Promise<Listing> => {
    const response = await apiClient.get(`/listings/${id}`);
    return response.data;
  },

  // Search listings with filters
  searchListings: async (filters: SearchFilters): Promise<Listing[]> => {
    const response = await apiClient.post('/listings/search', filters);
    return response.data;
  },

  // Get featured listings
  getFeaturedListings: async (): Promise<Listing[]> => {
    const response = await apiClient.get('/listings/featured');
    return response.data;
  },
};
