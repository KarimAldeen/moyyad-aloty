import React, { useRef, useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import ContactImage from './ContactImage';

const Contact: React.FC = () => {
  const form = useRef<any>(null);
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (form.current) {
      emailjs.sendForm('service_chmcscc', 'template_t5rgrcx', form.current, '29G9zbZsqD6c-xDsz')
        .then((result) => {
          console.log(result.text);
          form.current.reset();
          toast.success(t('contact.emailSentSuccess'));
          setIsLoading(false);

        })
        .catch((error) => {
          console.log(error.text);
        });
    }
  };

  return (
    <div className="Contact" id="ContactMe">
      <div>
        <h1>{t('contact.title')}</h1>
        <p>{t('contact.sendYourMessage')}</p>
        <ContactImage />
      </div>
      <div>
        <Form ref={form} onSubmit={sendEmail}>
          <Form.Group controlId="formName">
            <Form.Label>{t('contact.name')}</Form.Label>
            <Form.Control type="text" name="to_name" placeholder={t('contact.enterYourName')} />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>{t('contact.email')}</Form.Label>
            <Form.Control type="email" name="from_name" placeholder={t('contact.enterYourEmail')} />
          </Form.Group>
          <Form.Group controlId="formMessage">
            <Form.Label>{t('contact.message')}</Form.Label>
            <Form.Control as="textarea" rows={4} name="message" placeholder={t('contact.typeYourMessage')} />
          </Form.Group>
          <Button disabled={isLoading} className='mt-4 w-100' type="submit">
            { isLoading ? t('contact.loading') : t('contact.submit')  }
            {isLoading ? (
    <Spinner
      style={{ width: "0.7rem", height: "0.7rem" }}
      color="light"
    />
  ) : null }
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
