import { FaLink, FaBolt } from 'react-icons/fa';
import { SiLeetcode, SiCodeforces } from 'react-icons/si';
import './CodingProfile.css';

const codingProfiles = [
  {
    platform: "LeetCode",
    username: "ChamyalMohit",
    url: "https://leetcode.com/ChamyalMohit/",
    icon: <SiLeetcode />,
    stats: {
      rating: "1900+ (Contest)",
      problemsSolved: "500+",
      highlights: [
        "Top 5% in LeetCode Weekly Contest",
        "300+ Medium/Hard problems solved",
        "Knight Badge Holder"
      ]
    },
    color: "#FFA116"
  },
  {
    platform: "Codeforces",
    username: "mohitchamyal58",
    url: "https://codeforces.com/profile/mohitchamyal58",
    icon: <SiCodeforces />,
    stats: {
      rating: "1253 Max Rating (Contest)",
      contests: "10+ Contest participated",
      highlights: [
        "150+ Problems solved",
        "Pupil Rank Achieved"
      ]
    },
    color: "#1F8ACB"
  }
];

const CodingProfile = () => (
  <section className="coding-profile-section">
    <div className="cp-background">
      <div className="gradient-orb orb-1"></div>
      <div className="gradient-orb orb-2"></div>
    </div>
    <div className="cp-container">
      <div className="section-header">
        <div className="header-icon">
          <FaBolt />
        </div>
        <h2 className="section-title">
          Coding <span className="gradient-text">Profiles</span>
        </h2>
        <p className="section-subtitle">
          Competitive programming stats and online coding achievements
        </p>
      </div>
      <div className="profiles-grid">
        {codingProfiles.map((profile) => (
          <div
            key={profile.platform}
            className="profile-card"
            style={{
              borderColor: profile.color,
              boxShadow: `0 8px 24px 0 ${profile.color}33`
            }}
          >
            <div
              className="platform-icon"
              style={{ color: profile.color }}
              aria-label={profile.platform}
            >
              {profile.icon}
            </div>
            <div className="platform-title">
              <span style={{ color: profile.color, fontWeight: 700 }}>
                {profile.platform}
              </span>
              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="profile-link"
                style={{ color: profile.color }}
                aria-label={`Visit ${profile.platform} profile`}
              >
                <FaLink />
              </a>
            </div>
            <div className="profile-username">
              {profile.username}
            </div>
            <div className="profile-stats">
              {profile.stats.rating && (
                <div className="stat-main">{profile.stats.rating}</div>
              )}
              {profile.stats.problemsSolved && (
                <div>{profile.stats.problemsSolved} problems solved</div>
              )}
              {profile.stats.contests && (
                <div>{profile.stats.contests}</div>
              )}
              <ul className="profile-highlights">
                {profile.stats.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CodingProfile;
