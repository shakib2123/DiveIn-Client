import logo from "../../public/assets/images/logo.png";
import Image from "next/image";
const SideImage = () => {
  return (
    <div
      className="flex-1 bg-cover bg-left hidden md:block"
      style={{
        backgroundImage: `url('/assets/images/authentication-page-bg.jpeg')`,
      }}
    >
      <div className="bg-black/60 w-full min-h-screen h-full backdrop-blur-sm flex flex-col justify-center md:space-y-16 lg:space-y-20  items-center">
        <Image
          placeholder="blur"
          src={logo}
          alt="logo"
          className="max-w-40 lg:max-w-48"
        />
        <h2 className="md:text-3xl lg:text-5xl text-center text-gray-200 px-2 leading-normal md:leading-loose lg:leading-relaxed max-w-3xl mx-auto">
          Create your
          <span className="bg-primary-600/10 border-4 rounded-lg border-primary-600 p-[2px] w-fit ml-2 text-primary-600 font-semibold">
            DiveIn
          </span>{" "}
          Account Dive into a virtual world of possibilities!
        </h2>
      </div>
    </div>
  );
};

export default SideImage;
