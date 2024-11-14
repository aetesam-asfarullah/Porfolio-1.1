import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-[90vh] flex flex-col justify-center"
    >
      <div className="max-w-4xl">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <Terminal className="w-12 h-12 text-editor-accent" />
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <TypeAnimation
            sequence={[
              'Hello World!',
              1000,
              'Aetesam Asfar Ullah here.',
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={0}
            cursor={true}
            className="text-editor-text"
          />
        </h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-xl md:text-2xl text-editor-text/70 mb-8"
        >
          Computer Science Student at Bahria University
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="font-mono text-editor-comment"
        >
          <p>// Crafting elegant solutions to complex problems</p>
          <p>// One algorithm at a time</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;