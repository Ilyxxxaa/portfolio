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
              <div className="">
                <h3 className="qualification__title">Node JS course</h3>
                <span className="qualification__subtitle">RSSChool EPAM</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>December 2022 - now
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

              <div>
                <h3 className="qualification__title">React course</h3>
                <span className="qualification__subtitle">RSSchool EPAM</span>
                <div className="qualification__sertificate">
                  <a
                    className="qualification__sertificate-link"
                    href="https://app.rs.school/certificate/5dab6ifp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Sertificate <i className="bx  bx-award qualification__sertificate-icon"></i>
                  </a>
                </div>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>September 2022 - December 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div className="">
                <h3 className="qualification__title">JavaScript course</h3>
                <span className="qualification__subtitle">RSSchool EPAM</span>
                <div className="qualification__sertificate">
                  <a
                    className="qualification__sertificate-link"
                    href="https://app.rs.school/certificate/w1et2c7r"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Sertificate <i className="bx  bx-award qualification__sertificate-icon"></i>
                  </a>
                </div>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>March 2022 - September 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounded"></span>
                <span className="qualification__line"></span>
              </div>

              <div></div>
            </div>

            <div className="qualification__data">
              <div className=""></div>

              <div className="">
                <span className="qualification__rounded"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">HTML course</h3>
                <span className="qualification__subtitle">HTML Academy</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>February 2022 - March 2022
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
                <h3 className="qualification__title">
                  <a
                    className="qualification__title-link"
                    href="https://github.com/Ilyxxxaa/project-management-app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {' '}
                    Project Management App
                  </a>
                </h3>
                <span className="qualification__subtitle">Trello analogue</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>November 2022 - December 2022
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
                <h3 className="qualification__title">
                  {' '}
                  <a
                    className="qualification__title-link"
                    href="https://github.com/Ilyxxxaa/RSLang"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {' '}
                    RSLang
                  </a>
                </h3>
                <span className="qualification__subtitle">App for learning English</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>July 2022 - September 2022
                </div>
              </div>
            </div>

            {/* <div className="qualification__data">
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
            </div> */}

            {/* <div className="qualification__data">
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
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
