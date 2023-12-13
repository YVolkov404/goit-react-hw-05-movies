import { fetchDetails } from 'services/api';
import { Loader } from 'services/Loader';
import { useEffect, useState, useRef } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
//---------------------------------------------------------------
import Details from 'components/movie-details/Details';

export default function MovieDetails() {
  const location = useLocation();
  const backLinkRef = useRef(location);

  const params = useParams();
  const [detailData, setDetailData] = useState([]);
  const [loading, isLoading] = useState(false);

  useEffect(() => {
    async function getMovieDetails() {
      try {
        isLoading(true);
        const details = await fetchDetails(params.id);

        setDetailData(details);
      } catch (error) {
      } finally {
        isLoading(false);
      }
    }
    getMovieDetails();
  }, [params.id]);

  return (
    <>
      <Details location={backLinkRef.current.state} details={detailData} />
      <Outlet />
      {loading && <Loader />}
    </>
  );
}
