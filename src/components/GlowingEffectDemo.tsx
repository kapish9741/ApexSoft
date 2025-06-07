"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { Award, Code, Users, Globe, Cpu } from "lucide-react";
import { GlowingEffect } from "@/components/ui/GlowingEffect";

export default function GlowingEffectDemo() {
  const containerRef = useRef<HTMLUListElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-7xl mx-auto py-8"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-3xl font-bold text-center mb-10 bg-gradient-to-br from-neutral-300 via-neutral-100 to-neutral-400 bg-clip-text text-transparent px-4"
      >
        Why Choose ApexSoft
      </motion.h2>

      <ul
        ref={containerRef}
        className="w-[90vw] md:w-[80vw] max-w-7xl grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-6 xl:max-h-[36rem] xl:grid-rows-2"
      >
        <GridItem
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          icon={<Award className="h-5 w-5 text-blue-400" />}
          title="15+ Years of Excellence"
          description="Trusted by Fortune 500 companies for delivering exceptional software solutions since 2009."
          delay={0.1}
        />

        <GridItem
          area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
          icon={<Code className="h-5 w-5 text-purple-400" />}
          title="Cutting-Edge Technology"
          description="We leverage the latest tech stack and innovative methodologies to build future-proof solutions."
          delay={0.2}
        />

        <GridItem
          area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
          icon={<Users className="h-5 w-5 text-emerald-400" />}
          title="Expert Development Team"
          description="Our developers bring decades of combined experience across diverse technical domains and industries."
          delay={0.3}
          featured={true}
        />

        <GridItem
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
          icon={<Globe className="h-5 w-5 text-amber-400" />}
          title="Global Reach & Support"
          description="With teams across 4 continents, we provide localized support and insights for your business needs."
          delay={0.4}
        />

        <GridItem
          area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
          icon={<Cpu className="h-5 w-5 text-rose-400" />}
          title="AI-Powered Solutions"
          description="Harnessing artificial intelligence to create intelligent, adaptive systems that grow with your business."
          delay={0.5}
        />
      </ul>
    </motion.div>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  delay?: number;
  featured?: boolean;
}

const GridItem = ({
  area,
  icon,
  title,
  description,
  delay = 0,
  featured = false,
}: GridItemProps) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`min-h-[14rem] list-none ${area}`}
    >
      <div
        className={`relative h-full rounded-2xl border ${featured ? "border-blue-800/40" : "border-neutral-800"
          } bg-neutral-950 p-2 md:rounded-3xl md:p-3 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/10`}
      >
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#1a1a1a]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <motion.div
              className={`w-fit rounded-lg ${featured
                  ? "bg-blue-950/50 border-blue-700/30"
                  : "bg-[#121212] border-neutral-700"
                } border p-2.5`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {icon}
            </motion.div>
            <div className="space-y-3">
              <h3 className="font-sans text-xl/[1.375rem] font-semibold text-white md:text-2xl/[1.875rem]">
                {title}
              </h3>
              <p className="font-sans text-sm/[1.25rem] text-neutral-400 md:text-base/[1.5rem]">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.li>
  );
};
