import { fetchDetails } from 'services/api';
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
//---------------------------------------------------------------
// import { Main } from 'components/app-layout/AppLayout.styled';
import Details from 'components/movie-details/Details';

//---------------------------------------------------------------
export default function MovieDetails() {
  const params = useParams();
  const [detailData, setDetailData] = useState([]);

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const details = await fetchDetails(params.id);

        setDetailData(details);
      } catch (error) {}
    }
    getMovieDetails();
  }, [params.id, detailData]);

  return (
    <>
      <Details details={detailData} />
      <Outlet />
    </>
  );
}