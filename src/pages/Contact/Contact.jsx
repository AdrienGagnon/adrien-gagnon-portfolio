import { useRef, useEffect, useState } from 'react';
import { intersectionObserver } from '../utils/intersectionObserver';
import { useSelector } from 'react-redux';

import Footer from '../Footer/Footer';
import BtnLink from '../components/Buttons/BtnLink';
import SectionTitle from '../components/Title/SectionTitle';
import styles from './Contact.module.css';
import ToTop from '../components/Buttons/ToTop';

function Contact() {
    const [active, setActive] = useState(false);
    const [text, setText] = useState({
        name: 'Nom',
        name_placeholder: 'Votre nom',
        adress: 'Adresse email',
        adress_placeholder: 'Votre adresse email',
        subject: 'Sujet',
        subject_placeholder: 'Sujet',
        description: 'Description',
        description_placeholder: 'Écrivez votre message ici.',
    });
    const langage = useSelector(state => {
        return state.langage.langage;
    });
    const activeSection = useSelector(state => {
        return state.activeSection.activeSection;
    });
    const contactRef = useRef();

    useEffect(() => {
        intersectionObserver(contactRef.current);
    }, []);

    useEffect(() => {
        setText(
            langage === 'fr'
                ? {
                      message:
                          "Laisser-moi un message et une légendaire collaboration pourrait s'ensuivre!",
                      name: 'Nom',
                      name_placeholder: 'Votre nom',
                      adress: 'Adresse email',
                      adress_placeholder: 'Votre adresse email',
                      subject: 'Sujet',
                      subject_placeholder: 'Sujet',
                      description: 'Description',
                      description_placeholder: 'Écrivez votre message ici.',
                      submit: 'Soumettre',
                  }
                : {
                      message:
                          'Get in touch with me for business propositions or simply to say hello!',
                      name: 'Name',
                      name_placeholder: 'Your name',
                      adress: 'Adress email',
                      adress_placeholder: 'Your adress email',
                      subject: 'Subject',
                      subject_placeholder: 'Subject',
                      description: 'Description',
                      description_placeholder: 'Write your message here.',
                      submit: 'Submit',
                  }
        );
    }, [langage]);

    useEffect(() => {
        activeSection === 'contact' && !active && setActive(true);
    }, [activeSection]);

    return (
        <div
            ref={contactRef}
            className={[
                styles['contact-container'],
                active ? styles['active'] : '',
            ].join(' ')}
            id="contact"
        >
            <SectionTitle
                titleFr={'Me contacter'}
                titleEn={'Contact me'}
                transition={active}
            />
            <p className={styles['contact-message']}>{text.message}</p>
            <form
                action="https://formsubmit.co/adrien.gagnon25@outlook.com"
                method="POST"
            >
                <div className={styles['form-contact-container']}>
                    <label htmlFor="name">{text.name}</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder={text.name_placeholder}
                        required
                    />
                    <label htmlFor="email">{text.adress}</label>
                    <input
                        id="email"
                        type="text"
                        name="email"
                        placeholder={text.adress_placeholder}
                        required
                    />
                    <label htmlFor="subject">{text.subject}</label>
                    <input
                        id="subject"
                        type="text"
                        name="subject"
                        placeholder={text.subject_placeholder}
                    />
                    <label htmlFor="description" className={styles.description}>
                        {text.description}
                    </label>
                    <textarea
                        id="description"
                        type="text"
                        rows="5"
                        name="description"
                        placeholder={text.description_placeholder}
                        required
                    ></textarea>
                </div>
                <input id="envoi-email" type="hidden" name="_next" value="" />
                <BtnLink
                    type="btn"
                    value="Soumettre"
                    text={text.submit}
                    options={{ type: 'submit' }}
                />
            </form>
            <ToTop />
            <Footer />
        </div>
    );
}

export default Contact;
