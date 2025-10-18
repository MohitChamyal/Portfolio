import {
  FaCode,
  FaGithub,
  FaExternalLinkAlt,
  FaStar,
  FaEye
} from 'react-icons/fa';
import React from 'react';
import './Project.css';

const Project = () => {
  const projectsData = [
    {
      id: 1,
      title: "LeetCom — Company Wise LeetCode Problem",
      description: "A MERN stack tool for uploading, storing, and searching CSVs of company-wise LeetCode questions. Includes admin auth, Supabase storage for files, and MongoDB for meta-data. Developed with error handling, CSV validation and deployed workflows.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?fit=crop&w=800&q=80", // Coding/CSV/upload
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      category: "Web Development",
      github: "https://github.com/MohitChamyal/LeetCom",
      live: "",
      featured: false
    },
    {
      id: 2,
      title: "Fake News Prediction",
      description: "A machine learning pipeline for predicting fake news articles using Tfidf vectorizer and Logistic Regression, integrated in a Flask web app. Includes upload, live prediction, and sklearn/joblib model persistence.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZI2zDPYkqjTFeDZ61xvpZDC4q7xwcLvfVOA&s", // News
      technologies: ["Python", "scikit-learn"],
      category: "AI/ML",
      github: "https://github.com/MohitChamyal/Fake-News-Detection",
      live: "",
      featured: false
    },
    {
      id: 3,
      title: "Twitter Sentiment Analysis",
      description: "A Python Flask web app for live sentiment analysis of tweets using NLTK/vader and Tfidf, visualizing positive/neutral/negative sentiment in real-time from hashtags and keywords.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?fit=crop&w=800&q=80", // Twitter/sentiment
      technologies: ["Python", "Pandas", "NLTK", "Numpy"],
      category: "AI/ML",
      github: "https://github.com/MohitChamyal/Twitter-Sentiment-Analysis",
      live: "",
      featured: false
    },
    {
      id: 4,
      title: "Handwritten Digit Recognition",
      description: "A convolutional neural network trained on the MNIST dataset to recognize handwritten digits, deployed as an interactive web demo for digit input and prediction.",
      image: "https://machinelearningmastery.com/wp-content/uploads/2019/02/Plot-of-a-Subset-of-Images-from-the-MNIST-Dataset-1024x768.png", // Digits/handwriting
      technologies: ["Python", "TensorFlow", "Keras", "Flask", "MNIST"],
      category: "AI/ML",
      github: "https://github.com/MohitChamyal/Handwritten-Digit-Recognition",
      live: "",
      featured: false
    },
    {
      id: 5,
      title: "Breast Cancer Detection",
      description: "A machine learning model for breast cancer classification using scikit-learn and logistic regression, providing early detection from medical datasets with a clean web interface for predictions.",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?fit=crop&w=800&q=80", // Medical/cancer awareness (pink ribbon)
      technologies: ["Python", "scikit-learn", "Pandas"],
      category: "AI/ML",
      github: "https://github.com/MohitChamyal/Breast-Cancer-Detection",
      live: "",
      featured: false
    },
    {
      id: 6,
      title: "Track Crypto",
      description: "A responsive web dashboard to track cryptocurrency prices, market trends and portfolio performance, using real-time API integrations for top coins with interactive graphs and user watchlists.",
      image: "https://coinstats.app/images/portfolio/landing/new-portfolio-dashboard.png", // Crypto/currency/graph
      technologies: ["React", "Node.js", "Chart.js", "CoinGecko API"],
      category: "Web Development",
      github: "https://github.com/MohitChamyal/Track-Crypto",
      live: "https://track-crypto-realtime.netlify.app/",
      featured: false
    },
    {
      id: 7,
      title: "Sorting Visualizer",
      description: "An interactive algorithm visualizer for popular sorting techniques (merge, quick, bubble, selection and insertion sort), built with React and animated transitions for educational use.",
      image: "https://external-preview.redd.it/O0uJ9RcGlYWTAl136ViRudoF2Et-QpvYLNtTfqgTkRA.png?width=640&crop=smart&format=pjpg&auto=webp&s=b0abb071323121ec480e2add863a90af69c72ec2", // Sorting/bar chart style
      technologies: ["Java"],
      category: "Web Development",
      github: "https://github.com/MohitChamyal/Sorting-Visualizer",
      live: "",
      featured: false
    }
  ];



  const [filter, setFilter] = React.useState('All');
  const categories = ['All', 'Web Development', 'AI/ML'];

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === filter);

  return (
    <section className="project-section">
      <div className="project-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="project-container">
        <div className="section-header">
          <div className="header-icon">
            <FaCode />
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Showcase of my technical skills and creativity
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="filter-container">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {project.featured && (
                <div className="featured-badge">
                  <FaStar /> Featured
                </div>
              )}

              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="overlay-content">
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="category-tag">{project.category}</span>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="tech-stack">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link github-link"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <FaGithub />
                      <span>Code</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link live-link"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <FaExternalLinkAlt />
                      <span>Live Demo</span>
                    </a>
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

export default Project;
