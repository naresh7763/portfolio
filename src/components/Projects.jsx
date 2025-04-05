import React, { useState } from "react";
import '../assets/css/Project.css';

const topProjects = [
  {
    title: "Super Inn",
    description: "A hotel management system with online room booking and admin dashboard.",
    tech: "React, Node.js, MongoDB",
  },
  {
    title: "Abroad Mate - Student Visa Process",
    description: "A consultancy platform helping students with their study abroad journey.",
    tech: "Laravel, MySQL",
  },
  {
    title: "Sleeplyfe",
    description: "E-commerce site focused on sleep essentials with a smooth UI and secure checkout.",
    tech: "Next.js, Stripe, Tailwind",
  },
];

const allProjects = [
  {
    title: "Alina Solution",
    description: "Business solution provider with client and employee management tools.",
    tech: "React, PHP, MySQL",
  },
  {
    title: "Egservice",
    description: "Service aggregator platform connecting users with verified professionals.",
    tech: "Laravel, Vue.js",
  },
  {
    title: "Dr At Door Step",
    description: "Healthcare services app offering home visits from doctors and nurses.",
    tech: "Flutter, Firebase",
  },
  {
    title: "Digital Signature",
    description: "Platform for generating and verifying legally binding e-signatures.",
    tech: "Node.js, React",
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    setShowAll(!showAll);
    if (!showAll) {
      const allProjectsSection = document.getElementById("all-projects");
      if (allProjectsSection) {
        allProjectsSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="projects" className="relative">
      <div className="content-wrapper">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Featured Projects
        </h2>

        {/* Top 3 Projects */}
        <div className="project-grid">
          {topProjects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <small>Tech Used: {project.tech}</small>
            </div>
          ))}
        </div>

        {/* Toggle Button */}
        <div className="view-all-link">
          <a onClick={handleToggle} className="cursor-pointer">
            {showAll ? "Hide Projects ↑" : "View All Projects ↓"}
          </a>
        </div>

        {/* All Projects Section */}
        {showAll && (
          <div id="all-projects">
            <h3>All Projects</h3>
            <div className="all-projects-grid">
              {allProjects.map((project, index) => (
                <div key={index} className="project-card">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <small>Tech Used: {project.tech}</small>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
