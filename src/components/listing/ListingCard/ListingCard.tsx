import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../common/Card';
import { Listing } from '../../../types/listing.types';

interface ListingCardProps {
  listing: Listing;
}

const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/listing/${listing.id}`);
  };

  return (
    <Card onClick={handleClick} className="overflow-hidden">
      {/* Image */}
      <div className="relative h-64 bg-gray-200">
        {listing.images && listing.images.length > 0 ? (
          <img
            src={listing.images[0]}
            alt={listing.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No Image
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg line-clamp-1">{listing.title}</h3>
          {listing.rating > 0 && (
            <div className="flex items-center">
              <span className="text-sm">⭐ {listing.rating.toFixed(1)}</span>
            </div>
          )}
        </div>

        <p className="text-gray-600 text-sm mb-2">
          {listing.location.city}, {listing.location.country}
        </p>

        <p className="text-gray-500 text-sm mb-3">
          {listing.maxGuests} guests · {listing.bedrooms} bedrooms · {listing.bathrooms} bathrooms
        </p>

        <div className="flex justify-between items-center">
          <div>
            <span className="font-bold text-lg">${listing.price}</span>
            <span className="text-gray-600 text-sm"> / night</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ListingCard;
