import Overviews from 'components/overviews/Overviews';
//-------------------------------------------------------
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchReviews } from 'services/api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { notiflixSettings } from 'services/notiflixOptions';
//-------------------------------------------------------
import { Message } from 'components/overviews/Overviews.styled';
//-------------------------------------------------------
export default function Reviews() {
  const params = useParams();

  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const reviewData = await fetchReviews(params.id);

        if (reviewData === 0) {
          throw new Error();
        }

        setReviewData(reviewData.results);
      } catch (error) {
        Notify.info('Sorry! There are no reviews available', notiflixSettings);
      }
    }
    getMovieDetails();
  }, [params.id, reviewData]);

  return (
    <>
      {reviewData.length > 0 ? (
        <Overviews reviews={reviewData} />
      ) : (
        <Message>There are no reviews available</Message>
      )}
    </>
  );
}
