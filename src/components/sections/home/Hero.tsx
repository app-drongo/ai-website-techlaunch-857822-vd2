'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap, Shield, Globe } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Container, Engine } from 'tsparticles-engine';
import Typed from 'react-typed';
import Countdown from 'react-countdown';
import { Link } from 'react-scroll';

type BackgroundPattern = 'dots' | 'grid' | 'gradient';

const DEFAULT_HERO = {
  badge: '🚀 Product Launch in',
  title: 'Build the future of',
  titleHighlight: 'technology',
  typedStrings: ['SaaS platforms', 'AI solutions', 'web applications', 'mobile apps'],
  subtitle:
    'The complete platform for modern tech startups to design, build, and scale exceptional digital experiences with cutting-edge technology.',
  primaryCTA: 'Start Building',
  secondaryCTA: 'Watch Demo',
  primaryCTAHref: '/signup',
  secondaryCTAHref: '/demo',
  feature1Icon: 'zap',
  feature1Text: 'Lightning fast',
  feature2Icon: 'shield',
  feature2Text: 'Enterprise secure',
  feature3Icon: 'globe',
  feature3Text: 'Global scale',
  trustedByText: 'Trusted by innovative startups worldwide',
  showTrustedLogos: true,
  backgroundPattern: 'dots' as BackgroundPattern,
  showAnimatedBadge: true,
  countdownDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
  showParticles: true,
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 10 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 10 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set((event.clientX - rect.left - rect.width / 2) / 20);
      mouseY.set((event.clientY - rect.top - rect.height / 2) / 20);
    }
  };

  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  const particlesLoaded = async (container?: Container) => {
    console.log(container);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'zap':
        return Zap;
      case 'shield':
        return Shield;
      case 'globe':
        return Globe;
      default:
        return Sparkles;
    }
  };

  const Feature1Icon = getIcon(config.feature1Icon);
  const Feature2Icon = getIcon(config.feature2Icon);
  const Feature3Icon = getIcon(config.feature3Icon);

  const countdownRenderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      return <span className="text-primary font-bold">🎉 Launched!</span>;
    } else {
      return (
        <div className="flex items-center gap-2 text-sm font-mono">
          <span className="bg-primary/10 px-2 py-1 rounded">{days}d</span>
          <span className="bg-primary/10 px-2 py-1 rounded">{hours}h</span>
          <span className="bg-primary/10 px-2 py-1 rounded">{minutes}m</span>
          <span className="bg-primary/10 px-2 py-1 rounded">{seconds}s</span>
        </div>
      );
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100vh] overflow-hidden bg-background"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      data-editable="hero"
    >
      {/* Particles Background */}
      {config.showParticles && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          className="absolute inset-0"
          options={{
            background: {
              color: {
                value: 'transparent',
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: 'push',
                },
                onHover: {
                  enable: true,
                  mode: 'repulse',
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: 'hsl(var(--primary))',
              },
              links: {
                color: 'hsl(var(--primary))',
                distance: 150,
                enable: true,
                opacity: 0.1,
                width: 1,
              },
              move: {
                direction: 'none',
                enable: true,
                outModes: {
                  default: 'bounce',
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.2,
              },
              shape: {
                type: 'circle',
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
        />
      )}

      {/* Background Pattern */}
      {config.backgroundPattern === 'dots' && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary)_0.5px,transparent_0.5px)] [background-size:16px_16px] opacity-[0.03]" />
      )}
      {config.backgroundPattern === 'grid' && (
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-size:64px_64px]" />
      )}
      {config.backgroundPattern === 'gradient' && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-accent/[0.05]" />
      )}

      {/* Floating gradient orbs with parallax */}
      <motion.div
        className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/[0.03] blur-3xl"
        style={{ y, x: springX, rotateZ: springX }}
      />
      <motion.div
        className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-accent/[0.03] blur-3xl"
        style={{ y: useTransform(y, value => `${parseFloat(value) * -0.5}%`), x: springY }}
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          className="flex min-h-[100vh] flex-col items-center justify-center py-20 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ opacity }}
        >
          {/* Animated Badge with Countdown */}
          {config.showAnimatedBadge && (
            <motion.div
              className="mb-8 inline-flex"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              style={{ x: springX, y: springY }}
            >
              <div className="flex flex-col items-center gap-2 rounded-full border border-border bg-background/50 backdrop-blur-sm px-6 py-3 text-sm">
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Sparkles className="h-4 w-4 text-primary" />
                  </motion.div>
                  <span data-editable="badge" className="text-muted-foreground">
                    {config.badge}
                  </span>
                </div>
                <Countdown date={config.countdownDate} renderer={countdownRenderer} />
              </div>
            </motion.div>
          )}

          {/* Main Title with Typed Animation */}
          <motion.h1
            className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
            variants={itemVariants}
          >
            <span data-editable="title" className="text-foreground">
              {config.title}
            </span>
            <br />
            <span className="relative">
              <Typed
                strings={config.typedStrings}
                typeSpeed={50}
                backSpeed={30}
                backDelay={2000}
                loop
                className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent"
              />
              <motion.svg
                className="absolute -right-2 -top-2 h-6 w-6 text-primary/60"
                fill="currentColor"
                viewBox="0 0 24 24"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </motion.svg>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            data-editable="subtitle"
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
            variants={itemVariants}
          >
            {config.subtitle}
          </motion.p>

          {/* Feature Pills */}
          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
            variants={itemVariants}
          >
            {[
              { Icon: Feature1Icon, text: config.feature1Text, key: 'feature1Text' },
              { Icon: Feature2Icon, text: config.feature2Text, key: 'feature2Text' },
              { Icon: Feature3Icon, text: config.feature3Text, key: 'feature3Text' },
            ].map(({ Icon, text, key }, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 rounded-full border border-border bg-background/50 px-4 py-2 text-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                style={{
                  x: useTransform(springX, value => value * (index - 1) * 0.1),
                  y: useTransform(springY, value => value * (index - 1) * 0.1),
                }}
              >
                <Icon className="h-4 w-4 text-primary" />
                <span data-editable={key} className="text-muted-foreground">
                  {text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div className="mt-10 flex flex-col gap-4 sm:flex-row" variants={itemVariants}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="group px-8 text-base font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
                onClick={() => navigate(config.primaryCTAHref)}
                data-editable-href="primaryCTAHref"
                data-href={config.primaryCTAHref}
              >
                <span data-editable="primaryCTA">{config.primaryCTA}</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-border/50 backdrop-blur-sm text-base font-medium hover:bg-background/50 transition-all"
                onClick={() => navigate(config.secondaryCTAHref)}
                data-editable-href="secondaryCTAHref"
                data-href={config.secondaryCTAHref}
              >
                <span data-editable="secondaryCTA">{config.secondaryCTA}</span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Trusted By Section */}
          {config.showTrustedLogos && (
            <motion.div className="mt-20 w-full max-w-4xl" variants={itemVariants}>
              <p data-editable="trustedByText" className="mb-6 text-sm text-muted-foreground">
                {config.trustedByText}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 opacity-50 grayscale">
                {[1, 2, 3, 4, 5].map(i => (
                  <motion.div
                    key={i}
                    className="h-8 w-24 rounded bg-muted-foreground/10"
                    whileHover={{ scale: 1.1, opacity: 0.8 }}
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Link to="features" smooth={true} duration={500} className="cursor-pointer">
              <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2"></div>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
