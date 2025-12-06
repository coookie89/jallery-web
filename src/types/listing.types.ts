export interface Location {
  address: string;
  city: string;
  country: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Host {
  id: string;
  name: string;
  avatar: string;
  joinedDate: string;
  isSuperhost: boolean;
}

export interface Listing {
  id: string;
  title: string;
  description: string;
  paintingType: PaintingType;
  location: Location;
  price: number;
  maxGuests: number;
  bedrooms: number;
  bathrooms: number;
  amenities: string[];
  images: string[];
  host: Host;
  rating: number;
  reviewCount: number;
}

export enum PaintingType {
  OilPaints = 'Oil paints',
  AcrylicPaint = 'Acrylic paint',
  Watercolour = 'Watercolour',
  Other = 'Other'
}
