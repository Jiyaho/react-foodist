import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styles from '../css/App.module.css';

function Nav() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/`);
    window.location.reload();
  }
  return (
    <div className={styles.navWrap}>
      <Link to={`/`} onClick={onClick}>
        FOODIST
      </Link>
      <ul>
        <li>
          <Link to={`/about`}>ABOUT US</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav;