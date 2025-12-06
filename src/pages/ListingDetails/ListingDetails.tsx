import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../components/common/Button';
import { Listing, PaintingType } from '../../types/listing.types';

const ListingDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [listing, setListing] = useState<Listing | null>(null);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);

  useEffect(() => {
    // Mock API call - in real app, fetch from backend
    const mockListing: Listing = {
      id: id || '1',
      title: 'Cozy Apartment in Downtown',
      description: 'A beautiful apartment in the heart of the city with modern amenities and stunning views. Perfect for both business and leisure travelers.',
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
      amenities: ['WiFi', 'Kitchen', 'TV', 'Air Conditioning', 'Heating', 'Washer', 'Dryer'],
      images: [
        'https://via.placeholder.com/800x600',
        'https://via.placeholder.com/800x600',
        'https://via.placeholder.com/800x600'
      ],
      host: {
        id: 'h1',
        name: 'John Doe',
        avatar: 'https://via.placeholder.com/100',
        joinedDate: '2023-01-01',
        isSuperhost: true
      },
      rating: 4.8,
      reviewCount: 120
    };

    setListing(mockListing);
  }, [id]);

  if (!listing) {
    return <div className="text-center py-12">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-2">{listing.title}</h1>
        <div className="flex items-center gap-4 mb-6">
          <span className="flex items-center">
            ⭐ {listing.rating} · {listing.reviewCount} reviews
          </span>
          <span className="text-gray-600">
            {listing.location.city}, {listing.location.country}
          </span>
        </div>

        {/* Images Gallery */}
        <div className="grid grid-cols-2 gap-2 mb-8 rounded-lg overflow-hidden">
          <div className="col-span-2 md:col-span-1">
            <img
              src={listing.images[0]}
              alt={listing.title}
              className="w-full h-96 object-cover"
            />
          </div>
          <div className="hidden md:grid grid-cols-2 gap-2">
            {listing.images.slice(1, 5).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${listing.title} ${index + 2}`}
                className="w-full h-48 object-cover"
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Property Info */}
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h2 className="text-2xl font-semibold mb-4">
                Hosted by {listing.host.name}
              </h2>
              <p className="text-gray-600 mb-4">
                {listing.maxGuests} guests · {listing.bedrooms} bedrooms · {listing.bathrooms} bathrooms
              </p>
              {listing.host.isSuperhost && (
                <span className="inline-block bg-red-100 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  ⭐ Superhost
                </span>
              )}
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h3 className="text-xl font-semibold mb-3">About this place</h3>
              <p className="text-gray-700">{listing.description}</p>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">What this place offers</h3>
              <div className="grid grid-cols-2 gap-4">
                {listing.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center">
                    <span className="mr-2">✓</span>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <div className="mb-4">
                <span className="text-2xl font-bold">${listing.price}</span>
                <span className="text-gray-600"> / night</span>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-1">Check-in</label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Check-out</label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Guests</label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full px-4 py-2 border rounded-lg"
                  >
                    {[...Array(listing.maxGuests)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} {i === 0 ? 'guest' : 'guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <Button className="w-full mb-4">Reserve</Button>
              <p className="text-center text-sm text-gray-600">You won't be charged yet</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetails;
