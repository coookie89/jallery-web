import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import ListingGrid from '../../components/listing/ListingGrid';
import { PaintingType } from '../../types/listing.types';
import { Search } from 'lucide-react';
import featuredRaw from '../../featuredListings.json';

const Artworks: React.FC = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    if (location.trim()) {
      navigate(`/search?location=${encodeURIComponent(location)}`);
    }
  };

  
  // Map raw JSON strings back to the PaintingType enum
  const featuredListings = (featuredRaw as any[]).map((f) => ({
    ...f,
    paintingType:
      f.paintingType === 'Watercolour'
        ? PaintingType.Watercolour
        : f.paintingType === 'AcrylicPaint'
        ? PaintingType.AcrylicPaint
        : PaintingType.OilPaints,
  }));

  return (
    <div className="min-h-screen" id="header">
      {/* Featured Listings */}
      <div className="mx-auto py-12">
        <div className=' px-4 sm:px-8 lg:px-12 mb-8'>
          <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-black">Artworks</h2>
          <div className='text-sm sm:text-sm lg:text-md mb-8'>
            Painting types
            <div className='flex flex-wrap gap-4 mt-4'>
              <span className='px-3 py-1 border'>Oil paints</span>
              {/* <span className='px-3 py-1 border'>Photograph</span>
              <span className='px-3 py-1 border'>Watercolour</span>
              <span className='px-3 py-1 border'>Other</span> */}
            </div>
            
          </div>
        </div>
        
        <ListingGrid listings={featuredListings} />
      </div>

    </div>
  );
};

export default Artworks;
