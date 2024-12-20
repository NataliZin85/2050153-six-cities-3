export const URL_PIN_DEFAULT = '../markup/img/pin.svg';
export const URL_PIN_ACTIVE = '../markup/img/pin-active.svg';

export const SortOptions: string[] = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first'
];

export const Setting = {
  OffersCount: 30
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
  Offer = '/offer'
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

export const RatingStars = [
  {value: '5', title: 'perfect'},
  {value: '4', title: 'good'},
  {value: '3', title: 'not bad'},
  {value: '2', title: 'badly'},
  {value: '1', title: 'terribly'}
];

// константы для моков
export const Coordinates = [
  {lat: 52.3909553943508, lng: 4.85309666406198},
  {lat: 52.3609553943508, lng: 4.85309666406198},
  {lat: 52.3909553943508, lng: 4.929309666406198},
  {lat: 52.3809553943508, lng: 4.939309666406198}
];

export const ZOOM = 13;

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

export const OfferDescription = [
  'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.'
];
