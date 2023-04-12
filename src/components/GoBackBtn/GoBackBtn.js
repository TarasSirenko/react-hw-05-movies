import { Link } from 'react-router-dom';
import s from './GoBackBtn.module.css';

export default function GoBackBtn() {
  return (
    <Link to="/" className={s.link}>
      <p>Go back</p>
    </Link>
  );
}
