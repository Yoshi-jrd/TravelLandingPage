import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );
  }, []);

  return (
    <header
      ref={heroRef}
      className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/path/to/hero-background.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center p-5">
        <h1 className="text-5xl font-bold drop-shadow-lg">
          Discover Your Next Adventure
        </h1>
        <p className="mt-4 text-lg">
          Join our global community of eco-conscious travelers.
        </p>
        <a
          href="#explore"
          className="mt-6 inline-block bg-green-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105"
        >
          Start Exploring
        </a>
      </div>
    </header>
  );
};

export default HeroSection;
