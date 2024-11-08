import { useParams } from 'react-router-dom';
import { reviews } from '../../mocks/reviews';
import OfferGalleryComponent from './offer-screen-components/offer-gallery-component';
import OfferComponent from './offer-screen-components/offer-component';
import OfferReviewListComponent from './offer-screen-components/offer-review-list-component';
import OfferReviewFormComponent from './offer-screen-components/offer-review-form-component';
import CardComponent from '../../components/card-component/card-component';
import { CardProps, OffersProps } from '../../types/offer';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { AuthorizationStatus } from '../../const';
import MapComponent from '../../components/map/map';
import { ReviewsProps } from '../../types/review';
import { getRandomInteger } from '../../utils/utils';

type OfferScreenProps = {
  offers: OffersProps[];
  authorizationStatus: AuthorizationStatus;
}

function OfferScreen({offers, authorizationStatus}: OfferScreenProps): JSX.Element {
  const { id } = useParams();

  const currentOffer: OffersProps | undefined = offers.find((offer: OffersProps) => offer.id === id);

  if (!currentOffer) {
    return <NotFoundScreen />;
  }

  const offerReviews: ReviewsProps[] | null = Array.from(
    { length: getRandomInteger(0, reviews.length - 1) },
    () => reviews[getRandomInteger(0, reviews.length - 1)],
  );

  const getNearOffers = () : OffersProps[] | null => {
    const currentOffers: OffersProps[] | null = [];

    offers.map((offer) => {
      if (
        currentOffer.city.name === offer.city.name
        && currentOffer.id !== offer.id
      ) {
        currentOffers.push(offer);
      }
    });

    if (currentOffers) {
      return currentOffers.slice(3);
    }
    return null;
  };

  const nearOffers = getNearOffers();

  return (
    <main className="page__main page__main--offer">
      <section className="offer" key={currentOffer.id}>
        {currentOffer.images ?
          <OfferGalleryComponent
            id={currentOffer.id}
            images={currentOffer.images}
          /> : null}
        <div className="offer__container container">
          <div className="offer__wrapper">
            <OfferComponent
              key={currentOffer.id}
              offer={currentOffer}
            />
            <section className="offer__reviews reviews">
              <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{offerReviews ? offerReviews.length : 0}</span></h2>
              {offerReviews ?
                (
                  <ul className="reviews__list">
                    {offerReviews.map((review: ReviewsProps) => (
                      <OfferReviewListComponent
                        key={review.id}
                        id={review.id}
                        date={review.date}
                        user={review.user}
                        comment={review.comment}
                        rating={review.rating}
                      />
                    ))}
                  </ul>
                ) : (<p>У этого предложения нет отзывов</p>)}
              {
                authorizationStatus === AuthorizationStatus.Auth ?
                  <OfferReviewFormComponent />
                  : <p>Только авторизированные пользователи могут оставлять коментарий</p>
              }
            </section>
          </div>
        </div>
        {nearOffers ?
          (
            <MapComponent city={currentOffer.city} offers={nearOffers} activeOfferId={currentOffer.id} />
          ) : null}
      </section>
      <div className="container">
        {nearOffers ?
          (
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                {nearOffers.map((offer: CardProps) => (
                  <CardComponent
                    key={offer.id}
                    offer={offer}
                  />
                ))}
              </div>
            </section>
          ) : <p>Нет других предложений неподалеку от этого предложения</p>}
      </div>
    </main>
  );
}

export default OfferScreen;
