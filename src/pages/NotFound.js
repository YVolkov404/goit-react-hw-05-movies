import PageNotFound from '../components/page-404/NotFound';
import { GoBackLink, Icon } from 'components/movie-details/Details.styled';

export default function NotFound() {
  return (
    <>
      <GoBackLink to={'/'}>
        <Icon size="34" />
      </GoBackLink>
      <PageNotFound />
    </>
  );
}
