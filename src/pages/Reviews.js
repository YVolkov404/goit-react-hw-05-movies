import Overviews from 'components/overviews/Overviews';
//-------------------------------------------------------
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchReviews } from 'services/api';
//-------------------------------------------------------
export default function Reviews() {
  const params = useParams();

  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const reviewData = await fetchReviews(params.id);

        setReviewData(reviewData.results);
      } catch (error) {}
    }
    getMovieDetails();
  }, [params.id, reviewData]);

  console.log(reviewData);

  return <Overviews reviews={reviewData} />;
}
