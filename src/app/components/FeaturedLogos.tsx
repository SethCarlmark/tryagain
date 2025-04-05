import Image from 'next/image';

export default function FeaturedLogos() {
  const logos = [
    { src: '/images/logo1.png', alt: 'Featured Logo 1' },
    { src: '/images/logo2.png', alt: 'Featured Logo 2' },
    { src: '/images/logo3.png', alt: 'Featured Logo 3' },
    { src: '/images/logo4.png', alt: 'Featured Logo 4' },
  ];

  return (
    <section className="px-6 md:px-16 lg:px-24 xl:px-32 py-16 md:py-24">
      <p className="text-center font-roboto text-xl uppercase tracking-widest text-white mb-10">
        Featured on
      </p>
      <div className="bg-primary-dark bg-opacity-80 rounded-lg p-8 md:p-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div key={index} className="w-full max-w-[150px]">
              <Image 
                src={logo.src} 
                alt={logo.alt}
                width={150}
                height={50}
                className="w-full h-auto object-contain" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 