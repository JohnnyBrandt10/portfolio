'use client';
import { useState } from 'react';

const contactInfo = [
  {
    icon: 'ri-mail-line',
    label: 'Email',
    value: 'johnnybrandt10@gmail.com',
    href: 'mailto:johnnybrandt10@gmail.com'
  },
  {
    icon: 'ri-whatsapp-line',
    label: 'WhatsApp',
    value: '+261 34 74 741 72',
    href: 'https://wa.me/261347474172'
  },
  {
    icon: 'ri-map-pin-line',
    label: 'Localisation',
    value: 'Antananarivo, Madagascar',
    href: null
  },
  {
    icon: 'ri-linkedin-box-line',
    label: 'LinkedIn',
    value: 'Johnny Fanilonantenaïna',
    href: 'https://www.linkedin.com/in/johnny-brandt-b1094931b/'
  },
  {
    icon: 'ri-github-fill',
    label: 'GitHub',
    value: 'JohnnyBrandt10',
    href: 'https://github.com/JohnnyBrandt10'
  }
];

export default function Contact() {
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formEl = e.currentTarget;

    // Récupère les valeurs AVANT l'await
    const templateParams = {
      name: (formEl.elements.namedItem('name') as HTMLInputElement).value,
      email: (formEl.elements.namedItem('email') as HTMLInputElement).value,
      message: (formEl.elements.namedItem('message') as HTMLTextAreaElement)
        .value
    };

    try {
      const emailjs = (await import('@emailjs/browser')).default;

      await emailjs.send(
        'service_j9e8pr7',
        'template_4okthac',
        templateParams,
        'Z6H9Ptr_JJswuLQ1_'
      );

      setStatus('success');
      formEl.reset();
      setTimeout(() => setStatus('idle'), 4000);
    } catch (error) {
      console.log('EmailJS error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">
        Contact <span>Me</span>
      </h2>

      <div className="contact__container container grid">
        {/* Formulaire */}
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__input-group">
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              className="contact__input"
              required
            />
          </div>
          <div className="contact__input-group">
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              className="contact__input"
              required
            />
          </div>
          <div className="contact__input-group">
            <textarea
              name="message"
              placeholder="Votre message"
              className="contact__input contact__textarea"
              rows={6}
              required
            />
          </div>

          <button
            type="submit"
            className="button contact__button"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? (
              'Envoi en cours...'
            ) : (
              <>
                Send Message <i className="ri-send-plane-line"></i>
              </>
            )}
          </button>

          {status === 'success' && (
            <p className="contact__message contact__message--success">
              <i className="ri-checkbox-circle-line"></i> Message envoyé avec
              succès !
            </p>
          )}

          {status === 'error' && (
            <p className="contact__message contact__message--error">
              <i className="ri-error-warning-line"></i> Erreur. Réessaie ou
              contacte-moi par email.
            </p>
          )}
        </form>

        {/* Infos contact */}
        <div className="contact__info">
          {contactInfo.map((info) =>
            info.href ? (
              <a
                href={info.href}
                key={info.label}
                className="contact__info-item"
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel={info.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <div className="contact__info-icon">
                  <i className={info.icon}></i>
                </div>
                <div>
                  <span className="contact__info-label">{info.label}</span>
                  <span className="contact__info-value">{info.value}</span>
                </div>
                <div className="contact__info-arrow">
                  <i className="ri-arrow-right-up-line"></i>
                </div>
              </a>
            ) : (
              <div key={info.label} className="contact__info-item">
                <div className="contact__info-icon">
                  <i className={info.icon}></i>
                </div>
                <div>
                  <span className="contact__info-label">{info.label}</span>
                  <span className="contact__info-value">{info.value}</span>
                </div>
                <div className="contact__info-arrow">
                  <i className="ri-map-pin-line"></i>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
