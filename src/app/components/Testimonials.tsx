import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      image: '/images/testimonial1.png',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.',
    },
    {
      id: 2,
      image: '/images/testimonial2.png',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.',
    },
    {
      id: 3,
      image: '/images/testimonial3.png',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.',
    },
  ];

  return (
    <section className="px-6 md:px-16 lg:px-24 xl:px-32 py-16 md:py-24">
      <div className="text-center mb-16">
        <p className="text-accent font-roboto font-bold text-xl uppercase tracking-widest mb-4">
          testimonials
        </p>
        <h2 className="font-outfit font-bold text-3xl md:text-4xl capitalize leading-tight text-white">
          see what others are saying
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.id} 
            className="bg-dark-card rounded-[40px] p-8 flex flex-col items-center"
          >
            <div className="w-24 h-24 rounded-full overflow-hidden mb-6">
              <Image 
                src={testimonial.image} 
                alt={`Testimonial ${testimonial.id}`} 
                width={96} 
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-white font-roboto text-lg text-center">
              {testimonial.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
} 