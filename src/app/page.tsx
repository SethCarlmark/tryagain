import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedLogos from './components/FeaturedLogos';
import Analytics from './components/Analytics';
import MobileApp from './components/MobileApp';
import Access from './components/Access';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Decorative blurred circles */}
      <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-teal opacity-80 blur-[250px] -z-10"></div>
      <div className="absolute left-0 bottom-0 w-96 h-96 rounded-full bg-light-blue blur-[250px] -z-10"></div>
      
      <Navbar />
      <Hero />
      <FeaturedLogos />
      <Analytics />
      <MobileApp />
      <Access />
      <Testimonials />
      <CTASection />
      
      {/* Footer section */}
      <footer className="px-6 md:px-16 lg:px-24 xl:px-32 py-16 md:py-24 bg-dark-blue">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 mb-12">
          <div>
            <h3 className="font-outfit font-semibold text-2xl uppercase text-white mb-6">
              krypto
            </h3>
            <ul className="space-y-4">
              <li className="font-roboto text-white hover:text-accent">Home</li>
              <li className="font-roboto text-white hover:text-accent">About</li>
              <li className="font-roboto text-white hover:text-accent">Buy NFTs</li>
              <li className="font-roboto text-white hover:text-accent">Sell NFTs</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-outfit font-semibold text-xl text-white mb-6">
              Market
            </h3>
            <ul className="space-y-4">
              <li className="font-roboto text-white hover:text-accent">Browse NFTs</li>
              <li className="font-roboto text-white hover:text-accent">Buy NFTs</li>
              <li className="font-roboto text-white hover:text-accent">Sell NFTs</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-outfit font-semibold text-xl text-white mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="font-roboto text-white hover:text-accent">Email</li>
              <li className="font-roboto text-white hover:text-accent">LinkedIn</li>
              <li className="font-roboto text-white hover:text-accent">Instagram</li>
              <li className="font-roboto text-white hover:text-accent">Twitter</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-outfit font-semibold text-xl text-white mb-6">
              Join our newsletter
            </h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-grow">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-dark-blue border border-white/10 rounded-[30px] py-4 px-5 w-full text-white outline-none focus:border-accent"
                />
              </div>
              <button className="bg-purple-btn rounded-[30px] px-6 py-4 text-white uppercase tracking-wider">
                Submit
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2024 Krypto. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
