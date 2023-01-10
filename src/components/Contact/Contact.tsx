import { FormEvent, useRef } from 'react';
import emailjs from '@emailjs/browser';
import send from '../../assets/send.svg';
import { contactCardsArray } from './data';
import { toast } from 'react-toastify';

import './contact.css';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_c31gzvc',
        'template_y0qbmhf',
        formRef.current as HTMLFormElement,
        '6oEdB4YNbTPCWoJ2_'
      )
      .then(
        () => {
          toast.success('Message sent');
        },
        () => {
          toast.error('Something went wrong. Try it later');
        }
      );

    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact me</span>

      <div className="contact__container container">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            {contactCardsArray.map((item) => {
              return (
                <div className="contact__card" key={item.title}>
                  <i className={`bx ${item.iconClassName} contact__card-icon`}></i>

                  <h3 className="contact__card-title">{item.title}</h3>
                  <span className="contact__card-data">{item.data}</span>

                  <a className="contact__button" href={item.href}>
                    Write me
                    <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your message</h3>

          <form ref={formRef} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                className="contact__form-input "
                name="name"
                placeholder="Insert your name"
              />
            </div>
            <div className="contact__form-div">
              <label className="contact__form-tag">Mail</label>
              <input
                type="text"
                className="contact__form-input "
                name="name"
                placeholder="Insert your email"
              />
            </div>
            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Project</label>
              <textarea
                className="contact__form-input"
                name="project"
                cols={30}
                rows={10}
                placeholder="Write your project"
              />
            </div>
            <button className="button button--flex">
              Send Message
              <img src={send} alt="send" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
