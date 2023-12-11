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
        const details = await fetchDetails(params.id);
        isLoading(true);
        setDetailData(details);
      } catch (error) {
      } finally {
        isLoading(loading);
      }
    }
    getMovieDetails();
  }, [params.id, detailData, loading]);

  return (
    <>
      <Details location={backLinkRef.current.state} details={detailData} />
      <Outlet />
      {loading && <Loader />}
    </>
  );
}
