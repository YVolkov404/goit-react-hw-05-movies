import { fetchReviews } from 'services/api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
//-------------------------------------------------------
import Overviews from 'components/overviews/Overviews';
//-------------------------------------------------------
import { Message } from 'components/app-layout/AppLayout.styled';
//-------------------------------------------------------
const message = 'There are no reviews available';

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
  }, [params.id]);

  return (
    <>
      <Overviews reviews={reviewData} />
      {reviewData.length === 0 && <Message>{message}</Message>}
    </>
  );
}
