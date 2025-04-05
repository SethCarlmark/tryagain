import Image from 'next/image';
import Link from 'next/link';

export default function Analytics() {
  return (
    <section className="px-6 md:px-16 lg:px-24 xl:px-32 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <Image
            src="/images/analytics.png"
            alt="Analytics dashboard"
            width={550}
            height={550}
            className="object-contain"
          />
        </div>
        <div className="order-1 lg:order-2">
          <p className="text-accent font-roboto font-bold text-xl uppercase tracking-widest mb-4">
            Analytics
          </p>
          <h2 className="font-outfit font-bold text-3xl md:text-4xl capitalize leading-tight text-white mb-6">
            built-in analytics to track your nfts
          </h2>
          <p className="font-roboto font-bold text-xl text-white mb-8">
            Use our built-in analytics dashboard to pull valuable insights and monitor the value of your Krypto portfolio over time.
          </p>
          <div>
            <Link 
              href="#analytics" 
              className="btn-primary inline-block"
            >
              buy nfts
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 