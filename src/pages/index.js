import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sumanth Suvarna | Data Engineer</title>
        <meta name="description" content="Data Engineer specializing in scalable data pipelines, cloud platforms, and real-time processing systems." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="noise-overlay relative">
        {/* Background orbs */}
        <div className="floating-orb w-96 h-96 bg-accent-primary top-20 -left-48" />
        <div className="floating-orb w-80 h-80 bg-accent-secondary top-[60vh] -right-40" style={{ animationDelay: '2s' }} />
        <div className="floating-orb w-64 h-64 bg-purple-600 top-[120vh] left-20" style={{ animationDelay: '4s' }} />

        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
