'use client';

import { useState } from 'react';
import Link from 'next/link';

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  href?: string;
  isLink?: boolean;
}

export default function EndContactComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo: ContactInfo[] = [
    {
      icon: 'fa-map-marker',
      label: 'Address:',
      value: '198 West 21th Street, Suite 721 New York NY 10016'
    },
    {
      icon: 'fa-phone',
      label: 'Phone:',
      value: '+ 1235 2355 98',
      href: 'tel:+1235235598',
      isLink: true
    },
    {
      icon: 'fa-paper-plane',
      label: 'Email:',
      value: 'info@yoursite.com',
      href: 'mailto:info@yoursite.com',
      isLink: true
    },
    {
      icon: 'fa-globe',
      label: 'Website',
      value: 'yoursite.com',
      href: '#',
      isLink: true
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simuler l'envoi du formulaire
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form data submitted:', formData);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="ftco-section contact-section ftco-no-pb" id="contact-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center ftco-animate">
            <span className="subheading">Contact us</span>
            <h2 className="mb-4">Have a Project?</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
        </div>

        <div className="row block-9">
          <div className="col-md-8">
            <form onSubmit={handleSubmit} className="bg-light p-4 p-md-5 contact-form">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      cols={30}
                      rows={7}
                      className="form-control"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-primary py-3 px-5"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="col-md-4 d-flex pl-md-5">
            <div className="row">
              {contactInfo.map((info, index) => (
                <ContactInfoItem key={index} info={info} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ContactInfoItemProps {
  info: ContactInfo;
}

function ContactInfoItem({ info }: ContactInfoItemProps) {
  const content = info.isLink ? (
    <Link href={info.href || '#'} className="text-decoration-none">
      {info.value}
    </Link>
  ) : (
    <span>{info.value}</span>
  );

  return (
    <div className="dbox w-100 d-flex mb-4">
      <div className="icon d-flex align-items-center justify-content-center">
        <span className={`fa ${info.icon}`}></span>
      </div>
      <div className="text ps-3">
        <p className="mb-0">
          <span className="fw-bold">{info.label}</span> {content}
        </p>
      </div>
    </div>
  );
}