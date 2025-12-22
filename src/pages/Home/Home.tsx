import React from 'react';
import ListingGrid from '../../components/listing/ListingGrid';
import { PaintingType } from '../../types/listing.types';
import Artworks from '../Artworks';

import featuredRaw from '../../featuredListings.json';

const Home: React.FC = () => {
  // navigation and search state removed for now (not used)

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
    <div>

      <div className="h-screen overflow-hidden">
        <div
          className="w-full h-full relative bg-center bg-cover"
          style={{ backgroundImage: `url('./resources/img/cover.jpg')` }}
        >
          <div className="absolute inset-0 bg-black/20"/>
          <div className="absolute inset-0 flex flex-col items-left justify-left place-content-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-6xl md:text-9xl font-bold" id="home-hero-text">
              程瓊慧
            </h1>
            <p className="block text-5xl md:text-7xl font-bold">Joan Chen</p>
            <p className='text-md p-0'>愛拍照愛畫畫討厭煮飯</p>
          </div>
        </div>

      </div>

      <Artworks />

    </div>

  );
};

export default Home;
