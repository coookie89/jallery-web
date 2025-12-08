import React, { useEffect, useState } from 'react';
import ListingCard from '../ListingCard/ListingCard';
import { Listing } from '../../../types/listing.types';

interface ListingGridProps {
  listings: Listing[];
}

const ListingGrid: React.FC<ListingGridProps> = ({ listings }) => {
  const [cols, setCols] = useState<number>(1);

  useEffect(() => {
    // Tailwind default breakpoints mapping used here:
    // sm: 640px -> 2 cols, lg: 1024px -> 3 cols
    const getColsForWidth = (w: number) => {
      if (w >= 1024) return 3;
      if (w >= 640) return 3;
      return 1;
    };

    const update = () => setCols(getColsForWidth(window.innerWidth));

    // Initialize and listen for resize
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  if (listings.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-300 text-lg">No listings found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {listings.map((listing, idx) => {
        // group size = number of items in a regular row (cols) + 1 full-width item
        const groupSize = cols + 1;
        // the full-width single item sits at the last index of each group
        const isFullWidth = idx % groupSize === cols;

        return (
          <div
            key={listing.id}
            className={`${isFullWidth ? 'col-span-1 sm:col-span-2 lg:col-span-3' : ''}`}
          >
            <ListingCard listing={listing} vertical={isFullWidth} />
          </div>
        );
      })}
    </div>
  );
};

export default ListingGrid;
