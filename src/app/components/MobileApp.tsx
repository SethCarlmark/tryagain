import Image from 'next/image';
import Link from 'next/link';

export default function MobileApp() {
  return (
    <section className="px-6 md:px-16 lg:px-24 xl:px-32 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-accent font-roboto font-bold text-xl uppercase tracking-widest mb-4">
            get our app
          </p>
          <h2 className="font-outfit font-bold text-3xl md:text-4xl capitalize leading-tight text-white mb-6">
            browse nfts from your smartphone
          </h2>
          <p className="font-roboto font-bold text-xl text-white mb-8">
            Our Krypto app is the easiest way to keep track of your assets when you're on the go.
          </p>
          <div>
            <Link 
              href="#download" 
              className="btn-primary inline-block"
            >
              download on ios
            </Link>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/images/mobile-app.png"
            alt="Mobile app interface"
            width={550}
            height={550}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
} 