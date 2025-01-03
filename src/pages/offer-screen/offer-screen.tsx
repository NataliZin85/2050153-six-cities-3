import { useParams } from 'react-router-dom';
import { reviews } from '../../mocks/reviews';
import OfferGallery from './offer-screen-components/offer-gallery';
import OfferComponent from './offer-screen-components/offer-component';
import OfferReviewList from './offer-screen-components/offer-review-list';
import OfferReviewForm from './offer-screen-components/offer-review-form';
import OfferCard from '../../components/card/card';
import { CardProps, OffersProps } from '../../types/offer';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { AuthorizationStatus } from '../../const';
import Map from '../../components/map/map';
import { ReviewsProps } from '../../types/review';
import { getRandomInteger } from '../../utils/utils';
import { getNearOffers } from '../../utils/page-utils';

type OfferScreenProps = {
  offers: OffersProps[];
  authorizationStatus: AuthorizationStatus;
}

function OfferScreen({offers, authorizationStatus}: OfferScreenProps): JSX.Element {
  const { id } = useParams();
  const offerPageClassName = 'offer';
  const nearPlacesClassName = 'near-places';

  const currentOffer: OffersProps | undefined = offers.find((offer: OffersProps) => offer.id === id);

  if (!currentOffer) {
    return <NotFoundScreen />;
  }

  const offerReviews: ReviewsProps[] = Array.from(
    { length: getRandomInteger(0, reviews.length - 1) },
    () => reviews[getRandomInteger(0, reviews.length - 1)],
  );

  const nearOffers = getNearOffers(offers, currentOffer);

  return (
    <main className={`page__main page__main--${offerPageClassName}`}>
      <section className={offerPageClassName} key={currentOffer.id}>
        {currentOffer.images ?
          <OfferGallery
            id={currentOffer.id}
            images={currentOffer.images}
          /> : null}
        <div className={`${offerPageClassName}__container container`}>
          <div className={`${offerPageClassName}__wrapper`}>
            <OfferComponent
              key={currentOffer.id}
              offer={currentOffer}
              offerClassName={offerPageClassName}
            />
            <section className="offer__reviews reviews">
              <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{offerReviews ? offerReviews.length : 0}</span></h2>
              {offerReviews ?
                (
                  <ul className="reviews__list">
                    {offerReviews.map((review: ReviewsProps) => (
                      <OfferReviewList
                        key={review.id}
                        id={review.id}
                        date={review.date}
                        user={review.user}
                        comment={review.comment}
                        rating={review.rating}
                      />
                    ))}
                  </ul>
                ) : <p>This offer do not have any reviews.</p>}
              {
                authorizationStatus === AuthorizationStatus.Auth ?
                  <OfferReviewForm />
                  : <b>Only authorized user could leave a review. Please Sign in</b>
              }
            </section>
          </div>
        </div>
        {nearOffers ?
          (
            <Map city={currentOffer.city} offers={nearOffers} activeOfferId={currentOffer.id} mapClassName={offerPageClassName} />
          ) : null}
      </section>
      <div className="container">
        {nearOffers ?
          (
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                {nearOffers.map((offer: CardProps) => (
                  <OfferCard
                    key={offer.id}
                    offer={offer}
                    cardClassName={nearPlacesClassName}
                  />
                ))}
              </div>
            </section>
          ) : null}
      </div>
    </main>
  );
}

export default OfferScreen;
