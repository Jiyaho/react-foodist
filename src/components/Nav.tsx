import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styles from '../css/App.module.css';

function Nav() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/react-foodist`);
    window.location.reload();
  };
  return (
    <nav className={styles.navWrap}>
      <Link to={`/react-foodist`} onClick={onClick}>
        FOODIST
      </Link>
      <ul>
        <li>
          <Link to={`/react-foodist/about`}>ABOUT US</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
