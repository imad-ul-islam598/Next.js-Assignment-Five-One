import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex items-center justify-center p-8 md:p-16 bg-white">
      <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto md:space-x-16 space-y-8 md:space-y-0">
        {/* Text Section */}
        <div className="flex flex-col space-y-4 max-w-md text-center md:text-left">
          <h1
            className="text-2xl md:text-3xl leading-[40px] md:leading-[50px] tracking-[2px] md:tracking-[3px] font-bold font-serif text-gray-900"
            style={{ fontFamily: "Libre Bodoni" }}
          >
            IMPECCABLE <br className="hidden md:block" /> CRAFTSMANSHIP AND{" "}
            <br className="hidden md:block" /> FINESSE
          </h1>
          <p
            className="text-[#787054] font-serif font-semibold text-lg md:text-xl"
            style={{ fontFamily: "Libre Bodoni" }}
          >
            An example of intricate workmanship and detail, elegant necklaces
            and long and short chains form a part of our desirable collection.
          </p>
          <button
            className="bg-[#A29875] font-serif text-white w-full md:w-[247px] h-[49px] rounded-lg shadow-md hover:bg-[#bbad79] transition duration-200"
            style={{ fontFamily: "Libre Bodoni" }}
          >
            Explore Now
          </button>
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center">
          {/* Main Image with Custom Rounded Corners */}
          <div className="relative w-[280px] h-[380px] md:w-[421px] md:h-[573px] overflow-hidden rounded-tl-[80px] rounded-br-[20px] md:rounded-tl-[120px] md:rounded-br-[30px]">
            <Image
              src="/hero-image.png"
              alt="Jewelry"
              layout="fill"
              objectFit="cover"
              className="rounded-tl-[80px] rounded-br-[20px] md:rounded-tl-[120px] md:rounded-br-[30px]"
              priority
            />
          </div>
          {/* Decorative Overlay Border */}
          <div className="absolute inset-2 md:inset-4 border-[1.5px] md:border-[2px] border-gray-300 rounded-tl-[80px] rounded-br-[80px] md:rounded-tl-[120px] md:rounded-br-[120px]" />
          </div>
      </div>
    </div>
  );
};

export default Hero;
