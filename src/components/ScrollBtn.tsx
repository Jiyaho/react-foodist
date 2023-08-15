import { useEffect, useState } from 'react';
import styles from '../css/App.module.css';

function ScrollBtn() {
  const [toggleScrollBtn, setToggleScrollBtn] = useState(false);

  const handleScroll = () => {
    window.scrollY > 350 ? setToggleScrollBtn(true) : setToggleScrollBtn(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {toggleScrollBtn ? (
        <button onClick={scrollToTop} className={styles.scrollBtn}>
          🔝
        </button>
      ) : null}
    </>
  );
}

export default ScrollBtn;
