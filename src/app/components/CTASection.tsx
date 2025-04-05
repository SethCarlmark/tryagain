import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="px-6 md:px-16 lg:px-24 xl:px-32 py-16 md:py-24">
      <div className="gradient-bg rounded-[30px] p-10 md:p-20 flex flex-col items-center text-center">
        <p className="text-black font-outfit font-bold text-3xl md:text-5xl mb-4">
          are you ready?
        </p>
        <h2 className="font-outfit font-bold text-4xl md:text-6xl lg:text-7xl capitalize text-white mb-12 max-w-5xl">
          be a part of the next big thing
        </h2>
        <div>
          <Link 
            href="#get-started" 
            className="btn-primary inline-block"
          >
            get started
          </Link>
        </div>
      </div>
    </section>
  );
} 