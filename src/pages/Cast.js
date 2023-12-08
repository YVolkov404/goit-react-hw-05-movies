import Credits from 'components/credits/Credits';
// import { Layout } from 'components/App.styled';
//--------------------------------------------------
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchCredits } from 'services/api';

export default function Cast() {
  const params = useParams();
  const [creditData, setCreditData] = useState([]);

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const credits = await fetchCredits(params.id);

        setCreditData(credits.cast);
      } catch (error) {}
    }
    getMovieDetails();
  }, [params.id, creditData]);

  return <Credits cast={creditData} />;
}
