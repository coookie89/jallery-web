export const calculateTotalPrice = (
  pricePerNight: number,
  nights: number,
  serviceFeePercentage: number = 0.12
): { subtotal: number; serviceFee: number; total: number } => {
  const subtotal = pricePerNight * nights;
  const serviceFee = subtotal * serviceFeePercentage;
  const total = subtotal + serviceFee;

  return {
    subtotal: Math.round(subtotal * 100) / 100,
    serviceFee: Math.round(serviceFee * 100) / 100,
    total: Math.round(total * 100) / 100,
  };
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
};
