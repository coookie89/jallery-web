import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../common/Card';
import { Listing } from '../../../types/listing.types';
// lucide icons were previously used for ratings; keep import commented out until needed

interface ListingCardProps {
  listing: Listing;
  /**
   * When true, render the card in a vertical (column) layout suitable for
   * full-width/odd-row cards. Defaults to false.
   */
  vertical?: boolean;
}

const ListingCard: React.FC<ListingCardProps> = ({ listing, vertical = false }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/listing/${listing.id}`);
  };

  return (
    // Card switches between column (default) and row when not vertical.
    // <Card
    //   onClick={handleClick}
    //   className={`h-full overflow-hidden border border-black hover:bg-gray-300 duration-300 flex flex-col ${vertical ? 'sm:flex-row lg:flex-row' : ''}`}
    // >
    <Card
      className={`h-full overflow-hidden border border-black duration-300 flex flex-col ${vertical ? 'sm:flex-row lg:flex-row' : ''}`}
    >
      {/* Image */}
      <div className={`bg-gray-100 overflow-hidden items-center justify-center w-full ${vertical ? 'sm:w-1/2 lg:w-1/2 ' : ''}`}>
        {listing.images && listing.images.length > 0 ? (
          <img
            src={listing.images[0]}
            alt={listing.title}
            className="w-full h-auto object-contain"
            loading='lazy'
          />
        ) : (
          <div className="w-full h-full items-center justify-center text-black">
            No Image
          </div>
        )}
      </div>

      {/* Content */}
      <div className={`p-4 flex-1 flex flex-col justify-between`}>
        <div>
          <div className="flex justify-between items-start">
            <h3 className="font-bold text-2xl line-clamp-1 text-black tracking-tight">{listing.title}</h3>
            {/* {listing.rating > 0 && (
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-300 mr-1" />
                <span className="text-sm text-black">{listing.rating.toFixed(1)}</span>
              </div>
            )} */}
          </div>

          <p className="text-black text-md mt-2 tracking-tight">
            {/* {listing.description} */}
            {listing.paintingType}
          </p>

          <p className="text-black text-sm mt-2 tracking-tight">
            {listing.location.city}, {listing.location.country} · {listing.year}
          </p>
        </div>

        {/* <div className="flex justify-between items-center text-black text-sm mt-4">
          <div>
            <span className="text-gray-600 uppercase text-xs">Read more</span>
          </div>
        </div> */}
      </div>
    </Card>
  );
};

export default ListingCard;
