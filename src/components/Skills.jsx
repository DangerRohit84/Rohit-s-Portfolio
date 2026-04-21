import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiLayout, FiServer, FiTool, FiSmartphone } from 'react-icons/fi';

const categories = [
  {
    title: 'Programming Languages',
    icon: <FiLayout />,
    iconClass: 'frontend',
    skills: [
      { name: 'C', icon: '🔵' },
      { name: 'C++', icon: '🚀' },
      { name: 'Python', icon: '🐍' },
      { name: 'Java', icon: '☕' },
    ],
  },
  {
    title: 'Web Development',
    icon: <FiServer />,
    iconClass: 'backend',
    skills: [
      { name: 'HTML & CSS', icon: '🎨' },
      { name: 'React.js', icon: '⚛️' },
      { name: 'TypeScript', icon: '🔷' },
      { name: 'Node.js', icon: '🟩' },
    ],
  },
  {
    title: 'Databases & OS',
    icon: <FiTool />,
    iconClass: 'tools',
    skills: [
      { name: 'MySQL', icon: '🐬' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'Linux', icon: '🐧' },
    ],
  },
  {
    title: 'Tools & Core IT',
    icon: <FiSmartphone />,
    iconClass: 'mobile',
    skills: [
      { name: 'GitHub', icon: '🐱' },
      { name: 'VS Code', icon: '💻' },
      { name: 'DSA', icon: '📊' },
      { name: 'DBMS / OOP', icon: '📚' },
    ],
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

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <section className="skills" id="skills" ref={ref}>
      <div className="container">
        <motion.div
          className="skills-header"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          custom={0}
        >
          <span className="section-label">Skills & Tech</span>
          <h2 className="section-title">My Technology Toolkit</h2>
          <p className="section-description">
            Technologies and tools I use to bring ideas to life. Always learning, always growing.
          </p>
        </motion.div>

        <div className="skills-grid">
          {categories.map((cat, i) => (
            <motion.div
              className="skill-category"
              key={cat.title}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeUp}
              custom={i + 1}
            >
              <div className="skill-category-header">
                <div className={`skill-category-icon ${cat.iconClass}`}>
                  {cat.icon}
                </div>
                <h3>{cat.title}</h3>
              </div>
              <div className="skill-tags">
                {cat.skills.map((skill) => (
                  <span className="skill-tag" key={skill.name}>
                    <span className="tag-icon">{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
