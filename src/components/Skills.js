import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages & Core',
    icon: '⌨️',
    skills: ['Python', 'SQL', 'PySpark', 'Bash/Shell'],
  },
  {
    title: 'Cloud Platforms',
    icon: '☁️',
    skills: ['GCP (BigQuery, Dataflow, Pub/Sub, Composer)', 'AWS (S3, Glue, Athena, EC2)'],
  },
  {
    title: 'Big Data & Streaming',
    icon: '⚡',
    skills: ['Apache Spark', 'Kafka', 'Dataproc', 'Dataflow', 'Pub/Sub', 'Hadoop'],
  },
  {
    title: 'Orchestration & DevOps',
    icon: '🔄',
    skills: ['Airflow / Composer', 'Terraform', 'Tekton', 'GitLab CI/CD', 'Dataform', 'DBT'],
  },
  {
    title: 'Visualization',
    icon: '📊',
    skills: ['Qlik Sense', 'Looker', 'Power BI'],
  },
  {
    title: 'AI & Innovation',
    icon: '🤖',
    skills: ['Gemini', 'LangChain', 'Claude', 'n8n Workflows'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
          <span className="gradient-text">Skills & Tools</span>
        </h2>
        <div className="w-16 h-1 bg-accent-primary rounded-full mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 hover-glow group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-white font-semibold text-lg">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg bg-dark-700/80 text-gray-300 border border-white/[0.05] group-hover:border-accent-primary/20 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
