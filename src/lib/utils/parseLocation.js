import AtlasMetadataClient from '@reuters-graphics/graphics-atlas-client';
import flatten from 'lodash/flatten';

const atlas = new AtlasMetadataClient();

export const isCoordinateLocation = (location) => {
  if (
    Array.isArray(location) &&
    location.length === 2 &&
    !isNaN(location[0]) &&
    !isNaN(location[1])
  ) return true;
  return false;
};

const getAtlasEntity = (location) => {
  if (atlas.getRegion(location)) return atlas.getRegion(location).countries;
  if (atlas.getSubregion(location)) return atlas.getSubregion(location).countries;
  if (atlas.getCountry(location)) return [atlas.getCountry(location)];
  return [];
};

const getCountryList = (location) => {
  if (Array.isArray(location)) return flatten(location.map(l => getAtlasEntity(l)));
  return getAtlasEntity(location);
};

export const getLocationCountries = (location) => {
  const countryList = getCountryList(location);
  return countryList.map(d => d.isoAlpha3);
};
