import GlowingEffectDemo from '../GlowingEffectDemo'
import { AnimatedTestimonials } from '../ui/animated-testimonials'
import { FAQAccordion } from '../ui/faq-accordion'
import { faqData } from '../../data/faq-data'
import { motion } from 'motion/react'


const About = () => {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className='w-screen flex flex-col items-center justify-center mt-20 gap-20'>
      <motion.h1
        className="text-4xl font-semibold bg-gradient-to-br from-neutral-500 via-neutral-300 to-neutral-700 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Us
      </motion.h1>
      <p className="max-w-2xl text-center text-lg text-neutral-500 dark:text-neutral-400">
        ApexSoft is a leading software development company with over 15 years of experience in delivering innovative solutions to Fortune 500 companies. Our team of expert developers specializes in creating cutting-edge applications that drive business success.
        We leverage the latest technologies and methodologies to build scalable, secure, and high-performance software solutions tailored to meet the unique needs of our clients.
      </p>
      
      <GlowingEffectDemo />
      <motion.h2 
      className="text-4xl font-semibold bg-gradient-to-br from-neutral-500 via-neutral-300 to-neutral-700 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}>
          Testimonials
      </motion.h2>
      <AnimatedTestimonials testimonials={testimonials} />

      {/* New FAQ Section */}
      <div className="w-full px-4 py-10 bg-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full max-w-7xl mx-auto py-12 px-4"
        >
          <FAQAccordion items={faqData} />
        </motion.div>
      </div>
    </div>
  )
}

export default About