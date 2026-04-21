import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'Library Seat Reservation System',
    description:
      'Designed and developed a web-based system to manage 100+ seat records with student authentication. Implemented real-time availability and admin controls, reducing manual allocation effort by 80%.',
    image: '/project1.png',
    tech: ['HTML', 'TypeScript', 'JavaScript', 'MongoDB'],
    status: 'completed',
    github: 'https://github.com/DangerRohit84/Library-Seat-Reservation-System',
    live: 'https://smart-library1.netlify.app/',
  },
  {
    title: 'Guess Number Game',
    description:
      'Developed a CLI-based number guessing game with optimized hint logic and scoring mechanics.',
    image: '/project2.png',
    tech: ['Python'],
    status: 'completed',
    github: 'https://github.com/DangerRohit84/Guess-Number',
    live: 'https://github.com/DangerRohit84/Guess-Number',
  },
  {
    title: 'FoodieDelight - Food Ordering System',
    description:
      'A full-stack food ordering platform with real-time order tracking, payment integration, and admin dashboard. Features a responsive UI with smooth animations.',
    image: '/project1.png',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Razorpay'],
    status: 'completed',
    github: 'https://github.com/DangerRohit84/FoodieDelight',
    live: 'https://foodie-delight-chi.vercel.app/',
  },
  {
    title: 'StreakFlow - Habit Tracker App',
    description:
      'An Android habit tracker with streak analytics, AI-powered coaching, push notifications, and beautiful visualizations to keep you motivated daily.',
    image: '/project2.png',
    tech: ['Kotlin', 'Room DB', 'Material 3', 'AlarmManager'],
    status: 'in-progress',
    github: '#',
    live: '#',
  },
  {
    title: 'CertiHub - Certificate Manager',
    description:
      'Digital certificate management system with QR code verification, email notifications, role-based access, and a public verification portal.',
    image: '/project3.png',
    tech: ['React', 'Firebase', 'Node.js', 'QR Code'],
    status: 'in-progress',
    github: '#',
    live: '#',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.08 });
  const [selectedProject, setSelectedProject] = useState(null);

  // Prevent background scrolling when modal is open
  if (typeof document !== 'undefined') {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  return (
    <section className="projects" id="projects" ref={ref}>
      <div className="container">
        <motion.div
          className="projects-header"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          custom={0}
        >
          <span className="section-label">Projects</span>
          <h2 className="section-title">Things I've Built</h2>
          <p className="section-description">
            A selection of projects that showcase my skills and passion for building impactful applications.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.div
              className="project-card"
              key={project.title}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeUp}
              custom={i + 1}
              onClick={() => setSelectedProject(project)}
              layoutId={`project-card-${project.title}`}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-image-overlay" />
                <span className={`project-status ${project.status}`}>
                  {project.status === 'completed' ? '✓ Completed' : '⏳ In Progress'}
                </span>
              </div>

              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    className="project-link github"
                    id={`project-github-${i}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub /> Code
                  </a>
                  <a
                    href={project.live}
                    className="project-link live"
                    id={`project-live-${i}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project details modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="project-modal"
              layoutId={`project-card-${selectedProject.title}`}
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
            >
              <button
                className="project-modal-close"
                onClick={() => setSelectedProject(null)}
              >
                &times;
              </button>

              <div className="project-modal-image">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>

              <div className="project-modal-body">
                <div className="project-modal-header">
                  <h3>{selectedProject.title}</h3>
                  <span className={`project-status ${selectedProject.status}`}>
                    {selectedProject.status === 'completed' ? '✓ Completed' : '⏳ In Progress'}
                  </span>
                </div>

                <p className="project-modal-desc">{selectedProject.description}</p>

                <div className="project-modal-tech">
                  <h4>Tech Stack</h4>
                  <div className="project-tech">
                    {selectedProject.tech.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>

                <div className="project-modal-actions">
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline" id="modal-github">
                    <FiGithub /> View Source
                  </a>
                  <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary" id="modal-live">
                    <FiExternalLink /> Live Project
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
