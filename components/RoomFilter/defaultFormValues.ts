export const defaultInitialValues = {
  price: {
    from: 5000,
    to: 10000,
  },
  booked: {
    from: Date.now(),
    to: Date.now(),
  },
  amenities: {
    bedrooms: 1,
    beds: 1,
    bathrooms: 0,
  },
  additionalAmenities: {
    breakfast: false,
    desk: false,
    chair: false,
    crib: false,
    tv: false,
    shampoo: false,
  },
  accessibility: {
    wideCorridor: false,
    invalidHelper: false,
  },
  opportunities: {
    smoking: false,
    keepPets: false,
    largeNumberOfPersons: false,
  },
};
