import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchCredits } from 'services/api';
//--------------------------------------------------
import Credits from 'components/credits/Credits';
//--------------------------------------------------
import { Message } from 'components/app-layout/AppLayout.styled';
//--------------------------------------------------
const message = 'There are no cast available';

export default function Cast() {
  const params = useParams();
  const [creditData, setCreditData] = useState([]);

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const credits = await fetchCredits(params.id);

        setCreditData(credits.cast);

        if (credits.cast === 0) {
          return message;
        }
      } catch (error) {}
    }
    getMovieDetails();
  }, [params.id, creditData]);

  return (
    <>
      <Credits cast={creditData} />
      {creditData.length === 0 && <Message>{message}</Message>}
    </>
  );
}
