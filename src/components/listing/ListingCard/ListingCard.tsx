import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../common/Card';
import { Listing } from '../../../types/listing.types';
import { Star } from 'lucide-react';

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
      {/* Image: full-width square (1:1) */}
      <div className="w-full relative bg-gray-200 overflow-hidden rounded-2xl">
        <div className="w-full pt-[100%]" />
        {listing.images && listing.images.length > 0 ? (
          <img
            src={listing.images[0]}
            alt={listing.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 w-full h-full flex items-center justify-center text-gray-400">
            No Image
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-sm line-clamp-1">{listing.title}</h3>
          {listing.rating > 0 && (
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-500 mr-1" />
              <span className="text-sm">{listing.rating.toFixed(1)}</span>
            </div>
          )}
        </div>

        <p className="text-gray-500 text-sm">
          {listing.paintingType} · {listing.location.city}, {listing.location.country} · ${listing.price}
        </p>

        <div className="flex justify-between items-center text-gray-500 text-sm">
          <div>
            <span>${listing.price}</span>
            <span> / night</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ListingCard;
