import { motion } from 'framer-motion';

const certifications = [
  {
    title: 'Google Cloud Professional Data Engineer',
    issuer: 'Google Cloud',
    icon: '🏆',
  },
  {
    title: 'Google Cloud Associate Cloud Engineer',
    issuer: 'Google Cloud',
    icon: '☁️',
  },
  {
    title: 'Antigravity Bootcamp',
    issuer: 'Antigravity',
    icon: '🚀',
  },
  {
    title: 'GDIA Award',
    issuer: 'Ford Motor Company',
    icon: '🏅',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
          <span className="gradient-text">Certifications & Awards</span>
        </h2>
        <div className="w-16 h-1 bg-accent-primary rounded-full mb-10" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-5 text-center hover-glow"
            >
              <div className="text-3xl mb-3">{cert.icon}</div>
              <h4 className="text-white font-medium text-sm mb-1">{cert.title}</h4>
              <p className="text-gray-500 text-xs">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
