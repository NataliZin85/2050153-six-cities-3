import { SortOptions } from '../../../const';

function PlaceSortingComponent(): JSX.Element {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type">
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {SortOptions.map((option: string) => (
          <li
            className="places__option"
            key={option}
          >
            {option}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default PlaceSortingComponent;
