export const Cities: string[] = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

export const SortOptions: string[] = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first'
];

export const Setting = {
  OffersCount: 5
};

export const PageType = {
  Main: 'cities',
  Favorites: 'favorites',
  Offer: 'near-places'
};

// eslint-disable-next-line react-refresh/only-export-components
export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id'
}

// eslint-disable-next-line react-refresh/only-export-components
export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

// eslint-disable-next-line react-refresh/only-export-components
export enum PageTitle {
  Main = '6 cities',
  Login = '6 cities: authorization',
  Favorites = '6 cities: favorites',
  Offer = '6 cities: offer',
  NotFound = '6 cities: not found'
}

// константы для моков
export const Goods = [
  'Heating',
  'Wi-Fi',
  'Washing machine',
  'Towels',
  'Coffee machine',
  'Baby seat',
  'Kitchen',
  'Dishwasher',
  'Cabel TV',
  'Fridge'
];

export const Urls = [
  'img/room.jpg',
  'img/apartment-01.jpg',
  'img/apartment-02.jpg',
  'img/apartment-03.jpg',
  'img/studio-01.jpg'
];

export const OfferTypes = [
  'apartment',
  'room',
  'house',
  'hotel'
];
