import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import ListingGrid from '../../components/listing/ListingGrid';
import { PaintingType } from '../../types/listing.types';
import { Search } from 'lucide-react';
import Artworks from '../Artworks';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');

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
      images: ['./resources/painting/IMG_3425.jpg'],
      author: {
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
      images: ['./resources/painting/IMG_3426.jpg'],
      author: {
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
      images: ['./resources/painting/S__194322446.jpg'],
      author: {
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
      images: ['./resources/painting/IMG_3426.jpg'],
      author: {
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
      images: ['./resources/painting/IMG_3425.jpg'],
      author: {
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
      images: ['./resources/painting/IMG_3426.jpg'],
      author: {
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
      images: ['./resources/painting/IMG_3425.jpg'],
      author: {
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
    <div>

      <div className="h-screen overflow-hidden">
        <div
          className="w-full h-full relative bg-center bg-cover"
          style={{ backgroundImage: `url('./resources/img/cover.jpg')` }}
        >
          <div className="absolute inset-0 bg-black/20"/>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-6xl md:text-9xl font-bold text-white text-center drop-shadow-lg"  id="home-hero-text">
              程瓊慧
              <span className="block text-5xl md:text-7xl mt-6">Joan Chen</span>
            </h1>
          </div>
        </div>

      </div>
      <Artworks />

    </div>

  );
};

export default Home;
