import Footer from '../components/Footer';
import Nav from '../components/Nav';
import styles from '../css/App.module.css';

function About() {
  return (
    <main>
      <Nav />
      <section className={styles.container}>
        <p className={styles.p1}>
          <b style={{ color: 'red' }}>❓ Foodist</b>의 사전적 의미는 <i>음식에 매우 관심이 많은 사람</i> 을 뜻하며,
        </p>
        <p className={styles.p2}>
          푸디스트는 사용자가 원하는 <u>음식의 영양학적 정보(영양 분석 데이터)</u>를 제공합니다.
        </p>
      </section>
      <Footer />
    </main>
  );
}

export default About;
