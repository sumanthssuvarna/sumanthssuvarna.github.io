import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-center md:text-left"
          >
            <p className="text-accent-glow font-mono text-sm mb-4 tracking-widest uppercase">
              Hello, I&apos;m
            </p>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Sumanth</span>
              <br />
              <span className="text-white">Suvarna</span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
              Data Engineer building petabyte-scale pipelines on GCP &amp; AWS — turning raw data into analytics-ready products
            </p>

            <div className="flex items-center justify-center md:justify-start gap-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-accent-primary hover:bg-accent-secondary text-white font-medium rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]"
              >
                Get in Touch
              </a>
              <a
                href="#experience"
                className="px-8 py-3 border border-white/20 text-gray-300 hover:text-white hover:border-white/40 font-medium rounded-xl transition-all duration-300"
              >
                View Work
              </a>
            </div>
          </motion.div>

          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden gradient-border">
                <img
                  src="/images/profile.jpeg"
                  alt="Sumanth Suvarna"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Glow behind photo */}
              <div className="absolute inset-0 rounded-full bg-accent-primary/20 blur-3xl -z-10" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-5 h-8 border-2 border-white/20 rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-accent-primary rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
