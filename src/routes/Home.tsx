import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Search from '../components/Search';
import ScrollBtn from '../components/ScrollBtn';

function Home() {
  return (
    <main>
      <Nav />
      <ScrollBtn />
      <section>
        <Search />
      </section>
      <Footer />
    </main>
  );
}

export default Home;
