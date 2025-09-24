'use client';

import { useEffect, useRef, useState } from 'react';

interface Skill {
  name: string;
  percentage: number;
  lastWeek: number;
  lastMonth: number;
}

interface ProgressAngles {
  left: number;
  right: number;
}

export default function SkillsComponent() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    { name: 'CSS', percentage: 95, lastWeek: 28, lastMonth: 60 },
    { name: 'HTML', percentage: 98, lastWeek: 28, lastMonth: 60 },
    { name: 'jQuery', percentage: 68, lastWeek: 28, lastMonth: 60 },
    { name: 'Photoshop', percentage: 92, lastWeek: 28, lastMonth: 60 },
    { name: 'WordPress', percentage: 83, lastWeek: 28, lastMonth: 60 },
    { name: 'SEO', percentage: 95, lastWeek: 28, lastMonth: 60 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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
    <section ref={sectionRef} className="ftco-section bg-light" id="skills-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center ftco-animate">
            <span className="subheading">Skills</span>
            <h2 className="mb-4">My Skills</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
        </div>
        <div className="row progress-circle mb-5">
          {skills.map((skill, index) => (
            <SkillItem 
              key={index} 
              skill={skill} 
              isVisible={isVisible} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface SkillItemProps {
  skill: Skill;
  isVisible: boolean;
  index: number;
}

function SkillItem({ skill, isVisible, index }: SkillItemProps) {
  const [animated, setAnimated] = useState<boolean>(false);

  useEffect(() => {
    if (isVisible && !animated) {
      const timer = setTimeout(() => {
        setAnimated(true);
      }, index * 200);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, animated, index]);

  const calculateProgress = (percent: number): ProgressAngles => {
    const deg = (percent / 100) * 360;
    if (deg <= 180) {
      return { left: deg, right: 0 };
    } else {
      return { left: 180, right: deg - 180 };
    }
  };

  const progress: ProgressAngles = calculateProgress(skill.percentage);

  return (
    <div className="col-lg-4 mb-4">
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="h5 font-weight-bold text-center mb-4">{skill.name}</h2>

        {/* Progress circle */}
        <div className="progress mx-auto">
          <span className="progress-left">
            <span 
              className="progress-bar border-primary" 
              style={{ 
                transform: `rotate(${animated ? progress.left : 0}deg)`,
                transition: 'transform 1.5s ease-in-out'
              }}
            ></span>
          </span>
          <span className="progress-right">
            <span 
              className="progress-bar border-primary" 
              style={{ 
                transform: `rotate(${animated ? progress.right : 0}deg)`,
                transition: 'transform 1.5s ease-in-out'
              }}
            ></span>
          </span>
          <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
            <div className="h2 font-weight-bold">
              {animated ? skill.percentage : 0}<sup className="small">%</sup>
            </div>
          </div>
        </div>
        {/* END */}

        {/* Demo info */}
        <div className="row text-center mt-4">
          <div className="col-6 border-right">
            <div className="h4 font-weight-bold mb-0">{skill.lastWeek}%</div>
            <span className="small text-gray">Last week</span>
          </div>
          <div className="col-6">
            <div className="h4 font-weight-bold mb-0">{skill.lastMonth}%</div>
            <span className="small text-gray">Last month</span>
          </div>
        </div>
        {/* END */}
      </div>
    </div>
  );
}