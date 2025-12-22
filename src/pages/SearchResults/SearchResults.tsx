import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ListingGrid from '../../components/listing/ListingGrid';
import Input from '../../components/common/Input';
import { Listing, PaintingType } from '../../types/listing.types';

const SearchResults: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [listings, setListings] = useState<Listing[]>([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const location = searchParams.get('location') || '';

  useEffect(() => {
    // Mock API call - in real app, fetch from backend
    const mockListings: Listing[] = [
      {
        id: '1',
        title: 'Cozy Apartment in Downtown',
        description: 'A beautiful apartment in the heart of the city',
        paintingType: PaintingType.OilPaints,
        location: {
          address: '123 Main St',
          city: 'New York',
          country: 'USA',
          coordinates: { lat: 40.7128, lng: -74.0060 }
        },
        price: 150,
        maxGuests: 4,
        bedrooms: 2,
        bathrooms: 1,
        amenities: ['WiFi', 'Kitchen', 'TV'],
        images: ['https://via.placeholder.com/400x300'],
        author: {
          id: 'h1',
          name: 'John Doe',
          avatar: '',
          joinedDate: '2023-01-01',
          isSuperhost: true
        },
        rating: 4.8,
        year: 120
      },
      {
        id: '2',
        title: 'Beach House with Ocean View',
        description: 'Stunning beach house with panoramic ocean views',
        paintingType: PaintingType.Watercolour,
        location: {
          address: '456 Beach Rd',
          city: 'Miami',
          country: 'USA',
          coordinates: { lat: 25.7617, lng: -80.1918 }
        },
        price: 350,
        maxGuests: 6,
        bedrooms: 3,
        bathrooms: 2,
        amenities: ['WiFi', 'Pool', 'Beach Access'],
        images: ['https://via.placeholder.com/400x300'],
        author: {
          id: 'h2',
          name: 'Jane Smith',
          avatar: '',
          joinedDate: '2022-06-15',
          isSuperhost: false
        },
        rating: 4.9,
        year: 85
      }
    ];

    setListings(mockListings);
  }, [location]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-2">
          {location ? `Stays in ${location}` : 'Search Results'}
        </h1>
        <p className="text-gray-600 mb-8">{listings.length} properties found</p>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-lg mb-4">Filters</h3>
              
              <div className="mb-6">
                <h4 className="font-medium mb-3">Price Range</h4>
                <div className="space-y-3">
                  <Input
                    label="Min Price"
                    type="number"
                    placeholder="$0"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                  />
                  <Input
                    label="Max Price"
                    type="number"
                    placeholder="$1000"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-medium mb-3">Property Type</h4>
                <div className="space-y-2">
                  {['Apartment', 'House', 'Villa', 'Hotel'].map((type) => (
                    <label key={type} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Listings Grid */}
          <div className="flex-1">
            <ListingGrid listings={listings} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
