import BtnLink from '../components/Buttons/BtnLink';
import SectionTitle from '../components/Title/SectionTitle';
import styles from './Contact.module.css';

function Contact() {
    return (
        <div className={styles['contact-container']}>
            <SectionTitle titleFr={'Me contacter'} titleEn={'Contact me'} />
            <form
                action="https://formsubmit.co/adrien.gagnon25@outlook.com"
                method="POST"
            >
                <div className={styles['form-contact-container']}>
                    <label htmlFor="name">Nom</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Votre nom"
                        required
                    />
                    <label htmlFor="email">Adresse email</label>
                    <input
                        id="email"
                        type="text"
                        name="email"
                        placeholder="Adresse email"
                        required
                    />
                    <label htmlFor="subject">Subject</label>
                    <input
                        id="subject"
                        type="text"
                        name="subject"
                        placeholder="Subject"
                    />
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        type="text"
                        rows="5"
                        name="description"
                        placeholder="Écrivez votre message ici."
                        required
                    ></textarea>
                </div>
                <input id="envoi-email" type="hidden" name="_next" value="" />
                <BtnLink
                    type="btn"
                    value="Soumettre"
                    fr={'Soumettre /'}
                    en={'/ Submit'}
                    options={{ type: 'submit' }}
                />
            </form>
        </div>
    );
}

export default Contact;