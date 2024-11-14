import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Code2 } from 'lucide-react';

const achievements = [
  {
    icon: <Trophy className="w-6 h-6 text-editor-accent" />,
    title: "Coder's Clash Champion",
    description: "1st place in the annual algorithmic programming competition"
  },
  {
    icon: <Award className="w-6 h-6 text-editor-accent" />,
    title: "ProComp Finalist",
    description: "Top 3 finish in regional competitive programming contest"
  },
  {
    icon: <Code2 className="w-6 h-6 text-editor-accent" />,
    title: "SuperComp Elite",
    description: "Achieved highest rank in international coding challenges"
  }
];

const About = () => {
  return (
    <section id="about" className="py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-heading">{'<About />'}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-mono text-editor-comment mb-4">// Who am I?</div>
            <p className="text-lg mb-6">
              I am a Computer Science student at Bahria University, 
              dedicated to competitive programming and algorithm optimization. 
              Driven by a passion for tackling complex challenges, 
              I have actively participated in various programming competitions and hackathons.
            </p>
            <p className="text-lg text-editor-text/80">
              My journey in computer science has been driven by the belief that 
              elegant code can solve real-world challenges. When I'm not competing 
              or coding, I'm mentoring fellow students and contributing to open-source 
              projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="font-mono text-editor-comment mb-4">// Achievements</div>
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex items-start gap-4 bg-editor-sidebar p-4 rounded-lg"
              >
                <div className="mt-1">{achievement.icon}</div>
                <div>
                  <h3 className="font-mono text-lg font-semibold mb-1">
                    {achievement.title}
                  </h3>
                  <p className="text-editor-text/70">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;