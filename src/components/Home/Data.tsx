import hand from '../../assets/hand.svg';
import send from '../../assets/send.svg';

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Ilya Kotsur
        <img src={hand} alt="hand__image" className="home__hand" />
      </h1>
      <h3 className="home__subtitle">Frontend Developer</h3>
      <p className="home__descr">
        I am enthusiastic and detail-oriented frontend developer with big passion for programming
      </p>
      <a className="button button--flex" href="https://www.linkedin.com/in/ilyxxxaa/">
        Say Hello
        <img src={send} alt="send" />
      </a>
    </div>
  );
};

export default Data;
