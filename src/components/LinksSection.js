// src/components/Footer.js
import React from 'react';

const links = [
  { label: '🌍 Latest Adventures: Discover New Places', href: 'https://example.com/adventures' },
  { label: '📸 Instagram Highlights: See Our Best Moments', href: 'https://example.com/highlights' },
  { label: '✈️ Travel Tips: Plan Your Perfect Trip', href: 'https://example.com/tips' },
  { label: '📖 Budget Travel Hacks: Get Your Copy Today!', href: 'https://10ab4m4xz4ss4q0d3mvi1oax6l.hop.clickbank.net' },
  { label: '🌱 Donate Today: Empower and Inspire', href: 'https://www.paypal.com/pools/c/986hCCzcVe' },
  { label: '☕ Java Burn: Ignite your Soul', href: 'https://hop.clickbank.net/?vendor=javaburn&affiliate=travart01&lid=6100&tid=66c5dqtx64vfanchcg-4ort70' },
];

const LinksSection = () => {
  return (
    <section id="explore" className="my-10 px-5 flex justify-center">
      <div className="flex flex-wrap justify-center gap-6 max-w-screen-lg">
        {links.map((link, index) => {
          const bgColor = index % 2 === 0 ? 'from-teal-500 to-teal-700' : 'from-green-500 to-green-700';
          return (
          <a
            key={index}
            href={link.href}
              className={`bg-gradient-to-br ${bgColor} text-white text-lg font-semibold py-10 px-14 rounded-lg shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-1 text-center flex-grow max-w-[30%] min-w-[250px] border-2 border-transparent hover:border-yellow-400 hover:scale-105`}
            target="_blank"
            rel="noopener noreferrer"
          >
              {link.label.split(': ').map((text, i) => (
                <React.Fragment key={i}>
                  {i === 0 ? (
                    <span className="block text-xl font-bold">{text}</span>
                  ) : (
                    <span className={index % 2 === 0 ? 'text-yellow-300' : 'text-green-200'}>
                      {text}
                    </span>
                  )}
                  {i < link.label.split(': ').length - 1 && <br />}
                </React.Fragment>
              ))}
          </a>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
