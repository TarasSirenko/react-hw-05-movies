import s from './Appbar.module.css';
import Navigation from 'components/Navigation/Navigation';

export default function AppBar() {
  return <header className={s.header}>{<Navigation />}</header>;
}
