import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Real-Time Splitwise Analytics',
    description: 'End-to-end streaming pipeline on Splitwise transaction data using Apache Kafka, AWS EC2, S3, Glue, Athena & QuickSight.',
    tags: ['Kafka', 'AWS', 'Python', 'Athena'],
    link: '#',
  },
  {
    title: 'Connected Vehicle Data Platform',
    description: 'Modular PySpark pipelines on GCP Dataproc processing connected-vehicle sensor data at scale with real-time streaming into BigQuery.',
    tags: ['GCP', 'PySpark', 'Dataproc', 'BigQuery'],
    link: '#',
  },
  {
    title: 'Store Product Navigator (AI)',
    description: 'AI-powered application using store engineering layouts to show customers the exact real path to products in-store.',
    tags: ['Gemini', 'Python', 'AI', 'GCP'],
    link: '#',
  },
  {
    title: 'Recipe Ingredients Suggestion',
    description: 'Intelligent system suggesting products from customer recipes and enabling add-to-cart, built using Gemini model.',
    tags: ['Gemini', 'LLM', 'Python', 'RAG'],
    link: '#',
  },
  {
    title: 'Automated CR Creation',
    description: 'Workflow automation scanning Jira, Confluence, and Git using n8n to auto-generate change requests.',
    tags: ['n8n', 'Automation', 'Jira', 'Git'],
    link: '#',
  },
  {
    title: 'Cloud Migration Framework',
    description: 'Orchestrated migration of on-premise data to GCP, coordinating downstream feeds with zero-downtime approach.',
    tags: ['Terraform', 'GCP', 'Dataform', 'Airflow'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
          <span className="gradient-text">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-accent-primary rounded-full mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="glass-card p-6 hover-glow group cursor-pointer block"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-accent-primary text-2xl">📁</div>
                <svg
                  className="w-5 h-5 text-gray-500 group-hover:text-accent-glow transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>

              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-accent-glow transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs text-gray-500 font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
