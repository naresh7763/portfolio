// components/About.jsx

import { FaNodeJs, FaPhp, FaDatabase } from "react-icons/fa";
import '../assets/css/About.css';
const skills = [
  {
    icon: <FaNodeJs size={40} />,
    title: "MERN Stack",
    subtitle: "MongoDB, Express, React, Node.js",
    description: "Build modern full-stack apps using the powerful MERN stack.",
    class: "green",
  },
  {
    icon: <FaPhp size={40} />,
    title: "PHP Development",
    subtitle: "Laravel & CodeIgniter",
    description: "Efficient web apps using PHP frameworks like Laravel and CI.",
    class: "indigo",
  },
  {
    icon: <FaDatabase size={40} />,
    title: "Databases",
    subtitle: "MongoDB & SQL",
    description: "Work with NoSQL & SQL databases for scalable solutions.",
    class: "yellow",
  },
];

const About = () => {
  return (
    <section id="about" className="about-section scroll-mt-16">
      <div className="overlay">
        <h2 className="about-heading">Technologies I Work With</h2>
        <div className="card-row">
          {skills.map((skill, index) => (
            <div key={index} className={`about-card ${skill.class}`}>
              <div className="icon">{skill.icon}</div>
              <h3 className="card-title">{skill.title}</h3>
              <p className="card-subtitle">{skill.subtitle}</p>
              <p className="card-description">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
