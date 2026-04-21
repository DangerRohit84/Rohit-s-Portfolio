import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiCpu, FiBookOpen, FiMapPin, FiCalendar, FiAward, FiHeart } from 'react-icons/fi';

const highlights = [
  { icon: '💻', title: 'Web Dev', desc: 'MERN Stack' },
  { icon: '🏆', title: 'Comp. Prog.', desc: 'CodeChef & LeetCode' },
  { icon: '📊', title: 'Databases', desc: 'SQL & NoSQL' },
  { icon: '🚀', title: 'Projects', desc: '20+ Git Repositories' },
];

const details = [
  { icon: <FiBookOpen />, title: 'Education', info: 'B.Tech AI & ML' },
  { icon: <FiMapPin />, title: 'Location', info: 'AP, India' },
  { icon: <FiCalendar />, title: 'Experience', info: '20+ Built Projects' },
  { icon: <FiAward />, title: 'Focus', info: 'Problem Solving & Dev' },
  { icon: <FiHeart />, title: 'Passion', info: 'Competitive Coding' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <section className="about" id="about" ref={ref}>
      <div className="container">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          custom={0}
        >
          <span className="section-label">About Me</span>
          <h2 className="section-title">Passionate about creating digital experiences</h2>
        </motion.div>

        <div className="about-content">
          <div className="about-info">
            <motion.p
              className="about-text"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeUp}
              custom={1}
            >
              I'm an Artificial Intelligence and Machine Learning student at Aditya University, Surampalem. I have a deep passion for 
              competitive programming and crafting robust applications. I've solved over 150 problems on LeetCode and 1000+ challenges 
              on CodeChef.
            </motion.p>

            <motion.p
              className="about-text"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeUp}
              custom={2}
            >
              Beyond problem-solving, I've built and managed over 20+ public respositories on GitHub, developing web platforms, 
              mini-games, and automation tools. I'm always looking to expand my knowledge in OS, DBMS, and Web Technologies.
            </motion.p>

            <motion.div
              className="about-highlights"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeUp}
              custom={3}
            >
              {highlights.map((h) => (
                <div className="highlight-card" key={h.title}>
                  <div className="icon">{h.icon}</div>
                  <h4>{h.title}</h4>
                  <p>{h.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="about-details">
            {details.map((d, i) => (
              <motion.div
                className="detail-item"
                key={d.title}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={fadeUp}
                custom={i + 1}
              >
                <div className="detail-icon">{d.icon}</div>
                <div className="detail-info">
                  <h4>{d.title}</h4>
                  <p>{d.info}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
