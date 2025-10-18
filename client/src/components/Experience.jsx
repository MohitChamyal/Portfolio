import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaTools,
  FaExternalLinkAlt
} from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experienceData = [
    {
      id: 1,
      role: "Salesforce Developer Intern",
      company: "Salesforce",
      location: "Remote",
      duration: "May 2025 - July 2025",
      type: "Internship",
      description: "Contributed to the development and optimization of Salesforce CRM solutions, gaining practical experience in Apex, Lightning Web Components, and workflow automation during a hands-on summer internship.",
      responsibilities: [
        "Automated Salesforce CRM workflows for inventory, orders, and dealer management using Apex, Triggers, and Flows.",
        "Developed custom Lightning Web Components (LWC) and validation rules to improve data accuracy and enhance user experience."
      ],
      technologies: [],
      link: ""

    },
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'Internship':
        return { bg: 'rgba(102, 126, 234, 0.1)', border: '#667eea', text: '#667eea' };
      case 'Volunteer':
        return { bg: 'rgba(34, 211, 238, 0.1)', border: '#22d3ee', text: '#22d3ee' };
      case 'Full-time':
        return { bg: 'rgba(240, 147, 251, 0.1)', border: '#f093fb', text: '#f093fb' };
      default:
        return { bg: 'rgba(102, 126, 234, 0.1)', border: '#667eea', text: '#667eea' };
    }
  };

  return (
    <section className="experience-section">
      <div className="experience-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>

      <div className="experience-container">
        <div className="section-header">
          <div className="header-icon">
            <FaBriefcase />
          </div>
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            My professional journey and contributions
          </p>
        </div>

        <div className="timeline">
          <div className="timeline-line"></div>

          {experienceData.map((exp, index) => (
            <div
              key={exp.id}
              className="timeline-item"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-dot">
                <div className="dot-inner">
                  <FaBriefcase />
                </div>
              </div>

              <div className="timeline-content">
                <div className="experience-card">
                  <div className="card-header">
                    <div className="header-top">
                      <h3 className="role-title">{exp.role}</h3>
                      <span
                        className="type-badge"
                        style={{
                          backgroundColor: getTypeColor(exp.type).bg,
                          borderColor: getTypeColor(exp.type).border,
                          color: getTypeColor(exp.type).text
                        }}
                      >
                        {exp.type}
                      </span>
                    </div>
                    <div className="company-info">
                      <h4 className="company-name">{exp.company}</h4>
                      {exp.link && (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="company-link"
                          aria-label={`Visit ${exp.company}`}
                        >
                          <FaExternalLinkAlt />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="meta-info">
                    <div className="info-item">
                      <FaCalendarAlt className="info-icon" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="info-item">
                      <FaMapMarkerAlt className="info-icon" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="description">{exp.description}</p>

                  {exp.responsibilities.length > 0 && (
                    <div className="responsibilities">
                      <h5 className="responsibilities-title">
                        <FaTools className="section-icon" />
                        Key Responsibilities
                      </h5>
                      <ul className="responsibilities-list">
                        {exp.responsibilities.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {exp.technologies.length > 0 && (
                    <div className="technologies">
                      <h5 className="tech-title">Technologies Used</h5>
                      <div className="tech-tags">
                        {exp.technologies.map((tech, idx) => (
                          <span key={idx} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
