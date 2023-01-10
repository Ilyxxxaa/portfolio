import { useState } from 'react';
import './qualification.css';

const tabClassNames = 'qualification__button button--flex';

const Qualification = () => {
  const [tab, setTab] = useState(1);

  const toggleTab = (index: number) => {
    setTab(index);
  };

  const firstTabClassName = tab === 1 ? `${tabClassNames} qualification__active` : tabClassNames;

  const secondTabClassName = tab === 2 ? `${tabClassNames} qualification__active` : tabClassNames;

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={firstTabClassName} onClick={() => toggleTab(1)}>
            <i className="uil uil-graduation-cap qualification__icon"></i> Education
          </div>

          <div className={secondTabClassName} onClick={() => toggleTab(2)}>
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Expirience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              tab === 1
                ? 'qualification__content qualification__content-active'
                : 'qualification__content'
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Design</h3>
                <span className="qualification__subtitle">Spain - Institute</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2021 - Present
                </div>
              </div>

              <div className="">
                <span className="qualification__rounded"></span>
                <span className="qualification__line"></span>
              </div>

              <div className=""></div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounded"></span>
                <span className="qualification__line"></span>
              </div>

              <div className="">
                <h3 className="qualification__title">Art Director</h3>
                <span className="qualification__subtitle">Spain - Institute</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2020 - 2021
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">Spain - Institute</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2018 - 2020
                </div>
              </div>

              <div className="">
                <span className="qualification__rounded"></span>
                <span className="qualification__line"></span>
              </div>

              <div className=""></div>
            </div>

            <div className="qualification__data">
              <div className=""></div>

              <div className="">
                <span className="qualification__rounded"></span>
                <span className="qualification__line"></span>
              </div>

              <div className="">
                <h3 className="qualification__title">UX Expert</h3>
                <span className="qualification__subtitle">Spain - Institute</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2017 - 2018
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              tab === 2
                ? 'qualification__content qualification__content-active'
                : 'qualification__content'
            }
          >
            <div className="qualification__data">
              <div className="">
                <h3 className="qualification__title">Product Design</h3>
                <span className="qualification__subtitle">Microsoft - Spain</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2021 - Present
                </div>
              </div>
              <div className="">
                <span className="qualification__rounded"></span>
                <span className="qualification__line"></span>
              </div>

              <div className=""></div>
            </div>

            <div className="qualification__data">
              <div className=""></div>

              <div className="">
                <span className="qualification__rounded"></span>
                <span className="qualification__line"></span>
              </div>

              <div className="">
                <h3 className="qualification__title">UX Designer</h3>
                <span className="qualification__subtitle">Apple Inc - Spain</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2020 - 2021
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div className="">
                <h3 className="qualification__title">Web Designer</h3>
                <span className="qualification__subtitle">Figma - Spain</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2018 - 2020
                </div>
              </div>
              <div className="">
                <span className="qualification__rounded"></span>
                <span className="qualification__line"></span>
              </div>

              <div className=""></div>
            </div>

            <div className="qualification__data">
              <div className=""></div>

              <div className="">
                <span className="qualification__rounded"></span>
                <span className="qualification__line"></span>
              </div>

              <div className="">
                <h3 className="qualification__title">UX Expert</h3>
                <span className="qualification__subtitle">Spain - Institute</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2017 - 2018
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
