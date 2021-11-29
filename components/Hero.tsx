import Image from "next/image";

const Hero = () => {
  return (
    <div
      className="max-w-full py-10 bg-[#2a2a72] min-w-max flex flex-col w-full md:space-x-28  items-center justify-start md:justify-evenly md:items-start md:flex-row bg-hero-pattern bg-gradient-to-r from-blue-200 via-blue-300 to-blue-900 transition-all transform "
      style={{ backgroundImage: `url(require("../images/mobiles.png"))` }}
    >
      <div className="  flex flex-col  top-10 left-24 md:items-start items-center justify-center md:justify-start">
        <div className="rounded-full h-44 w-44 bg-red-600" />
        <div className="text-center mt-14   flex flex-col items-center md:items-start">
          <p className="text-6xl font-semibold">BARB</p>
          <p className="text-2xl font-semibold">A saloon booking app</p>
        </div>
      </div>

      <div className="mt-24 p-5 md:mt-0 flex items-center ml-10 md:ml-0">
        <Image
          src={require("../images/mobiles.png")}
          height={600}
          width={400}
        />
      </div>
    </div>
  );
};

export default Hero;

// background-color: #2a2a72;
// background-image: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);
