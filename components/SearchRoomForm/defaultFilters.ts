const twoWeeks = 60 * 60 * 24 * 7 * 1000 * 2;

const defaultFilters = {
  price: { from: 2000, to: 7000 },
  booked: {
    from: new Date(),
    to: new Date(Date.now() + twoWeeks),
  },
  amenities: {
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
  },
  additionalAmenities: {
    breakfast: true,
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

defaultFilters.booked.from.setHours(12, 0, 0, 0);
defaultFilters.booked.to.setHours(12, 0, 0, 0);

export default defaultFilters;
