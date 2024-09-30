export const Cities = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

export const SortOptions = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first'
];

export const Setting = {
  OffersCount: 5
};

export enum PageType {
  Main = 'cities',
  Favorites = 'favorites',
  Offer = 'near-places'
}

export default { Cities, SortOptions, Setting, PageType };