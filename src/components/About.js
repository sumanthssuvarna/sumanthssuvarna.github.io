import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
          <span className="gradient-text">About Me</span>
        </h2>
        <div className="w-16 h-1 bg-accent-primary rounded-full mb-8" />

        <div className="glass-card p-8 md:p-10 hover-glow">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I&apos;m a Data Engineer with experience designing, building, and operating large-scale 
            batch &amp; streaming pipelines on Google Cloud and AWS. I work across the full data lifecycle — 
            from ingestion and real-time processing to transformation and analytics-ready delivery.
          </p>
          <p className="text-gray-400 leading-relaxed mb-6">
            I&apos;ve worked in Automotive and Telecom domains, automating infrastructure provisioning, 
            optimizing cloud costs, and building data products that serve business-critical analytics 
            platforms. Currently exploring AI-driven solutions alongside core data engineering.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-4">
              <div className="text-2xl mb-2">⚡</div>
              <h4 className="text-white font-medium mb-1">Pipeline Architecture</h4>
              <p className="text-gray-500 text-sm">End-to-end batch &amp; streaming</p>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl mb-2">☁️</div>
              <h4 className="text-white font-medium mb-1">Cloud Native</h4>
              <p className="text-gray-500 text-sm">GCP &amp; AWS at scale</p>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl mb-2">🤖</div>
              <h4 className="text-white font-medium mb-1">AI + Data</h4>
              <p className="text-gray-500 text-sm">Gemini, LLMs &amp; automation</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
