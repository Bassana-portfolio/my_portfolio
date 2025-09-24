'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  id: number;
  image: string;
  title: string;
  category: string;
  description?: string;
}

export default function CertificatesComponent() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects: Project[] = [
    { id: 1, image: "/images/work-1.jpg", title: "Branding Design", category: "Branding" },
    { id: 2, image: "/images/work-2.jpg", title: "Web Application", category: "Web Development" },
    { id: 3, image: "/images/work-3.jpg", title: "Illustration Design", category: "Design" },
    { id: 4, image: "/images/work-4.jpg", title: "Mobile App UI", category: "UI/UX" },
    { id: 5, image: "/images/work-5.jpg", title: "E-commerce Website", category: "Web Development" },
    { id: 6, image: "/images/work-6.jpg", title: "Logo Design", category: "Branding" },
    { id: 7, image: "/images/work-7.jpg", title: "Dashboard Design", category: "UI/UX" },
    { id: 8, image: "/images/work-8.jpg", title: "Social Media Graphics", category: "Design" }
  ];

  const categories = ['all', ...new Set(projects.map(p => p.category))];
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="ftco-section ftco-project" id="projects-section">
      <div className="container-fluid px-md-4">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center ftco-animate">
            <span className="subheading">Accomplishments</span>
            <h2 className="mb-4">Our Projects</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
        </div>

        {/* Filtres */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-8 text-center">
            <div className="project-filters">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`btn btn-outline-primary mx-2 mb-2 ${activeFilter === category ? 'active' : ''}`}
                  onClick={() => setActiveFilter(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="row">
          {filteredProjects.map((project, index) => (
            <ProjectItem 
              key={project.id} 
              project={project} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectItemProps {
  project: Project;
  index: number;
}

function ProjectItem({ project, index }: ProjectItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="col-md-3 mb-4">
      <div 
        className="project img shadow ftco-animate d-flex justify-content-center align-items-center"
        style={{ 
          position: 'relative',
          height: '300px',
          overflow: 'hidden',
          cursor: 'pointer'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className="overlay" 
          style={{ 
            opacity: isHovered ? 0.7 : 0,
            transition: 'opacity 0.3s ease'
          }}
        ></div>
        <Image
          src={project.image}
          alt={project.title}
          fill
          style={{ 
            objectFit: 'cover',
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
            transition: 'transform 0.3s ease'
          }}
        />
        <div 
          className="text text-center p-4"
          style={{
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.3s ease',
            zIndex: 2
          }}
        >
          <h3>
            <Link href="#" className="text-white text-decoration-none">
              {project.title}
            </Link>
          </h3>
          <span className="text-white">{project.category}</span>
        </div>
      </div>
    </div>
  );
}