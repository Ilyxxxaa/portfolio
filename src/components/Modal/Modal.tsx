import React, { Dispatch, SetStateAction, useCallback } from 'react';
import './modal.css';

interface ModalProps {
  showModal: Dispatch<SetStateAction<boolean>>;
  modal: boolean;
}

const Modal: React.FC<ModalProps> = ({ modal, showModal }) => {
  const hideModalHandler = useCallback(() => {
    showModal(false);
    document.body.style.overflowY = 'visible';
  }, [showModal]);

  const stopPropagation = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  if (!modal) return null;
  return (
    <div className="modal__wrapper" onClick={hideModalHandler}>
      <div className="modal__content" onClick={stopPropagation}>
        <div className="modal__close" onClick={hideModalHandler}>
          <i className="uil uil-times"></i>
        </div>
        <div className="modal__body">
          <h3 className="modal__title">About me</h3>
          <div className="modal__text">
            <p>
              Hello World! My name is Ilya and I am 22 years old. In 2021, I graduated from the
              university with a degree in oil and gas processing and began working at an oil
              refinery. After half year of work I felt that I was not developing and not realizing
              my potential. So I decided to change my occupation
            </p>
            <p>
              One day I saw how my friend makes up websites and it got me very interested. When I
              wrote the first lines of code and saw the result on the screen, I felt incredible
              emotions. I began to devote more and more of my free time to this and understood that
              I wanted to become a frontend developer.{' '}
            </p>
            <p>
              I started with tutorial videos on YouTube, made some websites with HTML and CSS. Then
              I focused on learning Javascript. in March 2022 I got into the Rolling Scopes School
              courses from EPAM. Sometimes it was very hard, but I got it and completed 2 courses:
              RSSchool JavaScript course and RSSchool React course.
            </p>
            <p>
              During my study in RSSchool, I gained a huge amount of knowledge and experience,
              completed more than 10 projects, 2 of which were carried out in a team and were as
              close as possible to commercial development. You can see all my work in my portfolio
              below.{' '}
            </p>
            <p>
              Ever since I started programming, I feel like my brain is working at full capacity,
              and it`s amazing! I am constantly learning, developing and improving, so I am sure
              that thanks to my skills and personal qualities I will be able to achieve a lot in
              this industry.
            </p>
            <p>
              Now I am looking a company, where I can work with wonderful people and great projects
              and can grow as a professional, develop, implement cool ideas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
