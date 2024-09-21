import React from 'react';

const LinksSection = () => {
  const links = [
    { label: '🌍 Latest Adventures', href: '#' },
    { label: '📸 Instagram Highlights', href: '#' },
    { label: '✈️ Travel Tips', href: '#' },
    { label: '📅 Upcoming Trips', href: '#' },
    { label: '🌱 Eco Travel Guides', href: '#' },
  ];

  return (
    <section id="explore" className="my-10 px-5">
      <div className="flex flex-col items-center gap-6">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="bg-blue-600 text-white text-lg font-medium py-4 px-8 rounded-full shadow-md hover:bg-blue-700 transition-all"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
};

export default LinksSection;
