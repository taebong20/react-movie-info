import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [loading, setLoding] = useState(true);
  const [movie, setMovie] = useState();
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoding(false);
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <div>{loading ? <h1>Loading..</h1> : null}</div>;
};

export default Detail;
