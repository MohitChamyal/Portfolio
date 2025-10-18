import { 
  FaGraduationCap, 
  FaCalendarAlt,
  FaMapMarkerAlt 
} from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Technology in Computer Science",
      institution: "Graphic Era Hill University",
      location: "Dehradun, Uttarakhand",
      duration: "2022 - 2026",
      grade: "CGPA: 8.63/10",
      highlights: [
        "Data Structures & Algorithms",
        "Web Development",
        "Machine Learning & AI",
        "Database Management Systems"
      ]
    },
    {
      id: 2,
      degree: "Higher Secondary Education (12th)",
      institution: "Army Public School",
      location: "Dehradun, Uttarakhand",
      duration: "2021 - 2022",
      grade: "Percentage: 92.4%",
      highlights: [
        "Physics, Chemistry, Mathematics",
        "Computer Science"
      ]
    },
    {
      id: 3,
      degree: "Secondary Education (10th)",
      institution: "Army Public School",
      location: "Dehradun, Uttarakhand",
      duration: "2019 - 2020",
      grade: "Percentage: 93.4%",
      highlights: []
    }
  ];

  return (
    <section className="education-section">
      <div className="education-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>

      <div className="education-container">
        <div className="section-header">
          <div className="header-icon">
            <FaGraduationCap />
          </div>
          <h2 className="section-title">
            Educational <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle">
            My academic background and achievements
          </p>
        </div>

        <div className="timeline">
          <div className="timeline-line"></div>
          
          {educationData.map((edu, index) => (
            <div 
              key={edu.id} 
              className="timeline-item"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-dot">
                <div className="dot-inner">
                  <FaGraduationCap />
                </div>
              </div>

              <div className="timeline-content">
                <div className="education-card">
                  <div className="card-header">
                    <h3 className="degree-title">{edu.degree}</h3>
                    <div className="grade-badge">{edu.grade}</div>
                  </div>

                  <div className="institution-info">
                    <div className="info-item">
                      <FaMapMarkerAlt className="info-icon" />
                      <span className="institution-name">{edu.institution}</span>
                    </div>
                    <div className="info-item">
                      <span className="location">{edu.location}</span>
                    </div>
                  </div>

                  <div className="duration">
                    <FaCalendarAlt className="duration-icon" />
                    <span>{edu.duration}</span>
                  </div>

                  {edu.highlights.length > 0 && (
                    <div className="highlights">
                      <h4 className="highlights-title">Key Subjects</h4>
                      <div className="highlights-tags">
                        {edu.highlights.map((highlight, idx) => (
                          <span key={idx} className="highlight-tag">
                            {highlight}
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

export default Education;
