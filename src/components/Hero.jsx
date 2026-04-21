import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiArrowRight, FiDownload } from 'react-icons/fi';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="hero-badge">
              <span className="dot"></span>
              Open to opportunities
            </div>

            <h1 className="hero-name">
              Hi, I'm <span className="gradient">Rohit</span>
            </h1>

            <div className="hero-typewriter">
              <TypeAnimation
                sequence={[
                  'B.Tech AI & ML Student 🎓',
                  2000,
                  'Frontend Enthusiast 💻',
                  2000,
                  'React Developer ⚛️',
                  2000,
                  'Problem Solver 🧩',
                  2000,
                  'Competitive Programmer 🏆',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <p className="hero-description">
              A B.Tech student in Artificial Intelligence and Machine Learning at Aditya University.
              Passionate about problem-solving, competitive programming, and crafting beautiful digital experiences.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn-primary" id="hero-view-work">
                View My Work <FiArrowRight />
              </a>
              <a href="/Rohit_resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary" id="hero-download-cv">
                <FiDownload /> Download Resume
              </a>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <h3>20+</h3>
                <p>GitHub Repos</p>
              </div>
              <div className="hero-stat">
                <h3>150+</h3>
                <p>LeetCode Solved</p>
              </div>
              <div className="hero-stat">
                <h3>1000+</h3>
                <p>CodeChef Problems</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="hero-code-window">
              <div className="code-header">
                <div className="code-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="code-title">rohit_profile.js</div>
              </div>
              <div className="code-body">
                <pre>
                  <code>
                    <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ delay: 1.0, duration: 0.4 }}>
                      <span className="code-keyword">const</span> <span className="code-variable">developer</span> <span className="code-operator">=</span> {'{'}
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ delay: 1.3, duration: 0.4 }}>
                      {'  '}<span className="code-property">name:</span> <span className="code-string">'Desina Rohit'</span>,
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ delay: 1.6, duration: 0.4 }}>
                      {'  '}<span className="code-property">role:</span> <span className="code-string">'AI & ML Dev'</span>,
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ delay: 1.9, duration: 0.4 }}>
                      {'  '}<span className="code-property">skills:</span> [<span className="code-string">'React'</span>, <span className="code-string">'Node.js'</span>, <span className="code-string">'Python'</span>],
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ delay: 2.2, duration: 0.4 }}>
                      {'  '}<span className="code-property">isWorking:</span> <span className="code-boolean">true</span>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ delay: 2.5, duration: 0.4 }}>
                      {'}'};
                    </motion.div>
                  </code>
                </pre>
              </div>
            </div>
            
            <div className="code-floating-badge badge-1">
              <span className="badge-icon">⚡</span> Fast Learner
            </div>
            <div className="code-floating-badge badge-2">
              <span className="badge-icon">🏆</span> Competitive Coder
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
