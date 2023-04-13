// import s from './Reviews.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Api from 'Api/Api';

export default function Reviews() {
  const [reviews, setReviews] = useState(null);
  const id = useParams().movieId;
  useEffect(() => {
    Api.fetchReviewsById(id).then(({ results }) => setReviews(results));
  }, [id]);
  if (reviews && reviews.length === 0) {
    return <h3>We dont have any reviews for this movie.</h3>;
  }
  return (
    <ul>
      {reviews &&
        reviews.map(({ author, content, id }) => {
          return (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          );
        })}
    </ul>
  );
}
