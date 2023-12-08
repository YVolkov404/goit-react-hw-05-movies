import Overviews from 'components/overviews/Overviews';
//-------------------------------------------------------
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchReviews } from 'services/api';
//-------------------------------------------------------
export default function Reviews() {
  const params = useParams();

  console.log(params);
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const credits = await fetchReviews(params.id);

        setReviewData(credits.cast);
      } catch (error) {}
    }
    getMovieDetails();
  }, [params.id, reviewData]);

  return <Overviews reviews={reviewData} />;
}
