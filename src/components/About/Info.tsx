const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Expirience</h3>
        <span className="about__subtitle">8 month</span>
      </div>
      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">10+ projects</span>
      </div>
      <div className="about__box">
        <i className="bx bx-book-open about__icon"></i>
        <h3 className="about__title">Studies</h3>
        <span className="about__subtitle">24/7</span>
      </div>
    </div>
  );
};

export default Info;
