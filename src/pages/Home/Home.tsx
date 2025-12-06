import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import ListingGrid from '../../components/listing/ListingGrid';
import { PaintingType } from '../../types/listing.types';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    if (location.trim()) {
      navigate(`/search?location=${encodeURIComponent(location)}`);
    }
  };

  // Mock featured listings - in real app, fetch from API
  const featuredListings = [
    {
      id: '1',
      title: 'Cozy Apartment in Downtown',
      description: 'A beautiful apartment in the heart of the city',
      paintingType: PaintingType.OilPaints as const,
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
      host: {
        id: 'h1',
        name: 'John Doe',
        avatar: '',
        joinedDate: '2023-01-01',
        isSuperhost: true
      },
      rating: 4.8,
      reviewCount: 120
    },
    {
      id: '2',
      title: 'Beach House with Ocean View',
      description: 'Stunning beach house with panoramic ocean views',
      paintingType: PaintingType.Watercolour as const,
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
      host: {
        id: 'h2',
        name: 'Jane Smith',
        avatar: '',
        joinedDate: '2022-06-15',
        isSuperhost: false
      },
      rating: 4.9,
      reviewCount: 85
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-primary to-pink-600">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Find your next stay</h1>
          <p className="text-xl mb-8">Search deals on hotels, homes, and much more...</p>
          
          {/* Search Bar */}
          <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-4">
            <div className="flex gap-4">
              <Input
                placeholder="Where are you going?"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="flex-1"
              />
              <Button onClick={handleSearch}>Search</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Listings */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-8">Featured Stays</h2>
        <ListingGrid listings={featuredListings} />
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-8">Explore by Painting Type</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Object.values(PaintingType).map((type) => (
            <div
              key={type}
              className="bg-white rounded-lg shadow-md p-6 text-center cursor-pointer hover:shadow-lg transition"
            >
              <div className="text-4xl mb-2">🏠</div>
              <h3 className="font-semibold">{type}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
