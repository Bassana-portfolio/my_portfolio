'use client';

import { useState, useEffect, useRef } from 'react';

export default function CounterComponent() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const counters = [
    { number: 750, text: 'Project Complete', icon: 'flaticon-suitcase' },
    { number: 568, text: 'Happy Clients', icon: 'flaticon-loyalty' },
    { number: 478, text: 'Cups of coffee', icon: 'flaticon-coffee' },
    { number: 780, text: 'Years experienced', icon: 'flaticon-calendar' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
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
    <section ref={sectionRef} className="ftco-counter img bg-light" id="section-counter">
      <div className="container">
        <div className="row">
          {counters.map((counter, index) => (
            <div key={index} className="col-md-3 justify-content-center counter-wrap ftco-animate">
              <div className="block-18 d-flex">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className={counter.icon}></span>
                </div>
                <div className="text">
                  <strong className="number">
                    {isVisible ? <CountUp end={counter.number} /> : '0'}
                  </strong>
                  <span>{counter.text}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Composant CountUp pour l'animation des nombres
function CountUp({ end = 0, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) {
      let startTime: number | null  = null;
      
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setHasAnimated(true);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [end, duration, hasAnimated]);

  return <>{count}</>;
}