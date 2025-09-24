'use client';

import { useEffect, useRef, useState } from 'react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export default function ServicesComponent() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const services: Service[] = [
    { id: "web-design", title: "Web Design", description: "A small river named Duden flows by their place and supplies.", icon: "flaticon-3d-design" },
    { id: "web-application", title: "Web Application", description: "A small river named Duden flows by their place and supplies.", icon: "flaticon-app-development" },
    { id: "web-development", title: "Web Development", description: "A small river named Duden flows by their place and supplies.", icon: "flaticon-web-programming" },
    { id: "banner-design", title: "Banner Design", description: "A small river named Duden flows by their place and supplies.", icon: "flaticon-branding" },
    { id: "branding", title: "Branding", description: "A small river named Duden flows by their place and supplies.", icon: "flaticon-computer" },
    { id: "icon-design", title: "Icon Design", description: "A small river named Duden flows by their place and supplies.", icon: "flaticon-vector" },
    { id: "graphic-design", title: "Graphic Design", description: "A small river named Duden flows by their place and supplies.", icon: "flaticon-vector" },
    { id: "seo", title: "SEO", description: "A small river named Duden flows by their place and supplies.", icon: "flaticon-zoom" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="ftco-section" id="services-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 heading-section text-center ftco-animate mb-5">
            <span className="subheading">I am grat at</span>
            <h2 className="mb-4">We do awesome services for our clients</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
        </div>

        <div className="row">
          {services.slice(0, 4).map((service) => (
            <ServiceItem 
              key={service.id} 
              service={service} 
              isVisible={isVisible} 
              delay={100}
            />
          ))}
        </div>

        <div className="row">
          {services.slice(4).map((service) => (
            <ServiceItem 
              key={service.id} 
              service={service} 
              isVisible={isVisible} 
              delay={100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceItemProps {
  service: Service;
  isVisible: boolean;
  delay: number;
}

function ServiceItem({ service, isVisible, delay }: ServiceItemProps) {
  const [animated, setAnimated] = useState<boolean>(false);

  useEffect(() => {
    if (isVisible && !animated) {
      const timer = setTimeout(() => {
        setAnimated(true);
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, animated, delay]);

  return (
    <div className="col-md-6 col-lg-3">
      <div 
        className={`media block-6 services d-block bg-white rounded-lg shadow ftco-animate ${animated ? 'fade-in-up' : 'opacity-0'}`}
        style={{ 
          transition: `all 0.5s ease-out ${delay}ms`,
          transform: animated ? 'translateY(0)' : 'translateY(20px)'
        }}
      >
        <div className="icon shadow d-flex align-items-center justify-content-center">
          <span className={service.icon}></span>
        </div>
        <div className="media-body">
          <h3 className="heading mb-3">{service.title}</h3>
          <p>{service.description}</p>
        </div>
      </div> 
    </div>
  );
}