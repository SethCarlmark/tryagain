import Image from 'next/image';
import Link from 'next/link';

export default function Access() {
  return (
    <section className="px-6 md:px-16 lg:px-24 xl:px-32 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <Image
            src="/images/access.png"
            alt="24/7 access illustration"
            width={550}
            height={550}
            className="object-contain"
          />
        </div>
        <div className="order-1 lg:order-2">
          <p className="text-accent font-roboto font-bold text-xl uppercase tracking-widest mb-4">
            24/7 access
          </p>
          <h2 className="font-outfit font-bold text-3xl md:text-4xl capitalize leading-tight text-white mb-6">
            sell your nFTs from anywhere at any time
          </h2>
          <p className="font-roboto font-bold text-xl text-white mb-8">
            With our easy-to-use platform, you can buy or sell assets from anywhere in the world, at any time.
          </p>
          <div>
            <Link 
              href="#get-started" 
              className="btn-primary inline-block"
            >
              get started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 