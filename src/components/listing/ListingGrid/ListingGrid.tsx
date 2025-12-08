import React from 'react';
import ListingCard from '../ListingCard/ListingCard';
import { Listing } from '../../../types/listing.types';

interface ListingGridProps {
  listings: Listing[];
}

const ListingGrid: React.FC<ListingGridProps> = ({ listings }) => {
  if (listings.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-300 text-lg">No listings found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
};

export default ListingGrid;
