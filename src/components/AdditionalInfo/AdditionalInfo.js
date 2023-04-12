import { useRouteMatch, Link } from 'react-router-dom';
import s from './AdditionalInfo.module.css';

export default function AdditionalInfo() {
  const { url } = useRouteMatch();
  return (
    <div className={s.additionalInfo}>
      <h3>Additional Info</h3>
      <ul>
        <Link to={`${url}/cast`} className={s.link}>
          <li>Cast</li>
        </Link>
        <Link to={`${url}/reviews`} className={s.link}>
          <li>Reviews</li>
        </Link>
      </ul>
    </div>
  );
}
