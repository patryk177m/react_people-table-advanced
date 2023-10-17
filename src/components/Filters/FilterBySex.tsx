import cn from 'classnames';
import { useSearchParams } from 'react-router-dom';
import { SearchLink } from '../SearchLink';

export const FilterBySex = () => {
  const [searchParams] = useSearchParams();

  return (
    <p className="panel-tabs" data-cy="SexFilter">
      <SearchLink
        className={cn({
          'is-active': !searchParams.get('sex'),
        })}
        params={{ sex: null }}
      >
        All
      </SearchLink>
      <SearchLink
        className={cn({
          'is-active': searchParams.get('sex') === 'm',
        })}
        params={{ sex: 'm' }}
      >
        Male
      </SearchLink>
      <SearchLink
        className={cn({
          'is-active': searchParams.get('sex') === 'f',
        })}
        params={{ sex: 'f' }}
      >
        Female
      </SearchLink>
    </p>
  );
};