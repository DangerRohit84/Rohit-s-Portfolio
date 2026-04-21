import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const timeline = [
  {
    date: '2024 – Expected 2028',
    title: 'B.Tech in AI & Machine Learning',
    subtitle: 'Aditya University, Surampalem',
    description:
      'Currently maintaining a CGPA of 8.7/10. Coursework includes Data Structures & Algorithms, OOP, Database Management Systems, and Linux OS.',
  },
  {
    date: '2024 – Present',
    title: 'Academic & Personal Projects',
    subtitle: 'Full-Stack & Algorithms',
    description:
      'Built OS and DBMS simulations, applied DSA in real-world scenarios, and maintained 20+ GitHub repositories adhering to clean code practices.',
  },
  {
    date: '2024 – Present',
    title: 'Competitive Programming',
    subtitle: 'LeetCode & CodeChef',
    description:
      'Solved over 150 structured problems on LeetCode and tackled 1000+ challenges on CodeChef focusing on arrays, recursion, and mathematical logic.',
  },
  {
    date: '2022 – 2024',
    title: 'Intermediate (MPC)',
    subtitle: 'Sri Chaitanya College',
    description:
      'Graduated with 90% aggregate. Built a strong foundation in Mathematics, Physics, and Chemistry which sparked my interest in computing.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.08 });
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const starTopPos = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  // A small spring to make it bounce smoothly behind the scroll wheel
  const smoothTop = useSpring(starTopPos, { stiffness: 80, damping: 20 });

  return (
    <section className="experience" id="experience" ref={ref}>
      <div className="container">
        <motion.div
          className="experience-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeUp}
          custom={0}
        >
          <span className="section-label">My Journey</span>
          <h2 className="section-title">Education & Experience</h2>
          <p className="section-description">
            My path through tech — from writing my first line of code to building full-stack apps.
          </p>
        </motion.div>

        <div className="timeline" ref={containerRef}>
          <motion.div 
            className="timeline-trail" 
            style={{ height: smoothTop }} 
          />
          <motion.div 
            className="timeline-star" 
            style={{ top: smoothTop }} 
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C12 6.62742 17.3726 12 24 12C17.3726 12 12 17.3726 12 24C12 17.3726 6.62742 12 0 12C6.62742 12 12 6.62742 12 0Z" fill="#ffffff" />
            </svg>
          </motion.div>
          {timeline.map((item, i) => (
            <motion.div
              className="timeline-item"
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-100px" }}
              variants={fadeUp}
              custom={0} // We can remove the index multiplication so they fade up precisely when the star hits them
            >
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-date">{item.date}</div>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-subtitle">{item.subtitle}</p>
                <p className="timeline-description">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
