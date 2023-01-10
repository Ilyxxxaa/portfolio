import Data from './Data';
import Social from '../Social/Social';
import ScrollDown from './ScrollDown';

import './home.css';

const Home = () => {
  return (
    <>
      <section className="home section" id="home">
        <div className="home__container container">
          <div className="home__content grid">
            <Social divClassName="home__social" linkClassName="home__social-icon" />

            <div className="home__img"></div>
            <Data />
          </div>
          <ScrollDown />
        </div>
      </section>
    </>
  );
};

export default Home;
