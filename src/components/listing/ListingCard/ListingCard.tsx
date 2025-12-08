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
    // Fixed-height card so all cards in a row have equal height
    <Card onClick={handleClick} className="overflow-hidden border border-black hover:bg-gray-300 duration-300 flex flex-col">
      {/* Image area: fixed height, image preserves original ratio via object-contain */}
      <div className="w-full bg-gray-100 overflow-hidden flex items-center justify-center ">
        {listing.images && listing.images.length > 0 ? (
          <img
            src={listing.images[0]}
            alt={listing.title}
            className="w-full h-auto object-contain"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-black">
            No Image
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-lg line-clamp-1 text-black">{listing.author?.name || listing.title}</h3>
            {/* {listing.rating > 0 && (
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-300 mr-1" />
                <span className="text-sm text-black">{listing.rating.toFixed(1)}</span>
              </div>
            )} */}
          </div>

          <p className="text-black text-sm mt-2">
            {listing.paintingType} · {listing.location.city}, {listing.location.country}
          </p>
        </div>

        <div className="flex justify-between items-center text-black text-sm mt-4">
          <div>
            {/* <span className="font-bold text-lg">${listing.price}</span> */}
            <span className="text-gray-600 uppercase text-xs">Read more</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ListingCard;
