import { frontendSkills } from './data';

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          {frontendSkills.map((item, index) => {
            if (index <= 1) {
              return (
                <div className="skills__data" key={item.name}>
                  <i className="bx bx-badge-check"></i>

                  <div className="">
                    <h3 className="skills__name">{item.name}</h3>
                    <span className="skills__level">{item.level}</span>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className="skills__group">
          {frontendSkills.map((item, index) => {
            if (index >= 3) {
              return (
                <div className="skills__data" key={item.name}>
                  <i className="bx bx-badge-check"></i>

                  <div className="">
                    <h3 className="skills__name">{item.name}</h3>
                    <span className="skills__level">{item.level}</span>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Frontend;
