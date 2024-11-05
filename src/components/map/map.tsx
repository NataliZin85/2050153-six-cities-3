import leaflet, { LayerGroup as LayerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { CityProps, OffersProps } from '../../types/offer';
import { getMapFeatures } from '../../utils/pageUtils';
import { AppRoute, URL_PIN_ACTIVE, URL_PIN_DEFAULT } from '../../const';
import useMap from './map-hooks/useMap';

type MapProps = {
  city: CityProps;
  offers: OffersProps | OffersProps[];
  activeOfferId?: string | null;
};

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_PIN_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const activeCustomIcon = leaflet.icon({
  iconUrl: URL_PIN_ACTIVE,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function MapComponent({city, offers, activeOfferId}: MapProps): JSX.Element {
  const pathname = useLocation();
  const {mapClassName} = getMapFeatures(pathname as unknown as AppRoute);
  const mapRef = useRef<HTMLElement>(null);
  const map = useMap({mapRef: mapRef, city: city.location});
  const cityMarkersLayer = useRef<LayerGroup>(new leaflet.LayerGroup());

  const mapOffers: OffersProps[] = offers as OffersProps[];
  const mapOffer: OffersProps = offers as OffersProps;

  useEffect(() => {
    if(map) {
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
      cityMarkersLayer.current.addTo(map);
      cityMarkersLayer.current.clearLayers();
    }
  },[city, map]);

  useEffect(() => {
    if (map) {
      if (mapOffers) {
        mapOffers.forEach((offer) => {
          leaflet
            .marker({
              lat: offer.location.latitude,
              lng: offer.location.longitude,
            }, {
              icon: (offer.id === activeOfferId)
                ? activeCustomIcon
                : defaultCustomIcon,
            })
            .addTo(cityMarkersLayer.current);
        });
      }
      if (mapOffer) {
        leaflet
          .marker({
            lat: mapOffer.location.latitude,
            lng: mapOffer.location.longitude,
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(cityMarkersLayer.current);
      }
    }
  }, [map, activeOfferId, mapOffers, mapOffer]);

  return (
    <section
      className={`${mapClassName}__map map`}
      ref={mapRef}
    >
    </section>
  );
}

export default MapComponent;