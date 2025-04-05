import Image from "next/image"; import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative px-6 md:px-16 lg:px-24 xl:px-32 pt-8 pb-24">
      {/* Decorative blurred circles */}
      <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-teal opacity-80 blur-[250px] -z-10"></div>
      <div className="absolute left-0 bottom-0 w-96 h-96 rounded-full bg-light-blue blur-[250px] -z-10"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h1 className="font-outfit font-bold text-4xl md:text-5xl lg:text-7xl capitalize leading-tight text-white mb-6">
            discover and collect rare NFTs
          </h1>
          <p className="font-roboto font-bold text-xl text-white mb-10 max-w-xl">
            The most secure marketplace for buying and selling unique crypto assets.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link 
              href="#buy-nfts" 
              className="btn-primary min-w-[180px] text-center"
            >
              buy nfts
            </Link>
            <Link 
              href="#sell-nfts" 
              className="btn-outline min-w-[180px] text-center"
            >
              sell nfts
            </Link>
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
          <Image
            src="/images/hero-image.png"
            alt="NFT artwork showcase"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
