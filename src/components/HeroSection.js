// src/components/HeroSection.js
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { gsap } from 'gsap';

const HeroSection = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, delay: 0.5, duration: 1, ease: 'elastic.out(1, 0.75)' }
    );

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, delay: 1, duration: 0.8, ease: 'power2.out' }
    );
  }, []);

  const images = [
    'https://images.unsplash.com/photo-1468413253725-0d5181091126?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Add your own image URLs here
    'https://plus.unsplash.com/premium_photo-1696703658499-8a6f001fd7d4?q=80&w=1529&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1489914169085-9b54fdd8f2a2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1441&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1439405326854-014607f694d7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1446488614340-2d1a68d662f9?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  return (
    <header
      ref={heroRef}
      className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-r from-teal-500 to-green-600 text-white"
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-0 bg-black bg-opacity-30 z-0"></div>
      <div className="relative z-10 text-center p-5">
        <h1
          ref={textRef}
          className="text-5xl font-bold drop-shadow-lg tracking-wider mb-4"
        >
          Discover Your Next Adventure
        </h1>
        <p className="text-lg mb-6">
          Join our global community of eco-conscious travelers.
        </p>
        <a
          ref={buttonRef}
          href="#explore"
          className="mt-6 inline-block bg-yellow-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105"
        >
          Start Exploring
        </a>
      </div>
    </header>
  );
};

export default HeroSection;
