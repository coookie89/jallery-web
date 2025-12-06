export interface SearchFilters {
  location?: string;
  checkIn?: Date | null;
  checkOut?: Date | null;
  guests?: number;
  minPrice?: number;
  maxPrice?: number;
  propertyType?: string[];
  amenities?: string[];
}

export interface SearchParams {
  query: string;
  filters: SearchFilters;
}
