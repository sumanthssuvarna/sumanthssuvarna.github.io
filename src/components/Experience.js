import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Advanced Engineer — Data',
    company: 'Albertsons Companies',
    period: 'Sep 2025 — Present',
    logo: '/images/albertsons.png',
    highlights: [
      'Supporting catalog data workflows in the Shopper Experience team',
      'Building data pipelines with partners like Amazon, Uber, DoorDash & Instacart',
      'Driving AI initiatives — store navigation, automated CR creation, recipe-based suggestions',
      'Resolving critical P1 production issues ensuring high data availability',
    ],
    tags: ['GCP', 'BigQuery', 'Python', 'AI/ML', 'Gemini'],
  },
  {
    role: 'Full Stack Data Engineer',
    company: 'Ford Motor Company',
    period: 'Jul 2024 — Sep 2025',
    logo: '/images/ford.png',
    highlights: [
      'Led migration of on-premise data to GCP with zero downtime across downstream feeds',
      'Developed modular PySpark & SparkSQL jobs on Dataproc for connected-vehicle sensor data',
      'Authored reusable Terraform for standardized infra across dev, UAT & production',
      'Built real-time pipelines with Pub/Sub, Dataproc, Dataform & Dataflow into BigQuery',
    ],
    tags: ['GCP', 'PySpark', 'Terraform', 'Airflow', 'Dataform'],
  },
  {
    role: 'Data Engineer',
    company: 'Tata Consultancy Services',
    subtitle: 'Client: British Telecom',
    period: 'Feb 2022 — Jun 2024',
    logo: '/images/tcs.webp',
    highlights: [
      'Designed cloud-native ingestion pipelines streaming telecom data to BigQuery',
      'Implemented partitioning & clustering for BigQuery query optimization',
      'Automated provisioning of GCP resources with Terraform & Tekton pipelines',
      'Introduced event-driven data quality checks using Cloud Functions',
    ],
    tags: ['GCP', 'Dataflow', 'Pub/Sub', 'Terraform', 'Tekton'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
          <span className="gradient-text">Experience</span>
        </h2>
        <div className="w-16 h-1 bg-accent-primary rounded-full mb-12" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-primary via-accent-secondary to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 md:left-6.5 top-2 w-3 h-3 rounded-full bg-accent-primary shadow-[0_0_10px_rgba(99,102,241,0.5)]" />

                <div className="glass-card p-6 md:p-8 hover-glow">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-10 h-10 md:w-12 md:h-12 object-contain"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                        <p className="text-accent-glow font-medium text-sm">{exp.company}</p>
                        {exp.subtitle && (
                          <p className="text-gray-500 text-xs">{exp.subtitle}</p>
                        )}
                      </div>
                    </div>
                    <span className="text-gray-500 text-sm font-mono whitespace-nowrap">{exp.period}</span>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((item, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                        <span className="text-accent-primary mt-1 text-xs">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tag-pill">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
