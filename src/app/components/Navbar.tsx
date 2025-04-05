import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-8 px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="font-outfit font-semibold text-2xl uppercase text-white">
        krypto
      </div>
      <div className="hidden lg:flex gap-10">
        {['about', 'pricing', 'contact', 'buy nfts'].map((item) => (
          <Link key={item} href={`#${item.replace(/\s+/g, '-')}`} className="font-outfit font-bold text-xl uppercase text-white hover:text-primary">
            {item}
          </Link>
        ))}
      </div>
      <button className="lg:hidden text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  );
} 