import React from "react";

import "./style.css";
const jobPosts = [
  {
    date: "February 20, 2025",
    title: "Analytics Engineer",
    jobId: "TL100109",
    location: "New York Office or Remote (US EST Business)",
    author: "Sid Singh",
  },
  {
    date: "February 7, 2025",
    title: "SQL Developer with Power BI",
    jobId: "TL100108",
    location: "Detroit, MI",
    author: "Sid Singh",
  },
  {
    date: "February 4, 2025",
    title: "RPA Developer UiPath",
    jobId: "TL100107",
    location: "Toronto, CA (Hybrid)",
    author: "Sid Singh",
  },
];

const About = () => {
  return (
    <div className="about-page">
      {/* Heading */}
      <h1 className="about-heading">IT Services & Consulting, Talent Sourcing, and Workforce Management</h1>

      {/* Full-Width Banner Image */}
      <div className="banner-container">
        <img src="/img/image1 (1).png" alt="About Banner" className="banner-image" />
      </div>

      {/* About Sections */}
      <div className="about-sections">
        <div className="about-section">
          <h2>What We're All About</h2>
          <img src="/img/We’re All About.jpg" alt="About Us" className="about-image" />
          <p>
            Teckleap is a woman-owned small business with national and global reach. With over 50 years of cumulative experience and expertise across various sectors, our team at Teckleap helps propel both creative startups and the world’s largest, most innovative organizations forward. We specialize in AI, cloud, networking, cybersecurity, data analytics, automation, digital transformation, and more. Delivering groundbreaking solutions that redefine businesses, revolutionize industries, transform communities, exceed expectations, and advance technology, boost competitiveness, and elevate customer experiences.
          </p>
        </div>
        <div className="about-section">
          <h2>Why Teckleap</h2>
          <img src="/img/whyteck.jpg" alt="Why Teckleap" className="about-image" />
          <p>
            Teckleap was created to increase the representation of underrepresented individuals at all organizational levels. We understand that an inclusive environment drives performance, creativity, and growth, so we focus on fostering an inclusive workforce culture. To improve diversity hiring, we maintain a strong presence on diversity-focused job boards and use AI-driven diversity and inclusion technologies throughout the recruitment and staffing process. Backed by actionable insights and data-driven decision-making, we have a proven track record of delivering measurable results, regardless of geography.
          </p>
        </div>
      </div>

      <div className="about-sections">
        <div className="about-section">
          <h2>Unified Solution and Global Alliance</h2>
          <img src="/img/1712833058020.png" alt="About Us" className="about-image" />
          <p>
            At Teckleap, we combine the cutting-edge technology of leading global innovators with our own team’s expertise, flexibility, and dedication. By leveraging the strengths of our partnerships, we deliver a solution that offers greater business value than the sum of its individual components. The result is a solution that not only meets but exceeds your business and IT needs, providing a competitive advantage and a superior experience.
          </p>
        </div>
        <div className="about-section">
          <h2>Our GenAI Team</h2>
          <img src="/img/AI.jpg" alt="Why Teckleap" className="about-image" />
          <p>
            Our GenAI team offers tailored AI/ML training, use case discovery, consulting, advisory, and MLOps services to propel your business forward, seamlessly integrating Organizational Change Management principles. With our team’s consulting background and deep expertise in data security and data engineering, we provide faster, better, and more cost-effective data advisory services, specializing in generative AI, data mining, machine learning, and data modeling.
          </p>
        </div>
      </div>

      <div className="about-sections">
        <div className="about-section">
          <h2>Talent</h2>
          <img src="/img/client.jpg" alt="About Us" className="about-image" />
          <p>
            At Teckleap, we recognize the value of your past achievements and are committed to connecting you with leading organizations that will challenge and reward your expertise. We understand that the most exceptional talent isn’t found through conventional job boards or social media. That’s why you can trust us to prioritize your career development. We collaborate with you to create a tailored plan to achieve your professional goals. By investing time and resources to understand your objectives and aspirations, and providing continuous support throughout your engagements with top-tier firms, Teckleap stands as your lifelong career partner.
          </p>
        </div>
        <div className="about-section">
          <h2>Clients</h2>
          <img src="/img/Client-Photos.webp" alt="Why Teckleap" className="about-image" />
          <p>
            We pride ourselves on a high client retention rate, 24/7 operations, and dedicated local support teams, supplemented by shared service teams. Our 100% compliance with employment laws and robust security protocols ensures your peace of mind. We utilize advanced technology throughout our engagements to provide exceptional client and talent experiences. Our operational governance, exceptional SLA standards, and comprehensive reporting ensure transparency and efficiency. We offer cost optimization and analysis to maximize your ROI. Trust Teckleap to deliver innovative solutions, unparalleled support, and the strategic expertise to help you thrive on a global scale.
          </p>
        </div>
      </div>

      <h2 className="jobpost">Recent Job Postings</h2>
      <div className="job-list">
        {jobPosts.map((job, index) => (
          <div key={index} className="job-card">
            <div className="job-date">{job.date}</div>
            <h2 className="job-title">{job.title}</h2>
            <p className="job-info">
              <strong>Job Id:</strong> {job.jobId} <br />
              <strong>Location:</strong> {job.location}
            </p>
            <p className="job-author">{job.author}</p>
            <button className="read-more">READ MORE</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
