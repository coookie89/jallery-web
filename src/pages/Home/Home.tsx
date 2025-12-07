import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import ListingGrid from '../../components/listing/ListingGrid';
import { PaintingType } from '../../types/listing.types';
import { Search } from 'lucide-react';

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
      images: ['./resources/painting/IMG_3425.heic'],
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
      images: ['./resources/painting/IMG_3426.heic'],
      host: {
        id: 'h2',
        name: 'Jane Smith',
        avatar: '',
        joinedDate: '2022-06-15',
        isSuperhost: false
      },
      rating: 4.9,
      reviewCount: 85
    },
    {
      id: '3',
      title: 'Mountain Cabin Retreat',
      description: 'A cozy cabin in the mountains, perfect for a weekend getaway',
      paintingType: PaintingType.OilPaints as const,
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
      images: ['./resources/painting/IMG_3425.heic'],
      host: {
        id: 'h2',
        name: 'Jane Smith',
        avatar: '',
        joinedDate: '2022-06-15',
        isSuperhost: false
      },
      rating: 4.9,
      reviewCount: 85
    },
    {
      id: '4',
      title: 'Mountain Cabin Retreat',
      description: 'A cozy cabin in the mountains, perfect for a weekend getaway',
      paintingType: PaintingType.OilPaints as const,
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
      images: ['./resources/painting/IMG_3426.heic'],
      host: {
        id: 'h2',
        name: 'Jane Smith',
        avatar: '',
        joinedDate: '2022-06-15',
        isSuperhost: false
      },
      rating: 4.9,
      reviewCount: 85
    },
    {
      id: '5',
      title: 'Mountain Cabin Retreat',
      description: 'A cozy cabin in the mountains, perfect for a weekend getaway',
      paintingType: PaintingType.OilPaints as const,
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
      images: ['./resources/painting/IMG_3425.heic'],
      host: {
        id: 'h2',
        name: 'Jane Smith',
        avatar: '',
        joinedDate: '2022-06-15',
        isSuperhost: false
      },
      rating: 4.9,
      reviewCount: 85
    },
    {
      id: '6',
      title: 'Mountain Cabin Retreat',
      description: 'A cozy cabin in the mountains, perfect for a weekend getaway',
      paintingType: PaintingType.OilPaints as const,
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
      images: ['./resources/painting/IMG_3426.heic'],
      host: {
        id: 'h2',
        name: 'Jane Smith',
        avatar: '',
        joinedDate: '2022-06-15',
        isSuperhost: false
      },
      rating: 4.9,
      reviewCount: 85
    },
    {
      id: '7',
      title: 'Mountain Cabin Retreat',
      description: 'A cozy cabin in the mountains, perfect for a weekend getaway',
      paintingType: PaintingType.OilPaints as const,
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
      images: ['./resources/painting/IMG_3425.heic'],
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
      <div className="relative h-40 bg-gradient-to-r from-primary to-pink-600">
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          {/* Search Bar */}
          <div className="w-full max-w-2xl bg-white rounded-full shadow-lg p-2">
            <div className="flex gap-2">
              <Input
                placeholder="Where are you looking for?"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="flex-1"
              />
              <Button onClick={handleSearch} aria-label="Search">
                <Search className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Categories */}
                <div className="mt-2 flex gap-6 overflow-x-auto">
                {Object.values(PaintingType).map((type) => (
                    <span
                        key={type}
                        className="cursor-pointer hover:text-white hover:underline transition text-sm whitespace-nowrap flex flex-col items-center"
                    >
                        {type}
                    </span>
                ))}
                </div>
        </div>
      </div>

      {/* Featured Listings */}
      <div className="mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <h2 className="text-2xl font-bold mb-8">All paintings</h2>
        <ListingGrid listings={featuredListings} />
      </div>

    </div>
  );
};

export default Home;
