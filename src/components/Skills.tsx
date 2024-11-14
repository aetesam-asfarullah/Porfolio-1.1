import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'C++', level: 95, color: 'bg-[#00599C]' },
  { name: 'Python', level: 90, color: 'bg-[#3776AB]' },
  { name: 'Flutter/Dart', level: 88, color: 'bg-[#02569B]' },
  { name: 'JavaScript', level: 85, color: 'bg-[#F7DF1E]' },
  { name: 'TypeScript', level: 82, color: 'bg-[#3178C6]' },
  { name: 'Java', level: 80, color: 'bg-[#007396]' }
];

const Skills = () => {
  return (
    <section id="skills" className="py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-heading">{'<Skills />'}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-mono text-editor-comment mb-6">
              // Technical Proficiency
            </div>
            <div className="space-y-6">
              {skills.slice(0, 3).map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-mono">{skill.name}</span>
                    <span className="font-mono text-editor-comment">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-editor-sidebar rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${skill.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-mono text-editor-comment mb-6">
              // Additional Skills
            </div>
            <div className="space-y-6">
              {skills.slice(3).map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-mono">{skill.name}</span>
                    <span className="font-mono text-editor-comment">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-editor-sidebar rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${skill.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;